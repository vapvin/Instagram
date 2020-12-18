import {User} from '../../../../database/models';
import { UserInputError, AuthenticationError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(__dirname, '.env')});

export default {
    Query: {
        login: async (_, args) => {
            const {email, password} = args;
            const errors = {};
            
            try {

                if(email.trim() === '') errors.email = 'Email must not be empty';
                if(password === '') errors.password = 'Password must not be empty';

                if(Object.keys(errors).length > 0){
                    throw new UserInputError('User not found', {errors});
                }
                
                const user = await User.findOne({
                    where: { email }
                });

                if(!user){
                    errors.email = 'User not found';
                    throw new UserInputError('User not found', {errors});
                }

                

                const correctPassword = await bcrypt.compare(password, user.password);

                if(!correctPassword){
                    errors.password = 'Password is incorrect';
                    throw new AuthenticationError('Password is incorrect', { errors });
                }

                const token = await jwt.sign({ email }, `${process.env.JWT_KEY}`, { expiresIn: 60 * 60})

                user.token = token;

                return {
                    ...user.toJSON(),
                    createdAt: user.createdAt.toISOString(),
                    token,
                };
                
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}