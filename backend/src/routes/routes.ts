// routes.ts
import { Router, Request, Response } from 'express';
import { sendMail } from '../controllers/mail.controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

router.post('/mail', sendMail);

export default router;