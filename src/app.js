import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routes from './router/router';
import cors from 'cors';





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

        this.server.use(cors());
    }
    routes(){
        this.server.use(routes);
    }
   
}
export default new App().server;