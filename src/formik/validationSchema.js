import * as yup from 'yup'
import { mailRegex, passwordRegex } from '../constants/regexs'

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    // .matches(mailRegex, 'Mail no válido')
    .required('Campo requerido'),
  password: yup
    .string()
    // .min(8, 'Mínimo de 8 caracteres')
    .required('Campo requerido')
    // .matches(
    //   passwordRegex,
    //   'Permitidos 0-9, a-z, A-Z, !@#$%^&*'
    // ),
})
