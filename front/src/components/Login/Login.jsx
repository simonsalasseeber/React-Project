import { useDispatch, useSelector } from 'react-redux';
import { setAccess } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
   const EMAIL = 'simonsalasseeber@gmail.com';
   const PASSWORD = 'Simon1998';
   const navigate = useNavigate();
   const access = useSelector((state) => state.access);
   const dispatch = useDispatch();
 
   const login = (userData) => {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
       dispatch(setAccess(true));
       navigate('/home');
     } else {
       alert('Credenciales inválidas');
     }
   };
 
   return login;
 };
 
 export default useLogin;

