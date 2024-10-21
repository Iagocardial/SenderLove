import express from 'express';
import bodyParser from 'body-parser';
import subscribeRoutes from './src/routes/subscriber'; // Importa as rotas separadas

const app = express();
app.use(bodyParser.json());

app.use('/api', subscribeRoutes);

app.listen(5001, '0.0.0.0', () => {
  console.log(`Server rodando na porta 5001`);
});