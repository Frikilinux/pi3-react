import * as yup from 'yup'
import { mailRegex, passwordRegex } from '../constants/regexs'

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .matches(mailRegex, 'Mail no válido')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(8, 'Mínimo de 6 caracteres')
    .required('Campo requerido')
    .matches(
      passwordRegex,
      'Al menos una minúscula, mayuscula, numero y caracter especial'
    ),
})
