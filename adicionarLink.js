const links = require('./links.json');

exports.handler = async (event) => {
  const { link } = JSON.parse(event.body);
  links.push({ link, timestamp: new Date().toISOString() });
  require('fs').writeFileSync('./links.json', JSON.stringify(links, null, 2));
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Link adicionado com sucesso!' })
  };
};
