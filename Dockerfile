# Backend Target
FROM node:18-alpine AS backend

WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
RUN npm run build
EXPOSE 5001
CMD ["npm", "run", "start-prod"]

# Frontend Target
FROM node:18-alpine AS frontend-build

WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Servindo o Frontend com NGINX
FROM nginx:alpine AS frontend
COPY --from=frontend-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]