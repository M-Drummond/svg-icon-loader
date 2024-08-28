import Icons from './src/index.js' // Importing the Icons object
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {

  const output = `
    <html>
      <head>
        <title>SVG Icons</title>
      </head>
      <body>
        <h1>SVG Icons</h1>
        <ul>
          <li>${Icons.warn}</li>
          <li>${Icons.capsule}</li>
        </ul>
      </body>
    </html>
  `

  res.send(output)  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

