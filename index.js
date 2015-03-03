var root = require('root');
var send = require('send');
var fs = require('fs');
var path = require('path');

var app = root();
var files = path.join(__dirname, 'public');

app.get('/', '/index.html');
app.get('/{file}', function(request, response) {
	send(request, request.params.file, {root:files}).pipe(response);
});
app.listen(process.env.PORT || 10200);