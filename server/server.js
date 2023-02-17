const express = require('express');
const app = express();

const PORT = process.env.port || 5000

// routes
app.get('/', (req, res) => {
    res.send('Hello from the server!')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})