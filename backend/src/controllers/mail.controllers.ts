import { Request, Response } from 'express';
import { transport } from '../config/mailer.config';
import { giftIdeas } from '../mail-templates/emailTemplates';

export const sendMail = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email } = req.body;

    const info = await transport.sendMail({
      to: email,
      subject: `[Sender Love]`,
      html: giftIdeas,
    });

    return info

  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);

    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(400).json({ message: 'Unknown error occurred' });
  }
};