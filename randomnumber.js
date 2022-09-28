const http = require('http')
const server = http.createServer(function(req, res){
    for(var i = 0; i < 20; i++){
    res.write((between(1,1000000).toString()));
    }
    res.end();
})
server.listen(8880)


function between(min, max){
    return Math.floor(
        ((Math.random() * max) + min)
    )
}
