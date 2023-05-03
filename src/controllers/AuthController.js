import User from "../models/User";
import * as  Yup from 'yup';
import bcrypt from 'bcrypt';




class AuthController{
    async storeSignUp(req, res){

        const schema = Yup.object().shape({
            funcao:Yup.string().min(3).required(),
            login:Yup.string().min(3).required(),
            password:Yup.string().min(6).required()
        });
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:'Verifique os campos se estão preenchidos corretamente!'});
        }
        const {login} = req.body
        let chackuser  = await User.findOne({login});
            if(chackuser){
                    res.json({error:{
                        login:{msg:'Login já cadastrado'}
                    }});
                    return;
            }else{
                    const payload = (Date.now() + Math.random()).toString();
                    const token = await bcrypt.hash(payload,10);
                    let {funcao,login,password} = req.body;
                    const user =  await User.create({
                        funcao,
                        login,
                        password,
                        token,
                    });
                    
                    return res.json(user);
        }
       
        //const password = await bcrypt.hash(data.pass,10);
        
    }
}

export default new AuthController();