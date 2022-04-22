const mongoose = require('mongoose')

const connectMe = ()=>{
    let userData = process.env.DB_URL

    // to connect database
    mongoose.connect(userData , (err,success)=>{
        if(err){
            console.log("Database isn't connected");
        }
        else{
            console.log("Database successfully connected");
        }
    })
}

module.exports = {
    connectMe
}