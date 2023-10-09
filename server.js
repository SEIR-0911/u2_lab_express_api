const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();



app.use(cors());
// the following middleware comes out of the box with express...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});