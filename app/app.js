const express = require('express')
const router = require('../api/routes/router')
const app = express()

app.use(express.json())

app.use('/', router)

// Middleware
app.use((req, res, next) => {
    const error = new Error('NOT FOUND!')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }
    })
})

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Server is running.'
    })
})

module.exports = app 