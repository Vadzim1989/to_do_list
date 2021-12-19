


export const userLogin = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log('action ready for dispatch again!');
            console.log('state:', getState());
        }, 2000)
    }
}