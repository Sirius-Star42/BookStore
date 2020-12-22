const express = require("express");
const router = require("./routes/router")

const app = express();
const port = 5000;


//only API endpoint
app.use("/api", router)




app.listen( port, () => {
    console.log("listening on", port)
})


