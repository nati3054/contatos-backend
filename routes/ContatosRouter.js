const express = require('express');
const router = express.Router();

/**
Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | UPDATE  | /contatos/:id
*/

router.get('/', (req, res)=>{res.send('get contatos')});
router.get('/:id', (req, res)=>{res.send(`get contato ${req.params.id}... tá!`)});
router.get('/:id', (req, res)=>{res.send('get contato ' + req.params.id)});
router.post('/', (req, res)=>{res.send('post contato')});
router.delete('/:id', (req,res)=>{res.send('delete contato')});
router.put('/:id', (req,res)=>{res.send('update contato')});

module.exports = router;
