import {ISLOGIN_UPDATE } from './types';

export const login_update = (bool) => {
    return {
        type: ISLOGIN_UPDATE,
        payload: bool
    };
};

