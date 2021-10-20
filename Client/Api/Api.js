const express = require('express')
const app = express()
const fetch = require('node-fetch')
const cors = require('cors')

app.use(cors())
app.get('/api/search', (req, res) => {
	fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
		.then((response) => response.json())
		.then((data) => res.send(data))
})

app.listen(4000)
