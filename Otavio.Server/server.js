import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1008; 

server.use(middlewares);
server.use(router);

server.listen(port);					
