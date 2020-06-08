const INITIAL_VALOR = {
    esc:{},
    esc_logo:{}
    
}

export default function esc(state = INITIAL_VALOR, action){
    if(action.type === 'ESC_OBJECT'){
        return{ ...state, esc: action.esc};
    }
    if(action.type === 'ESC_EXIST'){
        return{esc: action.esc};
    }
    if(action.type === 'ESC_LOGO'){
        return{esc_logo: action.esc};
    }
    
    

    if(action.type === 'ESC_LOC'){
        return{esc:action.esc};
    }
    return state;
}