var mongoclient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.use(cors());

app.get('/categories', function(req, res){
    mongoclient.connect(url, function(err, clientObject){
         if(!err){
             var dbo = clientObject.db("ishopdb");
             dbo.collection("tblcategories").find().toArray(function(err, documents){
                if(!err) {
                    res.send(documents);
                }
             })
         }
    })
});

app.get('/products', function(req, res){
    mongoclient.connect(url, function(err, clientObject){
         if(!err){
             var dbo = clientObject.db("ishopdb");
             dbo.collection("tblproducts").find().toArray(function(err, documents){
                if(!err) {
                    res.send(documents);
                }
             })
         }
    })
});

app.get('/products/categories/:category', function(req, res){
    mongoclient.connect(url, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblproducts").find({'category':req.params.category}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})


app.listen(8080);
console.log('server listening');