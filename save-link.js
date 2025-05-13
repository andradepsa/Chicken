// .netlify/functions/save-link.js

let links = [];  // Usando memória temporária, ideal para testar

exports.handler = async function(event, context) {
  const { titulo, nome, url } = JSON.parse(event.body);
  
  if (!nome || !url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Nome e URL são obrigatórios!' })
    };
  }

  // Adicionando novo link à memória (você pode substituir isso por uma base de dados)
  const newLink = { id: links.length + 1, titulo, nome, url };
  links.push(newLink);

  return {
    statusCode: 200,
    body: JSON.stringify(newLink),
  };
};
