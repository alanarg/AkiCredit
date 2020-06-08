const INITIAL_VALOR = {
    user:{},
    user_logo:{}
}

export default function user(state = INITIAL_VALOR, action){
    if(action.type === 'USER_DATA'){
        return{ ...state, user: action.user};
    }
    if(action.type === 'USER_LOGO'){
        return{ ...state, user_logo: action.user};
    }
    return state;
}