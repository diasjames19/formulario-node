import User from "../models/User";



class UserController{
    async store(req, res){
        const {funcao,login,password} = req.params;
        let newUser = await User.findOne({login});
        if(!newUser){

            newUser = await  User.create({funcao,login,password});
        }else{
            res.json({msg:'Usuario já existe!'})
        }
         
        return res.json(newUser);
    }
}

export default new UserController();