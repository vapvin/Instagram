import {User} from '../../../../database/models';
import { AuthenticationError } from 'apollo-server-express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(__dirname, '.env')});

export default {
    Mutation: {
        editProflie: async (_, {username, email, bio, avatar}, {user}) => {
            if(!user) new AuthenticationError("UnAuthenticated");
            try {
                const user = await User.update({
                    username,
                    email,
                    bio,
                    avatar
                }, 
                {
                    where: {
                        id: user.id
                    }
                });
                return user;
            } catch (err){
                console.log(err);
                throw err;
            }
        }
    }
}