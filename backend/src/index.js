const express = require('express');                     //importa express(servidor/rotas)
const cors = require('cors');
const routes = require('./routes');

const app = express();                                  //instancia express

app.use(cors());
app.use(express.json());                                //define que requisicoes serao feitas atraves de json

app.use(routes);                                        //instancia minhas rotas

app.listen(3333);                                       //servidor ouve na porta especificada