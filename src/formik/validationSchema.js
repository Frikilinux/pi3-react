import * as yup from 'yup'
import { mailRegex, passwordRegex } from '../constants/regexs'

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .matches(mailRegex, 'Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required'),
})
export const registerValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .matches(mailRegex, 'Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'At least 8 characters or more')
    .matches(passwordRegex, 'Should contain 0-9, a-z, A-Z, !@#$%^&*')
    .required('Password is required'),
  name: yup.string().trim().required('Name is required'),
})
