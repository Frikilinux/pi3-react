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
  IconUser,
  IconMapPin,
  IconPhone,
  IconMail,
} from '@tabler/icons-react'
import { contactValidationSchema } from '../../../formik/validationSchema'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { ErrorMsg } from '../../../components/UI/InputUser/InputUserStd'
import { useContact } from '../../../hooks/useContact'
import { useSelector } from 'react-redux'

const ContactSection = () => {
  const { sendContactMsg, sending } = useContact()
  const { user } = useSelector(({ user }) => user)

  return (
    <SectionWrapper bg='#0b0d18' id='contact'>
      <h2 style={{ padding: '20px' }}>Please contact us</h2>
      <ContactContainer>
        <Formik
          initialValues={{
            name: user?.name || '',
            email: user?.email || '',
            message: '',
          }}
          validationSchema={contactValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            const res = await sendContactMsg(values)
            res === 'OK' && resetForm()
          }}
        >
          <ContactFormContainer>
            <Form style={{ width: '80%' }}>
              <InputUser
                name='name'
                icon={<IconUser />}
                placeholder='Your name'
                type='text'
              />
              <InputUser
                name='email'
                icon={<IconAt />}
                placeholder='Your email'
                type='text'
              />

              <Field name='message'>
                {({ field, form: { errors, touched } }) => {
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

              <ButtonPrimary
                type='submit'
                disabled={sending}
                fetching={sending}
              >
                {sending ? 'Sending...' : 'Send'}
              </ButtonPrimary>
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
            <p>info@brainsdamage.com</p>
          </div>
        </ContactData>
      </ContactContainer>
    </SectionWrapper>
  )
}

export default ContactSection
