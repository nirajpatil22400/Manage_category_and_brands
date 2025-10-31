const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors")
const categoryRoutes = require("./routes/category");
const BrandRoutes = require("./routes/brand");

app.use(cors());
app.use(express.json());

//status api : sample api for testing for serve working or not!
app.get("/", (req, res) => {
    res.send("Server running")
});

app.use("/category",categoryRoutes);
app.use("/brand",BrandRoutes);

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "e-comm-store-db"
    });
    console.log("mngodb connected")
}
connectDb().catch((err) => {
    console.error(err);
})

app.listen(port, () => {
    console.log("Server running on port", port);
});