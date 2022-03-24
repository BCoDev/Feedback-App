module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({error: 'Must be logged in'})
    }
    next() 
    //Next middleware(between get and start of server) or next step
}