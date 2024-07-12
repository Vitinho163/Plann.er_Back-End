import nodemailer from 'nodemailer'
import { env } from '../env'

export async function getMailClient() {

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PASS,
    }
  })

  return transporter
}