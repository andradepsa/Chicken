// .netlify/functions/delete-link.js
exports.handler = async function(event, context) {
  const { id } = event.queryStringParameters;
  links = links.filter(link => link.id !== parseInt(id));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Link excluído com sucesso' })
  };
};
