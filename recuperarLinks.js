const links = require('./links.json');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(links)
  };
};
