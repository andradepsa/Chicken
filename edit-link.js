// .netlify/functions/edit-link.js
exports.handler = async function(event, context) {
  const { id, nome, url } = JSON.parse(event.body);
  let link = links.find(link => link.id === parseInt(id));
  
  if (link) {
    link.nome = nome;
    link.url = url;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(link)
  };
};
