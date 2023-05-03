import {Router}  from "express";
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';


const routes = new Router();


routes.post('/user/signup', UserController.storeSignUp);



export default routes;


