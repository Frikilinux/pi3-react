import React from 'react'
import SectionWrapper from '../../../components/UI/SectionWrapper/SectionWrapper'
import {
  ContactContainer,
  ContactData,
  ContactFormContainer,
  MessageBox,
  MessageBoxContainer,
} from './ContactSectionStd'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import InputUser from '../../../components/UI/InputUser/InputUser'
import {
  IconAt,
  IconLock,
  IconUser,
  IconGps,
  IconMapPin,
  IconPhone,
  IconMail,
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { contactInitialValues } from '../../../formik/initialValues'
import { contactValidationSchema } from '../../../formik/validationSchema'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { ErrorMsg } from '../../../components/UI/InputUser/InputUserStd'

const ContactSection = () => {
  return (
    <SectionWrapper bg='#0b0d18' id='contact'>
      <h2 style={{ padding: '20px' }}>Please contact us</h2>
      <ContactContainer>
        <Formik
          initialValues={contactInitialValues}
          validationSchema={contactValidationSchema}
          // onSubmit={async (values) =>
          //   (await loginUser(values)) && navigate('/')
          // }
        >
          <ContactFormContainer>
            <Form>
              <InputUser
                name='name'
                icon={<IconUser />}
                placeholder='Your name'
                type='text'
              />
              <InputUser
                name='email'
                icon={<IconAt />}
                placeholder='Email'
                type='text'
              />

              <Field name='message'>
                {({ field, form: { setFieldValues, errors, touched } }) => {
                  return (
                    <MessageBoxContainer>
                      <MessageBox
                        placeholder='Write some message'
                        name='message'
                        $isError={errors[field.name] && touched[field.name]}
                        {...field}
                      ></MessageBox>
                      <ErrorMessage name={field.name}>
                        {(message) => <ErrorMsg>{message}</ErrorMsg>}
                      </ErrorMessage>
                    </MessageBoxContainer>
                  )
                }}
              </Field>

              <ButtonPrimary type='submit'>Send message</ButtonPrimary>
            </Form>
          </ContactFormContainer>
        </Formik>
        <ContactData>
          <div>
            <IconMapPin />
            <p>Chacabuco</p>
            <p>Buenos Aires, Argentina</p>
          </div>
          <div>
            <IconPhone />
            <p>+54 2352 123456</p>
            <p>+54 2352 654321</p>
          </div>
          <div>
            <IconMail />
            <p>info@zmusic.com</p>
          </div>
        </ContactData>
      </ContactContainer>
    </SectionWrapper>
  )
}

export default ContactSection