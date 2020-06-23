const INITIAL_VALOR = {
    user:{},
    user_loc:{}
}

export default function user(state = INITIAL_VALOR, action){
    if(action.type === 'USER_DATA'){
        return{ ...state, user: action.user};
    }
    if(action.type === 'USER_LOC'){
        return{ ...state, user_loc: action.user};
    }
    return state;
}