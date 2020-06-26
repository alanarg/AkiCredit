import React,{useState} from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CircularProgress from '@material-ui/core/CircularProgress';
import './css.css';
import api from '../../services/api';
import md5 from 'md5';
import Error from './error';
import Switch from '@material-ui/core/Switch';
import history from '../../history';
import validCnpj from './validCnpj'; 

import { validate as validateCPF} from 'gerador-validador-cpf';

    
const Cadastro = () => {
    const [cpfv,setCpf] = useState('');
    const [cnpjv,setCnpj] = useState('');
    const [loading, setLoading] = useState(false);
	const [checked, setChecked] = React.useState(0);

    const toggleChecked = () => {
        checked===1?setChecked(0):setChecked(1);
    };
        return (
            
            <Formik
                initialValues={{
                    nome: '',
                    sobrenome: '',
                    email: '',
                    password:'' ,
                    ckey:'',                    
                    cpf:'',
                    cnpj:'',
                    logo:''
                    
                    
                    
                }}
                validationSchema={Yup.object().shape({
                    nome: Yup.string()
                        .required('Obrigatório'),
                    sobrenome: Yup.string()
                        .required('Obrigatório'),
                    email: Yup.string()
                        .email('Email inválido')
                        .required('Obrigatório'),
                    password: Yup.string()
                        .min(6, 'Senha deve conter no mínimo 6 carcteres')
                        .required('Obrigatório'),
                    ckey: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
                        .required('Obrigatório'),
                    // cep: Yup.string().required(),
                    cpf: Yup.string().required(),
                    cnpj: Yup.string().required()
                    // esc: Yup.string().required()

                })}
                onSubmit ={ async fields => {
                   
                   const data = {
                    ckey: md5(fields.ckey),
                    cnpj: fields.cnpj,
                    cpf: fields.cpf,
                    email: fields.email,
                    logo: fields.logo,
                    nome: fields.nome,
                    password: md5(fields.password),
                    sobrenome: fields.sobrenome,
                    escStatus:checked
                   };
                //    var senha = md5(data.password);
                //    var ckey = md5(data.ckey);

                 try{
                    setLoading(true);
                   const resposta = await api.post('/signUp',data,{headers: {'Content-Type': 'application/json'}});
                        if(resposta.data.success === 'Usuário cadastrado!'){
                            setLoading(false);
                            history.push('/');

                        }
                        setLoading(false);
                    
                 }catch(error){
                    setLoading(false);
                     alert('erro no cadastro');
                 }

                }}
                render={
                    ({ values,errors, status, touched,props }) => (
                    <Form>
                        <Switch checked={checked} onChange={toggleChecked} style={{color:'#00acba'}}/>Sou um Empresa Simples de Crédito
                         {checked?<p style={{color:'#00acba'}}>Suas informações serão verificadas</p>:null} 
                        <div className="input-row">
                            <label className="labelc" htmlFor="nome">Nome</label>
                            <Field name="nome" type="text" className="nome"/>
                            <Error className="err" touched={touched.nome} message={errors.nome}/>
                        </div>
                        <div className="input-row">
                            <label className="labelc" htmlFor="lastName">Sobrenome</label>
                            <Field name="sobrenome" type="text" className="nome"/>
                            <Error className="err" touched={touched.sobrenome} message={errors.sobrenome}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="email">Email</label>
                            <Field name="email" type="email" className="nome"/>
                            <Error className="err" touched={touched.email} message={errors.email}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="password">Password</label>
                            <Field name="password" type="password" className="nome"/>
                            <Error className="err" touched={touched.password} message={errors.password}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="ckey">Confirmar Senha</label>
                            <Field name="ckey" type="password"  className="nome"/>
                            <Error className="err" touched={touched.ckey} message={errors.ckey}/>
                        </div>
                        {/* <div className="input-row">
                            <label  className="labelc" htmlFor="cep">CEP</label>
                            <Field name="cep" type="number" id="nome"/>
                            <Error className="err" touched={touched.cep} message={errors.cep}/>
                        </div> */}
                        <div className="input-row"> 
                            <label  className="labelc" htmlFor="cpf">CPF</label>
                            <Field name="cpf" type="number"  value={values.cpf} onBlur={values => setCpf(validateCPF(values.target.value))} className="nome"/>
                            <Error className="err" touched={touched.cpf}  err={cpfv} message={errors.cpf}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="cnpj">CNPJ</label>
                            <Field name="cnpj" type="number" onBlur={values=> values.target.value!== null?setCnpj(validCnpj(values.target.value)):null } className="nome"/>
                            <Error className="err" touched={touched.cnpj} err={cnpjv} message={errors.cnpj}/>
                        </div>
                        {/* <div className="input-row">
                            <label  className="labelc" htmlFor="esc">E.S.C</label>
                            <Field name="esc" type="text" id="nome"/>
                            <Error className="err" touched={touched.esc} message={errors.esc}/>
                        </div> */}
                        <div className="input-row">
                            <div>
                                
                            <button type="submit"  className="button">Register</button>
                            {loading && <CircularProgress/>}
                            </div>
                            <div>
                            <button type="reset" className="reset">Reset</button>

                            </div>
                        </div>
                    </Form>
                )}
            />
            
        )
    
}
export default Cadastro;
