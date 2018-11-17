var multer = require('multer');
var upload = multer({dest:'imagens/destaque'});
var fs = require('fs');
const caminhoImg = 'public/imagens/destaque/';

module.exports = function(app) {
  var api = app.api.destaqueApi;

    app.get("/destaques",api.lista);

    app.post("/destaque", upload.any(), function(req,res){

      req.body.data = new Date();

      if(req.files){
        req.files.forEach(function (file){
          var nomeImg = (new Date).valueOf()+"-"+file.originalname
          fs.rename(file.path, caminhoImg + nomeImg, function(err){
            if(err)throw err;
            console.log("file uploaded")
          });
          req.body.url = "imagens/destaque/" + nomeImg;        
        });
      }

      api.salva(req.body, function(exception, result){
        console.log('Destaque criado: ' + result);
        res.json(result);
      });      
    });

    app.put("/destaque:id", upload.any(), function(req,res) {
      
      if(req.files){
        req.files.forEach(function (file){
          var nomeImg = (new Date).valueOf()+"-"+file.originalname
          fs.rename(file.path, caminhoImg + nomeImg, function(err){
            if(err)throw err;
            console.log("file uploaded")
          });
          req.body.url = "imagens/destaque/" + nomeImg;        
        });
      }

      api.atualiza(req.body, res, function(exception, result) {
        console.log('Destaque atualizado:' +result);
        res.json(result);
      });

    });
    
    app.get("/destaques:id",function(req,res) {
      
      api.buscaPorID(req.params.id,res);

    });

    app.delete("/destaque:id",function(req,res) {

      api.removePorId(req.params.id,res);

    });
}
