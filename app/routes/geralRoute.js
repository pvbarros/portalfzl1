module.exports = function(app) {
  var api = app.api.geralApi;

  app.post("/bibloteca",function(req,res) {

    var noticia = req.body;
    api.salva(noticia, function(exception, result){
    console.log('bibloteca criado: ' + result);
    res.json(result);
    });
  });

  app.put("/bibloteca:id",function(req,res) {

    api.atualiza(req,res);

  });

  app.get("/bibloteca",api.lista);


}
