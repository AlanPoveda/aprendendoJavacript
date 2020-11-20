const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');



//Iniciando App
const app = express();

app.use(express.json());
app.use(cors());


//Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    { 
        useNewUrlParser: true , 
        useUnifiedTopology: true
    }
);

//Models

// require('./src/models/Product'); Sem a biblioteca require-dir

requireDir('./src/models');
//Colocando produto no banco


//Rotas

app.use('/api', require('./src/routes'));



app.listen(3001);