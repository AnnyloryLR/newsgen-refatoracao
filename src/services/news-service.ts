import prisma from "../database";
import * as newsRepository from "../repositories/news-repository";
import { AlterNewsData, CreateNewsData } from "../repositories/news-repository";

export async function getAllNews() {
  return newsRepository.findAllNews();
}

export async function getNewsById(id: number) {
  const news = await newsRepository.findNewsById(id);
  if (!news) {
    throw {
      name: "NotFound",
      message: `News with id ${id} not found.`
    }
  }

  return news;
}

export async function insertNews(newsData: CreateNewsData) {
  validateNewsData(newsData);
  return newsRepository.createNews(newsData);
}

export async function alterNews(id: number, newsData: AlterNewsData) {
  const news = await getNewsById(id);
  const isNew = news.title !== newsData.title;

  validateNewsData(newsData, isNew);

  return newsRepository.updateNews(id, newsData);
}

export async function removeNews(id: number) {
  await getNewsById(id);
  return newsRepository.deleteNews(id);
}

async function existsByTitle(title: string, isNew:boolean){
  const existentTitle = await prisma.news.findFirst({
      where: { title: title }
  });

  if (existentTitle) {
    throw {
      name: "Conflict",
      message: `News with title ${title} already exist`
    }
  }
}

function validateTextLength(textLength: number){
  const minLength = 500;
  const invalidTextLength = textLength < minLength;

  if (invalidTextLength) {
    throw {
      name: "BadRequest",
      message: "The news text must be at least 500 characters long.",
    };
  }
}

function isOldNews(date: Date){
  const currentDate = new Date();
  const publicationDate = new Date(date);

  const oldPublication = publicationDate.getTime() < currentDate.getTime();

  if (oldPublication) {
    throw {
      name: "BadRequest",
      message: "The publication date cannot be in the past.",
    };
  }
}

function validateNewsData(newsData: CreateNewsData, isNew = true) {
  const title = newsData.title;
  const date = newsData.publicationDate; 
  const textLength = newsData.text.length;
 
  existsByTitle(title, isNew);
  validateTextLength(textLength);
  isOldNews(date);
}