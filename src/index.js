const express = require('express');

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

app.post('/account', (request, response) => {
  const { name, cpf } = request.body;
  const id = uuid();

  customers.push({
    id,
    name,
    cpf,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333);
