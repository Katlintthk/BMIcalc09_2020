const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let pikkus = Number(request.body.pikkus);
    pikkus = pikkus/100;
    let kaal = Number(request.body.kaal);
    let result = kaal/Math.pow(pikkus, 2);
    result = result.toFixed(1);

    let responseText = `${kaal} / ${pikkus}*${pikkus} = ${result} <br>`;
    
    if(result>=30.0){
        responseText += "Sa oled rasvunud!";
    }else if(result>=25.0){
        responseText += "Sa oled ülekaalus.";
    }else if(result>=19.0){
        responseText += "Sa oled normaalkaalus.";
    }else {
        responseText+="Sa oled alakaalus!";
    }
    console.log(responseText);
    response.send(responseText);
});


app.listen(3000, function(){
    console.log('Server is running on port 3000');
});