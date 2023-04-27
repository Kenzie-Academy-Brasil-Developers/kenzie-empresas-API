import { NextFunction, Request, Response } from "express";
import { IDepartmentCreateData } from "../interfaces";
import { createDepartmentService } from "../services/department.service";

export const createDepartmentController = async (req:Request, res: Response, next: NextFunction) => {
  const data: IDepartmentCreateData = req.body
  const {id} = req.user

  try {
    const newDepartment = await createDepartmentService(data, id)

    return res.send(newDepartment)
  } catch (error) {
    next(error)
  }
}