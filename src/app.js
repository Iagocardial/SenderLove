const express = require('express');
const { transport } = require('./config/mailer.config');
const { firstTemplateHtml,giftIdeas } = require('./mail-templates/emailTemplates')

const app = express()

const routes = express.Router()

app.use(express.json());

app.use(routes)

routes.get('/', (req, res) => {
  res.send('Hello world')
})

routes.post('/mail', async (req, res) => {
  try {
    //these are attributtes inputted by the user
    console.log(req.body)

    const {name, email, subject, message} = req.body 

    await transport.sendMail({
      to: process.env.RECIPIENT_ADDRESS,
      subject: `[Sender Love] ${subject}`,
      html: giftIdeas
    })
    //status 200 means our request was successful
    res.status(200).json({message: "Successfully sent message"})
  } catch (e) {
    res.status(400).json(e.message)  
  }
})

app.listen(5001, () => console.log('Server is now online on port 5001'))