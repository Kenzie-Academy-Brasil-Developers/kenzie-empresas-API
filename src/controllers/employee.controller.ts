import { NextFunction, Request, Response } from "express";
import { IEmployeeCreateData } from "../interfaces";
import { createAdmService, createEmployeeService } from "../services/employee.service";

export const employeeCreateController = async (req: Request, res: Response, next: NextFunction) => {
  const data: IEmployeeCreateData = req.body

  try {
    const newEmployee = await createEmployeeService(data)

    return res.send(newEmployee)
  } catch (error) {
    next(error)
  }
}

export const admCreateController = async (req: Request, res: Response, next: NextFunction) => {
  const data: IEmployeeCreateData = req.body

  try {
    const newAdm = await createAdmService(data)

    return res.send(newAdm)
  } catch (error) {
    next(error)
  }
}