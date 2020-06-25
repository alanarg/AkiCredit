const INITIAL_STATE = {
    new_req:{},
   req_prox: {},
   req_aceito:{}


  
}

export default function req(state = INITIAL_STATE, action){
    if(action.type === 'ADD_REQ'){
        return{ ...state, req_prox:[action.requerente]};
    }
    if(action.type ==='NOTIFY'){
        return{ ...state, new_req: action.notify};

    }
    if(action.type === 'REQ_ACEITO'){
        return{ ...state, req_aceito: action.req_aceito};
    }
    return state;
}