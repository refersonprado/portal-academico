const bcrypt = require('bcrypt')
const localstrategy = require('passport-local').Strategy;


//bcrypt.js -> Criptogragia de mão única (hash)
// https://bcrypt-generator.com -> gerador automático 

const users = [{
    _id: 1,
    username:'adm',
    password:'$2a$12$Fq4O49H0MSmvsxTIL/wWaujkz4YweR7DDpB5z/DjxKVaa/3nY0bIK', //prado2005
    email: 'adm@gmail.com'
}]

function findUser(username) {
    return username.find(item => item.username === username)
}

function findUserById(id){
    return username.find(item => item._id === id) 
}

module.exports = (passport)=>{
    passport.serializeUser((user, done)=>{
        done(null, user._id)
    })
}

passport.deserializeUser((id, done)=>{
    try {
        const user = findUserById(id)
        done(null, user) 
    }catch (error) {
        console.log(error)
        return done(error, null)
    }
})