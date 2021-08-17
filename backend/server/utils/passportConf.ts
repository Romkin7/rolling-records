import { Strategy } from 'passport-local';
import { errorMessages } from '../data/errorMessages';
import passport from 'passport';
import User, { UserDoc } from '../models/users/users.model';

const { wrongUsernameOrPassword } = errorMessages;

passport.serializeUser(function (user: UserDoc, done) {
    console.log('Serialize user called.');
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    console.log('Deserialize user called.');
    return done(null, id);
});

passport.use(
    new Strategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            try {
                console.log(email, password);
                // Tries to find the user matching the given username
                const user = await User.findOne({ email });
                if (!user) {
                    console.log('error text1', wrongUsernameOrPassword);
                    return done(wrongUsernameOrPassword, null);
                    // Check if the password is valid
                } else if (user && user.comparePasswords(password)) {
                    console.log('user', user.username);
                    return done(null, user);
                } else {
                    // Throws an error if credentials are not valid
                    console.log('error text2', wrongUsernameOrPassword);
                    return done(wrongUsernameOrPassword, null);
                }
            } catch (error) {
                return done(error);
            }
        },
    ),
);

export default passport;
