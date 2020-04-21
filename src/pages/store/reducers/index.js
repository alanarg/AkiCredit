import {combineReducers} from 'redux';

import esc from './esc';
import req from './requerentes';
import usuario from './usuario';

//Lembrando que essa combinação criará uma estrutura de objetos, por exemplo
//esc : { nome:'blablabla'}, requerente: { nome:'BLABABLA'}
export default combineReducers({
    esc,
    req,
    usuario
    
});