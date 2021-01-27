module.exports.getAllOperation = (app, req, res) => {
    let dbConnection = app.config.dbConnection();

    dbConnection.query('select * from operation', (error, result) => {
        if(error){
            return res.status(500).json({error: error});
        }
        if(result){
            return res.status(200).json({message: 'Success', data: result});
        }
    });
}

module.exports.getOperationById = (app, req, res) => {
    let dbConnection = app.config.dbConnection();
    let id = req.params.id;

    dbConnection.query(`select * from operation where id_operation=${id}`, (error, result) => {
        if(error){
            return res.status(500).json({error: error});
        }
        if(result.length == 0){
            return res.status(404).json({ msg: 'Operation not found'});
        }else{
            return res.status(200).json({ data: result});
        }
    });
}
module.exports.createOperation = (app, req, res) => {
    let dbConnection = app.config.dbConnection();
    
    let date = new Date();
    let operation = {

        id_user: req.body.id_user,
        valor: req.body.valor,
        tipo: req.body.tipo,
        descricao: req.body.descricao,
        createAt: date,
      
    }   


   dbConnection.query('insert into operation set ?', operation, (error, result) => {
            if(error){
                return res.status(500).json({error: error});
            }
            return res.status(201).json({message: 'Operaçao criada com sucesso'});
    })
}

module.exports.deleteOperation = (app, req, res) => {
    let dbConnection = app.config.dbConnection();
    let id = req.params.id;

    dbConnection.query(`delete from operation where id_operation=${id}`, (error, result) => {
        if(error){
            return res.status(500).json({error: error});
        }
        if(result.length == 0){
            return res.status(404).json({ msg: 'Operation not found'});
        }else{
            return res.status(200).json({ message: 'Operation delete successfully'});
        }
    });
}