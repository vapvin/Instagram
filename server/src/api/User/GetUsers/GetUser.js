import {User} from '../../../../database/models';
import { AuthenticationError } from 'apollo-server-express';
import dotenv from 'dotenv';
import path from 'path';
import {Op} from 'sequelize';
dotenv.config({path: path.join(__dirname, '.env')});

export default {
    Query: {
        getUsers: async (_, __, { user }) => {
         
            if(!user) throw new AuthenticationError("UnAuthenticated");
            try {
                const users = await User.findAll({
                    where: {username: { [Op.ne]: user.username }}
                });
                return users;
            } catch (err) {
                console.log(err)
                throw err;
            }
        }
    }
}