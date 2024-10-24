# Etapa de build do backend
FROM node:16-alpine AS build-backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
RUN npm run build

# Etapa de build do frontend
FROM node:16-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Etapa final combinando frontend e backend
FROM nginx:alpine
# Instalar Node.js no container do nginx
RUN apk add --update nodejs npm

# Copiar arquivos do backend
WORKDIR /app/backend
COPY --from=build-backend /app/backend/package*.json ./
COPY --from=build-backend /app/backend/dist ./dist
COPY --from=build-backend /app/backend/node_modules ./node_modules

# Copiar arquivos do frontend
COPY --from=build-frontend /app/frontend/dist /usr/share/nginx/html

# Configurar nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor portas
EXPOSE 80 5001

# Script para iniciar tanto o nginx quanto o node
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]