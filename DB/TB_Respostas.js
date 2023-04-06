import { DataTypes, Model } from 'sequelize'
import {connection} from './DB_quests.js'

class Resposta extends Model {}

Resposta.init({
    corpo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: connection,
    tableName: 'answers'
})

Resposta.sync()

export {Resposta}