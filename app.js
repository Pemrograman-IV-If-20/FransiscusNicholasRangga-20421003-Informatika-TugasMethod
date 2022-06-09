const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.post('/', function (req, res) {
    res.send('Welcome to API')
})

app.post('/datamahasiswa/:fakultas/:jeniskelamin/:email', function (req, res) {
    res.json({
        nama: req.query.nama,
        npm: req.query.npm,
        jeniskelamin:req.params.jeniskelamin,
        jurusan:req.query.jurusan,
        fakultas:req.params.fakultas,
        tahunmasuk: req.body.tahunmasuk,
        semester: req.body.semester,
        madani:req.query.madani,
        email: req.params.email,
        umur: req.body.umur,
        alamat: req.body.alamat
    })
})

app.listen(3000)