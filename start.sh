#!/bin/sh
# Iniciar o backend em background
cd /app/backend && node dist/app.js &
# Iniciar o nginx em foreground
nginx -g 'daemon off;'