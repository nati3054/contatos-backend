/**
 * Lista de Método do Controller
 * 
 * 1 - index: Listar muitos (get '/contatos')
 * 2 - show: Levantar um contato (get '/contatos/:id');
 * 3 - create: Salvar um novo contato (post '/contatos')
 * 4 - destroy: Remove um contato (delete '/contatos/:id')
 * 5 - update: Altera um contato (put '/contatos/:id')
 */

module.exports = {
    index: (req,res) => {res.send('função index')},
    show: (req,res) => {res.send('função show')},
    search: (req,res) => {res.send('função search')},
    create: (req,res) => {res.send('função create')},
    destroy: (req,res) => {res.send('função destroy')},
    update: (req,res) => {res.send('função update')}
}
