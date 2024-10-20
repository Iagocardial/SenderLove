// src/mail-templates/emailTemplates.ts
import fs from 'fs';
import path from 'path';

// Definir o tipo da função, que recebe o nome do arquivo e retorna uma string
const loadTemplate = (fileName: string): string => {
  const filePath = path.join(__dirname, 'templates', fileName);
  return fs.readFileSync(filePath, 'utf8');
};

// Carregar os templates
const firstTemplateHtml: string = loadTemplate('first-html.html');
const giftIdeas: string = loadTemplate('gifts-ideas.html');

// Exportar os templates
export { firstTemplateHtml, giftIdeas };