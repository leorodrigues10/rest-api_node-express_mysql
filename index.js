const app = require('./config/server');




app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: ' + process.env.PORT);
});