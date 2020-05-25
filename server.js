const express = require('express');
const app = express();
const cors = require('cors')
const port = 8080;
app.use(cors())

const multer = require('multer');
const mimeTypes = require('mime-types')
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, callback){
        callback("", file.originalname+'_'+ Date.now()+ "." +mimeTypes.extension(file.mimetype))
    }
})

const upload = multer({
    // dest: 'uploads/',
    storage: storage

})
// Principa
app.get("/", (req, res) =>{
    // res.send("Hola mundo");
    res.sendFile(__dirname+"/views/index.html")
} )

// Aca recibe los archivos
app.post("/files", upload.single('avatar') ,(req, res) =>{
    res.send("Guardado");
    
} )

app.listen(port , () => console.log("Server started in "+port))