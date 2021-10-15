import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/actions/messageActions';
import { AppState } from '../../store/store';

const ProtectedRoute = (ProtectedComponent) => {
    return (props) => {
        if (typeof window !== 'undefined') {
            const dispatch = useDispatch();
            const currentUser = useSelector(
                (state: AppState) => state.currentUser,
            );
            console.log(currentUser);
            const Router = useRouter();

            const userIsLoggedIn = currentUser.isAuthenticated;

            if (!userIsLoggedIn) {
                Router.replace('/kirjaudu');
                dispatch(
                    addMessage({
                        text: 'Kirjaudu sisään jatkaaksesi.',
                        variant: 'warning',
                        icon: 'alert',
                        visible: true,
                    }),
                );
                return null;
            } else {
                return <ProtectedComponent {...props} />;
            }
        }
        return null;
    };
};

export default ProtectedRoute;
