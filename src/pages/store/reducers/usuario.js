const INITIAL_VALOR = {
    user:{}
}

export default function user(state = INITIAL_VALOR, action){
    if(action.type === 'USER_DATA'){
        return{ ...state, user: action.user};
    }
    console.log(state);
    return state;
}