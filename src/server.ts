import express from 'express'; // Importa frmework express

const app = express() //Instancia do Express
const port = 3030 // Porta de acesso (alta, + de 1000)
app.get('/',(req, res)=> { // Retorno da reta
    res.send('Helo World!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`) // Retorno do status do servidor
})
