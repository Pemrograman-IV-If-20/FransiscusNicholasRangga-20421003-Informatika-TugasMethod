const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
  res.send('Selamat datang di API')
})


app.post('/data-mahasiswa', function (req, res) {
    res.json({
        npm: req.body.npm,
        nama: req.body.nama,
        alamat: req.body.alamat
    })
})


app.get('/data-mahasiswa/:npm/:nama', function (req, res) {
  res.json({
      npm: req.params.npm,
      nama: req.params.nama,
      alamat: req.params.alamat
  })
})

// ==> https://localhost:3000/data-mahasiwa-query?npm=20421003&nama=Fransiscus
app.get('/data-mahasiswa-query', function (req, res) {
    res.json({
        npm: req.query.npm,
        nama: req.query.nama,
        alamat: req.query.alamat
    })
})

app.listen(3000)