import { singIn, auth } from '../../firebase/firebaseAuth'
import { userActionTypes } from './userActionTypes'


export const userLogin = () => {
    return (dispatch, getState) => {
        singIn()
        .then((user) => {
            dispatch({
                type: userActionTypes.USER_LOGIN,
                payload: user
            })
        })
        .catch((err) => {
            dispatch({
                type: 'USER_LOGIN_ERROR',
                payload: err
            })
        })
    }
};

export const userLogout = () => {
    return (dispatch) => {
        auth.signOut()
        .then((data) => {
            dispatch({
                type: userActionTypes.USER_LOGOUT
            })
        });
    }
}