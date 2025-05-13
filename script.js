document.addEventListener('DOMContentLoaded', function() {
  // Carregar links do arquivo JSON
  fetch('links.json')
    .then(response => response.json())
    .then(data => {
      const linkContainer = document.getElementById('links-container');
      data.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.nome;
        linkContainer.appendChild(linkElement);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar links:', error);
    });
});
