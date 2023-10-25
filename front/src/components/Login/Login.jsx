import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useLogin = () => {


const location = useLocation();
const isNotRoot = location.pathname !== '/';

const [access, setAccess] = useState(false);
const EMAIL = 'simonsalasseeber@gmail.com';
const PASSWORD = 'Simon1998';
const navigate = useNavigate();

const login = (userData) => {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
   else {
      alert('Credenciales inválidas')
   }
}

useEffect(() => {
   !access && navigate('/');
 }, [access]);

return login; 

}

export default useLogin;