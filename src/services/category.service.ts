import { ICreateCategory } from "../interfaces";
import AppError from "../errors/appError";
import { prisma } from "..";



export async function createCategoryService(data: ICreateCategory) {
  const checkCategory = await prisma.category.findUnique({
    where: {
      name: data.name
    }
  })

  if (checkCategory) {
    throw new AppError('Essa categoria já está cadastrada', 400)
  }

  const newCategory = await prisma.category.create({
    data: {
      name: data.name
    }
  })

  return newCategory
}
