const mongoose = require('mongoose')

const SerieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enumValues: ['to-watch', 'watching', 'whatched']
    },
    comments: [ String ]
})

const Serie = mongoose.model('Serie', SerieSchema)

module.exports = Serie