import {User} from '../../../../database/models';

export default {
    Mutation: {
        register: async (_, args) => {
            const {username, firstname, lastname, email, password, confirmPassword} = args;
        }
    }
}