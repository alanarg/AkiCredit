const INITIAL_VALOR = {
    esc:{}
    
}

export default function esc(state = INITIAL_VALOR, action){
    if(action.type === 'ESC_OBJECT'){
        return{ ...state, esc: action.esc};
    }
    if(action.type === 'ESC_EXIST'){
        return{esc: action.esc};
    }
    return state;
}