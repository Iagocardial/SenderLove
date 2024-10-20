import fs from 'fs';
import path from 'path';

const loadTemplate = (fileName: string): string => {
  const filePath = path.join(__dirname, 'templates', fileName);
  return fs.readFileSync(filePath, 'utf8');
};

const firstTemplateHtml: string = loadTemplate('first-html.html');
const giftIdeas: string = loadTemplate('gifts-ideas.html');

export { firstTemplateHtml, giftIdeas };