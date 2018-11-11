module.exports = function(app) {
    var api = app.api.usuarioApi;
  
    app.post("/usuario",function(req,res) {

      api.salva(req.body, function(exception, result){
      console.log('usuario criado: ' + result);
      res.json(result);
      });
    });
  
    app.put("/usuario:id",function(req,res) {
  
      api.atualiza(req,res);
  
    });
  
    app.get("/usuario",api.lista);
  
  
  }
  