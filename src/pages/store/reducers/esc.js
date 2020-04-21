const INITIAL_VALOR = {
    exists:''
    
}

export default function esc(state = INITIAL_VALOR, action){
    if(action.type === 'ESC_OBJECT'){
        return{ ...state, exists: action.exists};
    }
    return state;
}