import {User} from '../../../../database/models';
import { AuthenticationError } from 'apollo-server-express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(__dirname, '.env')});

export default {
    Query: {
        seeUser: async (_, {id}) => {
            const user = await User.findOne({where: {id}});
            const posts = await User.findOne({where: {id}}).posts;
            return { user, posts }
        }
    }
}