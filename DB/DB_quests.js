import Sequelize from 'sequelize'

const connection = new Sequelize('db_quests', 'root', '12345', {
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