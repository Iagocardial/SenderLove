# Backend Target
# Usar a imagem base do Node.js
FROM node:18-alpine
# Definir o diretório de trabalho
WORKDIR /app
# Copiar o arquivo package.json e o package-lock.json primeiro para otimizar o cache
COPY backend/package*.json ./
# Instalar as dependências
RUN npm install --production
# Copiar o restante dos arquivos da aplicação
COPY backend/ .
# Compilar o TypeScript se necessário
RUN npm run build
# Expor a porta que o servidor utiliza
EXPOSE 5001
# Comando para iniciar o backend
CMD ["npm", "start"]

# Frontend Target
FROM node:18-alpine AS frontend-build

WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ .
RUN npm run build

# Servindo o Frontend com NGINX
FROM nginx:alpine AS frontend

COPY --from=frontend-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]