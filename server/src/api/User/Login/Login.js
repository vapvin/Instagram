import {User} from '../../../../database/models';
import { UserInputError, AuthenticationError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';

export default {
    Query: {
        login: async (_, args) => {
            const {username, password} = args;
            const errors = {};
            
            try {
                const user = await User.findOne({
                    where: { username }
                });

                if(!user){
                    errors.username = 'User not found';
                    throw new UserInputError('User not found', {errors})
                }

                const correctPassword = await bcrypt.compare(password, user.password);

                if(!correctPassword){
                    errors.password = 'Password is incorrect';
                    throw new AuthenticationError('Password is incorrect', { errors });
                }

                return user;
                
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}