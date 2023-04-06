import Sequelize from 'sequelize'

const connection = new Sequelize('db_quests', 'root', '!@#1q2w3e4r', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    await connection.authenticate()
    console.log('connection maded')
} catch(err){
    console.log(err)
}

export {connection}