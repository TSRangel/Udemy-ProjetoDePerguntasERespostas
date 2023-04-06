import express from 'express'
import bodyParser from 'body-parser'
import { connection } from './DB/DB_quests.js'
import { Pergunta } from './DB/TB_Perguntas.js'
import { Resposta } from './DB/TB_Respostas.js'

const { log } = console
const app = express()


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const listaDePerguntas = await Pergunta.findAll({ raw: true, order: [['id', 'desc']] })
    res.render('index', { perguntas: listaDePerguntas })
})

app.get('/queries', (req, res) => res.render('queries'))

app.get('/queries/:id', async (req, res) => {
    const id = req.params.id
    const selectedQuery = await Pergunta.findOne({ where: { id: id } })

    if (selectedQuery) {
        const selectedAnsqwers = await Resposta.findAll({
            where: { perguntaId: selectedQuery.id },
            order: [['updatedAt', 'desc']]
        })
        res.render('query', {
            pergunta: selectedQuery,
            respostas: selectedAnsqwers
        })
        return
    }
    res.redirect('/')
})

app.post('/questsended', async (req, res) => {

    try {
        await Pergunta.create({
            titulo: req.body.titulo,
            descricao: req.body.descricao
        })
        res.redirect('/')
    } catch (error) {
        log(error)
    }
})

app.post('/answersended', async (req, res) => {
    try {
        await Resposta.create({
            corpo: req.body.corpo,
            perguntaId: req.body.pergunta
        })
        res.redirect(`/queries/${req.body.pergunta}`)
    } catch (error) {
        log(error)
    }
})

app.listen(3333, () => log('Server running.'))




