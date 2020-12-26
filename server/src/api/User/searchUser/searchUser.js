import {User} from '../../../../database/models';
import { AuthenticationError } from 'apollo-server-express';
import dotenv from 'dotenv';
import path from 'path';
import {Op} from 'sequelize';
dotenv.config({path: path.join(__dirname, '.env')});

export default {
    Query: {
        searchUser: async (_, {term}, {user}) => {
            if(!user) throw new AuthenticationError("UnAuthenticated");
            try {
                const users = User.findAll({
                    where: {username: term}
                });
                return users;
            } catch(err){
                console.log(err);
                throw err;
            }
        }
    }
}