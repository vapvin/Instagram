import {User} from '../../../../database/models';
import { AuthenticationError } from 'apollo-server-express';

export default {
    Query: {
        me: async (_, __, {user}) =>{
            if(!user) throw new AuthenticationError("UnAuthenticated");
            console.log(user)
            try {
                const curuser = await User.findOne({where: {email: user.email}});
                return curuser;
            } catch(err){
                console.log(err);
                throw err;
            }
        }
    }
}