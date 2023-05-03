import { Schema,model } from "mongoose";


const UserSchema = new Schema({
    funcao:String,
    login:String,
    password:String,
    token:String,
});


export default model('User',UserSchema);


