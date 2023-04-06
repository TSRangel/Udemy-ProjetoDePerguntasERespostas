import { DataTypes, Model } from 'sequelize'
import { connection } from './DB_quests.js'

// const Pergunta = connection.define('Perguntas',{
//     titulo:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     descricao:{
//         type: DataTypes.TEXT,
//         allowNull: false
//     }
// })

// try{
//     await Pergunta.sync({force: true})
// }catch (error){
//     console.log(error)
// }





class Pergunta extends Model { }

Pergunta.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: connection,
    tableName: 'quests',
})

await Pergunta.sync()

export {Pergunta}