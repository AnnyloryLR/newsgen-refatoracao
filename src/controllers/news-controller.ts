import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "./../services/news-service";

import { AlterNewsData, CreateNewsData } from "../repositories/news-repository";

export async function getAllNews(req: Request, res: Response) {
  const news = await service.selectAllNews();
  return res.send(news);
}

export async function getNewsById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const invalidId  = isNaN(id) || id <= 0;

  if (invalidId) {
    return res.status(httpStatus.BAD_REQUEST).send("Id is not valid.");
  }

  const news = await service.selectNewsById(id);
  return res.send(news);
}

export async function createNews(req: Request, res: Response) {
  const newsData = req.body as CreateNewsData;
  const createdNews = await service.insertNews(newsData);

  return res.status(httpStatus.CREATED).send(createdNews);
}

export async function updateNews(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const invalidId  = isNaN(id) || id <= 0;
  
  if (invalidId) {
    return res.status(httpStatus.BAD_REQUEST).send("Id is not valid.");
  }

  const newsData = req.body as AlterNewsData;
  const alteredNews = await service.alterNews(id, newsData);

  return res.send(alteredNews);
}

export async function deleteNews(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const invalidId  = isNaN(id) || id <= 0;
  
  if (invalidId) {
    return res.status(httpStatus.BAD_REQUEST).send("Id is not valid.");
  }

  await service.removeNews(id);
  return res.sendStatus(httpStatus.NO_CONTENT);
}