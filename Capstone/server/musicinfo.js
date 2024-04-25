const mongoose = require('mongoose')


const musicinfoSchema = new mongoose.Schema({
    endTime: {
        type: String,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    trackName: {
        type: String,
        required: true
    },
    msPlayed: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('musicinfo', musicinfoSchema)