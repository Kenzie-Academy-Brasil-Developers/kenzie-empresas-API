import { prisma } from "..";
import AppError from "../errors/appError";
import { IDepartmentCreateData } from "../interfaces";

export const createDepartmentService = async (data: IDepartmentCreateData, id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if(!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado')
  }

  if(!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem cadastrar uma nova empresa')
  }

  const checkCompany = await prisma.company.findUnique({
    where: {
      id: data.company_id
    }
  })

  if(!checkCompany) {
    throw new AppError('Empresa não encontrada, por favor verifique o id da empresa informada e tente novamente')
  }

  const checkDepartment = await prisma.department.findFirst({
    where: {
      name: data.name,
      company_id: data.company_id
    }
  })

  if(checkDepartment) {
    throw new AppError('Departamento já cadastrado nesta empresa')
  }

  const newDepartment = await prisma.department.create({
    data
  })

  return newDepartment
}