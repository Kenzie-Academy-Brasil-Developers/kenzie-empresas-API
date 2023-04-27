import { NextFunction, Request, Response } from "express";
import { ICompanyCreateData } from "../interfaces";
import { companyCreateService } from "../services/company.service";

export const createCompanyController = async (req: Request, res: Response, next: NextFunction) => {
  const data: ICompanyCreateData = req.body
  const { id } = req.user

  try {
    const newCompany = await companyCreateService(data, id)

    return res.send(newCompany)
  } catch (error) {
    next(error)
  }
}