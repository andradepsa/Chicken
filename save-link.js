// .netlify/functions/save-link.js
let links = [];

exports.handler = async function(event, context) {
  const { titulo, nome, url } = JSON.parse(event.body);
  const newLink = { id: links.length + 1, titulo, nome, url };
  links.push(newLink);

  return {
    statusCode: 200,
    body: JSON.stringify(newLink),
  };
};
