const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores'); // importei do arquivo controladores/professores
// desesturei um objeto para obter somente as funcões e facilitar na escrita do código 
// se nao tivesse feito isso teria que chamar o nome da const que criei exemplo OrdenarProfessores.filtrarProfessores

const app = express();

// http://localhost:3000/professores
app.get('/professores', filtrarProfessores);


// http://localhost:3000/professores/3
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);