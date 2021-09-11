const mongoose = require('mongoose')

// conects to db

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})
