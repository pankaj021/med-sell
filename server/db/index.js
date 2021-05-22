const mongoose = require('mongoose');
const {DB_USER, DB_PASSWORD, DB_NAME} = process.env;
const url = `mongodb+srv://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@e-com-test.b56at.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
module.exports = {
    init: async () => {
        mongoose.connection.on("connected", function() {
            console.info("Connected to mongo server.");
        });
        mongoose.connection.on("error", function(error) {
            console.error("Could not connect to mongo server!", error);
        });
        mongoose.connection.on('disconnected', function(){
            console.warn("Mongoose default connection is disconnected");
        });
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.info("Node process is exiting. Closing mongodb connection too...");
                process.exit(0);
            });
        });
        try {
            await mongoose.connect( url, { 
                useNewUrlParser: true, 
                useCreateIndex: true, 
                useUnifiedTopology: true,
                useFindAndModify: false
            })
        } catch (error) {
            console.error("Could not connect to mongo server!", error);
        }
    }
}

