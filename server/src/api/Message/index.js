import getMessages from './getMessages/getMessages';
import sendMessage from './sendMessage/sendMessage';

export default {
    Message: {
        createdAt: parent => parent.createdAt.toISOString()
    },
    Query: {
        ...getMessages
    },
    Mutation: {
        ...sendMessage
    }
}