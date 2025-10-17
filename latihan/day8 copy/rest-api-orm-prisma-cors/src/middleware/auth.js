const jwt = require('jsonwebtoken')
const authJWT = (req, res, next)=>{
    const authHeader = req.header('authorization');

    if(!authHeader){
        var err="you're not authorized"
        res.SetHeader('WWW-Authentice', 'basic')
        err.status = 401
        return next(err)
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET,(err, user)=>{
        if(err){
            res.status(400).json({info:"unauthorized"})
        }else{
            req.user=user;
            next();
        }
    })
}

module.exports= {authJWT}