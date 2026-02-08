const express = require('express')
const app = express()
throw new Error("Test failure - intentional crash for rollback testing");
app.get('/', (req, res) => {
  res.send('<h1>Check</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
