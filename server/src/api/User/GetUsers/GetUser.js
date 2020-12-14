import {User} from '../../../../database/models';

export default {
    Query: {
        getUsers: async () => {
            try {
                const users = await User.findAll();
                return users;
            } catch (err) {
                console.log(err)
            }
        }
    }
}