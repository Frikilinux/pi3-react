import * as yup from 'yup'
import { mailRegex, passwordRegex } from '../constants/regexs'

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .matches(mailRegex, 'Email not valid')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
})

export const recoverValidationSchema = yup.object({
  email: yup
    .string()
    .matches(mailRegex, 'Email not valid')
    .required('Email is required'),
})

export const registerValidationSchema = yup.object({
  email: yup
    .string()
    .matches(mailRegex, 'Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'At least 8 characters or more')
    .matches(passwordRegex, 'Should contain 0-9, a-z, A-Z, !@#$%^&*')
    .required('Password is required'),
  name: yup.string().trim().required('Name is required'),
})

export const changePasswordValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'At least 8 characters or more')
    .matches(passwordRegex, 'Should contain 0-9, a-z, A-Z, !@#$%^&*')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export const contactValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(mailRegex, 'Email not valid')
    .required('Email is required'),
  message: yup
    .string()
    .min(50, 'At least 50 characters or more')
    .max(255, 'Max chars 255')
    .required('Some message is required'),
})
