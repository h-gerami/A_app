import {ISLOGIN_UPDATE}  from '../Actions/types';

const INITIAL_STATE = {
    isLogin: false ,
    
};

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case ISLOGIN_UPDATE:
         return {...state , islogin: action.payload}
        default:
            return state;
    }
}