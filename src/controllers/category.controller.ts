import { NextFunction, Request, Response } from "express";
import { createCategoryService } from "../services/category.service";
import { ICreateCategory } from "../interfaces";


export async function createCategoryController(req: Request, res: Response, next: NextFunction) {
  const data: ICreateCategory = req.body

  try {
    const newCategory = await createCategoryService(data)

    return res.json(newCategory)
  } catch (error) {
    next(error)
  }
}
