const jwt = require('jsonwebtoken');

const validaToken = (req,res,next) => {
    
    // Verificando se o campo authorization existe como header
    if(req.headers.authorization == undefined){
        res.status(400).json({msg:"Requisição sem campo authorization"});
    }

    // Capturar o token ...
    let token = req.headers.authorization.replace('bearer ','');

    // Validar o token
    let usuario;
    try {
        // Tentando validar o token
        usuario = jwt.verify(token, "SEGREDO");
    } catch (error) {
        // Falhou ao validar o token. Mandando msg de erro;
        res.status(403).json({msg:error.msg});
    }

    //  Adicionar informações do token na req
    req.usuario = usuario;
    
    //  Passar para prox middleware ou controller... (next())
    next();

}

module.exports = validaToken;