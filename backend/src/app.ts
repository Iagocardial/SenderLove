import express from 'express';
import bodyParser from 'body-parser';
import subscribeRoutes from './routes/subscriber';
import health from './routes/health-check';

const app = express();
app.use(bodyParser.json());

app.use('/api', subscribeRoutes);
app.use('/api', health);

const port = process.env.PORT || 5001;

console.log('Iniciando o servidor backend')

app.listen(port as number, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});