// .netlify/functions/save-link.js

let links = []; // Usando memória temporária, substitua por banco de dados real

exports.handler = async function(event, context) {
  try {
    // Recebe os dados do formulário
    const { titulo, nome, url } = JSON.parse(event.body);
    
    // Verifica se os dados necessários foram fornecidos
    if (!nome || !url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Nome e URL são obrigatórios!' })
      };
    }

    // Cria o novo link
    const newLink = { id: links.length + 1, titulo, nome, url };
    links.push(newLink);  // Armazena o link na memória (substitua por banco de dados real)

    console.log("Link Adicionado com Sucesso:", newLink); // Log para depuração

    return {
      statusCode: 200,
      body: JSON.stringify(newLink),
    };
  } catch (error) {
    console.error("Erro ao processar o link:", error); // Log para depuração
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno ao salvar o link', error: error.message })
    };
  }
};
