import express from 'express';
import bodyParser from 'body-parser';
import subscribeRoutes from './src/routes/subscriber'; // Importa as rotas separadas

const app = express();
app.use(bodyParser.json());

app.use('/api', subscribeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});