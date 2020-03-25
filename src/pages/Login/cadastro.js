import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css.css';
import Error from './error';
import history from '../../history';


export default class Cadastro extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    nome: '',
                    sobrenome: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    cep:'',
                    cpf:'',
                    cnpj:'',
                    esc:''
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
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
                        .required('Obrigatório'),
                    cep: Yup.string().required(),
                    cpf: Yup.string().required(),
                    cnpj: Yup.string().required(),
                    esc: Yup.string().required()

                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))

                    history.push("/")
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="input-row">
                            <label className="labelc" htmlFor="nome">Nome</label>
                            <Field name="nome" type="text" id="nome"/>
                            <Error className="err" touched={touched.nome} message={errors.nome}/>
                        </div>
                        <div className="input-row">
                            <label className="labelc" htmlFor="lastName">Sobrenome</label>
                            <Field name="sobrenome" type="text" id="nome"/>
                            <Error className="err" touched={touched.sobrenome} message={errors.sobrenome}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="email">Email</label>
                            <Field name="email" type="text" id="nome"/>
                            <Error className="err" touched={touched.email} message={errors.email}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="password">Password</label>
                            <Field name="password" type="password" id="nome"/>
                            <Error className="err" touched={touched.password} message={errors.password}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" id="nome"/>
                            <Error className="err" touched={touched.confirmPassword} message={errors.confirmPassword}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="cep">CEP</label>
                            <Field name="cep" type="number" id="nome"/>
                            <Error className="err" touched={touched.cep} message={errors.cep}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="cpf">CPF</label>
                            <Field name="cpf" type="number" id="nome"/>
                            <Error className="err" touched={touched.cpf} message={errors.cpf}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="cnpj">CNPJ</label>
                            <Field name="cnpj" type="number" id="nome"/>
                            <Error className="err" touched={touched.cnpj} message={errors.cnpj}/>
                        </div>
                        <div className="input-row">
                            <label  className="labelc" htmlFor="esc">E.S.C</label>
                            <Field name="esc" type="text" id="nome"/>
                            <Error className="err" touched={touched.esc} message={errors.esc}/>
                        </div>
                        <div className="input-row">
                            <button type="submit" id="button" className="button">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}
