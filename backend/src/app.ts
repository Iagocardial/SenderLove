import express from 'express';
import bodyParser from 'body-parser';
import subscribeRoutes from './routes/subscriber';

const app = express();
app.use(bodyParser.json());

app.use('/api', subscribeRoutes);

app.listen(5001, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 5001');
});