import {User} from '../../../../database/models';
import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import {Op} from 'sequelize';
dotenv.config({path: path.join(__dirname, '.env')});

export default {
    Query: {
        getUsers: async (_, __, context) => {
            let user;
            if(context.req && context.req.headers.authorization){
                const token = context.req.headers.authorization.split('Bearer ')[1];
                jwt.verify(token, `${process.env.JWT_KEY}`, (err, decodedToken) => {
                    if(err){
                        throw new AuthenticationError('Unauthenticated');
                    }

                    user = decodedToken;
                    console.log(user)
                })
            }
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