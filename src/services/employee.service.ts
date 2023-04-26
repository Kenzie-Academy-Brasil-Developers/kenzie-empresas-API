import { hash } from "bcryptjs";
import { prisma } from "..";
import AppError from "../errors/appError";
import { IEmployeeCreateData, IEmployeeResponseData } from "../interfaces";

export const createEmployeeService = async (data: IEmployeeCreateData) => {

  if(data.is_adm) {
    throw new AppError('Não é possível criar usuário administrador')
  }

  const checkEmail = await prisma.employee.findUnique({
    where: {
      email: data.email
    }
  })

  if (checkEmail) {
    throw new AppError('Email já cadastrado, por favor informe outro ou faça login')
  }

  const hashedPass = await hash(data.password, 10)


    const newEmployee = await prisma.employee.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPass,
        is_admin: data.is_adm
      },
      include: {
        company: true,
        department: true
      }
    })

  

  const {password, is_admin, ...rest} = newEmployee

  return rest
}

export const createAdmService = async (data: IEmployeeCreateData) => {
  if(data.company_id !== process.env.ADM_CREATE_SECRET) {
    throw new AppError('Por favor pare de tentar criar um usuário adm')
  }

  const checkEmail = await prisma.employee.findUnique({
    where: {
      email: data.email
    }
  })

  if (checkEmail) {
    throw new AppError('Email já cadastrado, por favor informe outro ou faça login')
  }

  const hashedPass = await hash(data.password, 10)


    const newEmployee = await prisma.employee.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPass,
        is_admin: data.is_adm
      },
      include: {
        company: true,
        department: true
      }
    })

  

  const {password, is_admin, ...rest} = newEmployee

  return rest
}