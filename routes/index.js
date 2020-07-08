const express = require('express')
const router = express.Router() 

const {create, read, update, deleted} = require('../controllers/controller')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    res.writeHead(200, 'Content-type','text/html')
    res.end('<h1>Welcome To My CRUD App</h1>')
})

router.post('/create', create)
router.get('/read/:id', read)
router.put('/update/:id', update)
router.delete('/delete/:id', deleted)

module.exports = router; 