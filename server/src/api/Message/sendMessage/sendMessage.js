import {AuthenticationError, UserInputError} from 'apollo-server-express';
import {User, Message} from '../../../../database/models';

export default {
    Mutation: {
        sendMessage: async (parent, {to, content}, { user }) => {
            try {
                if(!user) throw new AuthenticationError('Unauthenticated');

                const recipient = await User.findOne({ where: { username: to }});

                if(!recipient) throw new UserInputError('User Not Found');

                if(content.trim() === '') {
                    throw new UserInputError('Message is empty');
                }

                const message = await Message.create({
                    from: user.username,
                    to,
                    content
                });

                return message;

            } catch(err){
                console.log(err);
                throw err;
            }
        }
    }
}