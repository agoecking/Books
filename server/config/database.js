const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://WEBII:WEBII@trabalhowebii.mzhc1.gcp.mongodb.net/WEBII?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("connected");
})

mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
})

mongoose.connection.on("error", (error) => {
    console.log(`error: ${error}`);
})
module.exports = db;