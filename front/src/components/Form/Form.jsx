import React from 'react'
import './Form.modules.css';
import validations from './validations';


const Form = ({login}) => {
     const [userData, setuserData] = React.useState({
        email: '',
        password: '',
     });

     const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setuserData({...userData, [property]: value})
        setErrors( // chequeo errores, corriendo la funcion validations para testear si se cumplen mis condiciones para cada propiedad y valor
            validations({
               ...userData,
               [property]: value,
            })
         );
     }

     const [errors, setErrors] = React.useState({
        email: '',
        password: '',
      });

      const handleSubmit =  (event) => {
        event.preventDefault();
        login(userData);
      }

  return (
    <div className='container'>
        <form>
            <div className={`contact-input-div ${errors.email ? 'warning' : ''}`}>
                <label htmlFor='Mail' className='words'>Mail </label>
                <input name='email' placeholder='Escriba su mail...' type='text' value={userData.email} onChange={handleChange} className='inputs'/>
                {errors.email && <p className="danger">{errors.email}</p>}
            </div>
            <div className={`contact-input-div ${errors.password ? 'warning' : ''}`}>
                <label htmlFor='Password' className='words'>Password </label>
                <input name='password' placeholder='Escriba su contraseña...' type='password' value={userData.password}  onChange={handleChange} className='inputs'/>
                {errors.password && <p className="danger">{errors.password}</p>}
            </div>
            <div className={`contact-input-div`}>
                <button type='submit' onClick={handleSubmit} className='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form