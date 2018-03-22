const express = require('express');

class Server {
		
		constructor(){
				this.server = express();
		}
		create(configuration){
				this.server.set("env",configuration.env);
				this.server.set("port", configuration.port);
				this.server.set("hostname",configuration.hostname);
		}
		start(){
				const hostname = this.server.get("hostname");
				const port = this.server.get("port");
				this.server.listen(port,() =>{
					console.info(`API Server started, and listening on - http://${hostname}:${port}`);
				});
		}
}
const server = new Server();
module.exports = server;
