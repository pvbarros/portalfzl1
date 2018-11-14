var multer = require('multer');
var upload = multer({dest:'imagens/noticia'});
var fs = require('fs');
const caminhoImg = 'public/imagens/noticia/';

module.exports = function(app) {
  var api = app.api.noticiaApi;

    app.get("/noticias",api.lista);

    app.post("/noticia", upload.any(), function(req,res) {  

      req.body.data = new Date();

      if(req.files){
        req.files.forEach(function (file){
          var nomeImg = (new Date).valueOf()+"-"+file.originalname
          fs.rename(file.path, caminhoImg + nomeImg, function(err){
            if(err)throw err;
            console.log("file uploaded")
          });
          req.body.url = "imagens/noticia/" + nomeImg;        
        });
      }      
      
      api.salva(req.body, function(exception, result){
        console.log('Notícia criada: ' + result);
        res.json(result);
      });
    });

    app.put("/noticia:id", upload.any(), function(req,res) {

      req.body.data = new Date();

      if(req.files){
        req.files.forEach(function (file){
          var nomeImg = (new Date).valueOf()+"-"+file.originalname
          fs.rename(file.path, caminhoImg + nomeImg, function(err){
            if(err)throw err;
            console.log("file uploaded")
          });
          req.body.url = "imagens/noticia/" + nomeImg;        
        });
      }

      api.atualiza(req.body, res, function(exception, result) {
        console.log('Notícia criada: ' + result);
        res.json(result);
      });
    });

    app.get("/noticias:id",function(req,res) {

      api.buscaPorID(req.params.id,res);

    });

    app.delete("/noticia:id",function(req,res) {

      api.removePorId(req.params.id,res);

    });
};
