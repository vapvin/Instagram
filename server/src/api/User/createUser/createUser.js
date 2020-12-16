import {User} from '../../../../database/models';
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';

export default {
    Mutation: {
        register: async (_, args) => {
            let {username, firstname, lastname, email, password, confirmPassword} = args;
            const errors = {};
            
            try {
                // Validate input data
                if(email.trim() === '') errors.email = 'Email must not be empty';
                if(username.trim() === '') errors.email = 'Username must not be empty';
                if(firstname.trim() === '') errors.email = 'First Name must not be empty';
                if(lastname.trim() === '') errors.email = 'Last Name must not be empty';
                if(password.trim() === '') errors.email = 'Password must not be empty';
                if(confirmPassword.trim() === '') errors.email = 'Confirm Password must not be empty';

                if(password !== confirmPassword) errors.confirmPassword = 'Password does not match';

                // username, email check exists
                const userByUsername = await User.findOne({where: {username}});
                const userByEmail = await User.findOne({where: {email}});

                if(userByUsername) errors.username = 'Username is already exists';
                if(userByEmail) errors.email = 'Email is already exists';

                if(Object.keys(errors).length > 0){
                    throw errors
                }

                // Hash password
                password = await bcrypt.hash(password, 6);

                // Create user
                const user = await User.create({
                    username,
                    email,
                    firstname,
                    lastname,
                    password
                })
                console.log(user)
                // return success
                return true;
            } catch (err) {
                console.log(err);
                if(err.name === 'SequelizeUniqueConstraintError'){
                    err.errors.forEach(e => (errors[e.path] = `${e.message} is already taken`));
                } else if(err.name === 'SequelizeUniqueValidationError'){
                    err.errors.forEach(e => errors[e.path] = e.message);
                }
                throw new UserInputError('Invalid Input', { errors });
            }
        }
    }
}