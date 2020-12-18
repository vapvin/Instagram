import {AuthenticationError, UserInputError} from 'apollo-server-express';
import {User, Message} from '../../../../database/models';
import {Op} from 'sequelize';

export default {
    Query: {
        getMessages: async ( _, {from}, {user}) => {
            try {
                if(!user) throw new AuthenticationError('Unauthenticated');

                const others = await User.findOne({
                    where: {username: from}
                });

                if(!others) throw new UserInputError('User not found');

                const usernames = [user.username, others.username];
                
                const messages = await Message.findAll({
                    where: {
                        from: {[Op.in]:usernames},
                        to: {[Op.in]: usernames}
                    },
                    order: [['createdAt', 'DESC']]
                });

                return messages;
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}