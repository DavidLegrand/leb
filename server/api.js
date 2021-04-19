
const express = require('express');
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')))

// app.use((req, res, next) => {
//   console.log(process.env.NODE_ENV, req.headers['x-forwarded-proto'])
//   if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https')
//     return res.redirect('https://' + req.headers.host + req.url);
//   else return next()
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(5000)
