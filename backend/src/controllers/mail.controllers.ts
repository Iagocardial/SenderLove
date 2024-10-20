import { Request, Response } from 'express';
import { transport } from '../config/mailer.config.ts';
import { giftIdeas } from '../mail-templates/emailTemplates.ts';

export const sendMail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email } = req.body as {
      name: string;
      email: string;
    };

    await transport.sendMail({
      to: email,
      subject: `[Sender Love]`,
      html: giftIdeas,
    });

    res.status(200).json({ message: "Successfully sent message" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error occurred' });
    }
  }
};