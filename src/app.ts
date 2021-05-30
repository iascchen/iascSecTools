import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as requestIp from 'request-ip'

// Our Express APP config
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(requestIp.mw())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse application/json
app.use(bodyParser.json())

// API Endpoints
app.get('/', (req, res) => {
    res.json({'entry': ['/ip', '']})
})

app.get('/ip', (req, res, next) => {
    console.log('req : ', req.clientIp)
    const clientIp = req.clientIp
    res.json({clientIp, httpHeaders: req.headers, })
})

export default app
