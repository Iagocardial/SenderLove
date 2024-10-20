// const express = require('express');
// const { transport } = require('./src/config/mailer.config');
// const { firstTemplateHtml,giftIdeas } = require('./src/mail-templates/emailTemplates')

// const app = express()

// const routes = express.Router()

// app.use(express.json());

// app.use(routes)

// routes.get('/', (req, res) => {
//   res.send('Hello world')
// })

// routes.post('/mail', async (req, res) => {
//   try {

//     const {name, email, subject, message} = req.body 

//     await transport.sendMail({
//       to: process.env.RECIPIENT_ADDRESS,
//       subject: `[Sender Love] ${subject}`,
//       html: giftIdeas
//     })

//     res.status(200).json({message: "Successfully sent message"})
//   } catch (e) {
//     res.status(400).json(e.message)  
//   }
// })

// app.listen(5001, () => console.log('Server is now online on port 5001'))

// app.js
// app.ts

import express, { Application } from 'express';
import routes from './src/routes/routes';

const app: Application = express();

app.use(express.json());
app.use(routes);

app.listen(5001, () => console.log('Server is now online on port 5001'));