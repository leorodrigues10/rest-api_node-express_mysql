

module.exports = (app) => {

    app.get('/operation', (req, res) => {
       app.api.controllers.operation.getAllOperation(app, req, res);
    });

    app.get('/operation/:id', (req, res) => {
       app.api.controllers.operation.getOperationById(app, req, res);
    });

    app.post('/operation', (req, res) => {
        app.api.controllers.operation.createOperation(app, req, res);
     });
     app.delete('/operation/:id', (req, res) => {
        app.api.controllers.operation.deleteOperation(app, req, res);
     });



    
    


    







}