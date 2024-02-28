import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function Login() {

    const dispatch = useDispatch(); // Récupération de la fonction dispatch du store

    // States
    const token = useSelector((state) => state.auth.token);
 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
 
    // Hooks
    const navigate = useNavigate();
 
 
    // Fonction de gestion des changements de valeur des champs de formulaire
    const handleUsernameChange = (event) => { 
       setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
       setPassword(event.target.value);
    };
 
    // Fonction de gestion de la soumission du formulaire
    const handleSignIn = (event) => {
       event.preventDefault();
       const userData = {
          email: username,
          password: password
       };
 
       fetch('http://localhost:3001/api/v1/user/login', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
       })
          .then(response => response.json())
          .then(data => {
             console.log(data);
 
             if (data.status !== 200) { // Gestion des erreurs
                setError(true);
                return;
             }
             else {
                dispatch({ // Enregistrement du token dans le store
                   type: 'LOGIN',
                   payload: {
                   token: data.body.token,
                   }
                });
                navigate("/user");
             }
          })
          .catch(error => {
             console.error(error);
          });
    };
 
    // Si l'utilisateur est déjà connecté, on le redirige vers la page user
    useEffect(() => {
       if (token) {
          navigate("/user");
       }
    }, [token, navigate]);
  

    return (
        <section className="login__container">
        <FontAwesomeIcon icon={faCircleUser} className='login_icon' />
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
               <div>
                  <label htmlFor="username">Email</label>
                  <input type="email" id="username" value={username} onChange={handleUsernameChange} required/>
               </div>

               <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
               </div>

               {error && <p>The username or password incorrect</p>}

               <div>
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>


               <button className="sign-in__button" type="submit">Sign In</button>
            </form>
        </section>
    )
}
  
  export default Login