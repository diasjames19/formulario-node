import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routes from './router/router';




dotenv.config();

class App{
    constructor(){

        this.server = express();
        mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        this.middlewares();
        this.routes();

    }
    middlewares(){ 
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
    cors(){
        this.server.use(cors());
    }

}
export default new App().server;