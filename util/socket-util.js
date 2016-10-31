/**
 * Created by vipul on 6/08/2016 with help sanubhav Khokhar.
 */
 module.exports = function(io) {
 	io.on('connection', function (socket) {

 		//let the clients join room, 
 		//so that it would be easy to 
 		//broadcast event to everyone
 		socket.join('clients'); 

        var clientIp = socket.request.connection.remoteAddress;

        //just for fun
        console.log("New connection made from " + clientIp);
    });
 }
