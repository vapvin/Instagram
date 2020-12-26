import {AuthenticationError, UserInputError} from 'apollo-server-express';
import {User, Post} from '../../../../database/models';
import {Op} from 'sequelize';

export default {
    Query: {
        getComments: async (_, {post, author}, {user}) => {
            try {
                if(!user) new AuthenticationError("UnAuthenticated");
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}