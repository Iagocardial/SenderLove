import { Router } from 'express';
import { sendMail } from '../controllers/mail.controllers';

const router = Router();

router.post('/subscribe', (req, res) => {
  sendMail(req,res)

  res.status(200).json({ message: "Successfully sent message" });
});

export default router;