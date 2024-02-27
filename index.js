const app= require('express')();

const  PORT = 8080;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("la conexión se ha realizado con éxito")
});

app.post('/postRequest', (req,res)=>{
    res.send("Ethan Andrés Vázquez, 16246, 5A")
});