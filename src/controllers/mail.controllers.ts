// src/controllers/mailController.ts
import { Request, Response } from 'express';
import { transport } from '../config/mailer.config.ts';
import { giftIdeas } from '../mail-templates/emailTemplates.ts';

// Função para enviar email com tipos apropriados
export const sendMail = async (req: Request, res: Response): Promise<void> => {
  try {
    // Definir o formato esperado para o body da requisição
    const { name, email, subject, message } = req.body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    await transport.sendMail({
      to: process.env.RECIPIENT_ADDRESS,
      subject: `[Sender Love] ${subject}`,
      html: giftIdeas,
    });

    res.status(200).json({ message: "Successfully sent message" });
  } catch (error) {
    // Garantir que o erro tenha uma mensagem definida
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error occurred' });
    }
  }
};