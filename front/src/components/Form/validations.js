import React from 'react'
import Form from './Form';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validations = (userData) => {
    const errors = {};
    if (!regexEmail.test(userData.email)) {errors.email = "Mail inválido"}
    if (userData.email.length > 35) {errors.email = "La longitud máxima es de 35 caracteres"}
    
    if (!/\d/.test(userData.password)) {errors.password = "La contraseña debe contener al menos un número"}
    if (userData.password.length < 6 || userData.password.length > 10) {errors.password = "La contraseña debe ser de entre 6 y 10 caracteres"}
    return errors;
}

export default validations