'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    const data = await resend.emails.send({
      from: 'EcoSip Contact Form <onboarding@resend.dev>',
      to: 'sohanshetty2001@gmail.com',
      subject: 'Customer from EcoSip',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
