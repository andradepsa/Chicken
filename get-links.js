// .netlify/functions/get-links.js
const links = [
  { id: 1, titulo: "Matemática", nome: "Cálculo Diferencial", url: "https://www.exemplo.com/calculo" },
  { id: 2, titulo: "Física", nome: "Mecânica Quântica", url: "https://www.exemplo.com/quantica" },
];

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(links)
  };
};
