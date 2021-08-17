import { Strategy } from 'passport-local';
import { errorMessages } from '../data/errorMessages';
import passport from 'passport';
import User, { UserDoc } from '../models/users/users.model';

const { wrongUsernameOrPassword } = errorMessages;

passport.serializeUser(function (user: UserDoc, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    return done(null, id);
});

passport.use(
    new Strategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            try {
                // Tries to find the user matching the given username
                const user = await User.findOne({ email });
                if (!user) {
                    return done(wrongUsernameOrPassword, null);
                    // Check if the password is valid
                } else if (user && user.comparePasswords(password)) {
                    return done(null, user);
                } else {
                    // Throws an error if credentials are not valid
                    return done(wrongUsernameOrPassword, null);
                }
            } catch (error) {
                return done(error);
            }
        },
    ),
);

export default passport;
