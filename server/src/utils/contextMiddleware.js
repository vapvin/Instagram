import { AuthenticationError } from 'apollo-server-express';
import dotenv from 'dotenv';
import path from 'path';
import jwt from 'jsonwebtoken';

dotenv.config({path: path.join(__dirname, '.env')});

export default (context) => {
    if(context.req && context.req.headers.authorization){
        const token = context.req.headers.authorization.split('Bearer ')[1];
        jwt.verify(token, `${process.env.JWT_KEY}`, (err, decodedToken) => {
            if(err){
                throw new AuthenticationError('Unauthenticated');
            }
            context.user = decodedToken;
        })
    }

    return context;
}