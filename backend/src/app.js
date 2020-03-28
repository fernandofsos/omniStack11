import express from 'express';
import routes from './routes';
import cors from 'cors';

class App{
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }
  
  middlewares(){
    this.server.use(cors());

    //Esse linha de comando é para aplicação trabalhar com JSON
    this.server.use(express.json());
  }

  routes(){
    //Essa linha de codigo server para importar as routes
    this.server.use(routes);
  }
}
export default new App().server