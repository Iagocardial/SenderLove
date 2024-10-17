const fs = require('fs');
const path = require('path');

const loadTemplate = (fileName) => {
  const filePath = path.join(__dirname, 'templates', fileName)
  return fs.readFileSync(filePath, 'utf8')
}

const firstTemplateHtml = loadTemplate('first-html.html')
const giftIdeas = loadTemplate('gifts-ideas.html')

module.exports = {
  firstTemplateHtml,
  giftIdeas
}