// .netlify/functions/save-link.js

let links = []; // Usando memória temporária, substitua por banco de dados real

exports.handler = async function(event, context) {
  // Recebe os dados do formulário
  const { titulo, nome, url } = JSON.parse(event.body);
  
  if (!nome || !url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Nome e URL são obrigatórios!' })
    };
  }

  // Cria o novo link
  const newLink = { id: links.length + 1, titulo, nome, url };
  links.push(newLink);  // Armazena o link na memória (substitua por banco de dados real)

  return {
    statusCode: 200,
    body: JSON.stringify(newLink),
  };
};
