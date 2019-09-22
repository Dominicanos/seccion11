//////////
// Verificar token

//////

const jwt = require('jsonwebtoken');



let verificarToken = (req, res, next) => {

    let token = req.get('token'); //authorization

    jwt.verify(token, process.env.SEED, (err, decorded) => {

            if (err) {

                return res.status(401).json({
                    ok: false,
                    err: {
                        message: 'Token no valido'
                    }
                })
            }

            req.usuario = decorded.usuario;
            next();
        })
        /*res.json({
            token: token
        })*/
        //console.log(token);


};

//////////
// Verificar admin Role

//////

let verificacionAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({

            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }

        });
    }



}
module.exports = {
    verificarToken,
    verificacionAdmin_Role
}