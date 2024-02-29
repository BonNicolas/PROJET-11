import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';


function Nav() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.name.username);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            dispatch({
              type: 'SET_USER',
              payload: {
                username: data.body.userName,
                firstname: data.body.firstName,
                lastname: data.body.lastName,
              },
            });
          } else {
            console.error("Erreur lors de la récupération du profil de l'utilisateur");
          }
        } catch (error) {
          console.error("Erreur lors de la récupération du profil de l'utilisateur", error);
        }
      }
    };

    fetchData();
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    sessionStorage.clear();
  };
    
  return (
    <nav className='main-nav'>
      <NavLink className='main-nav__item' to="/sign-in">
        <FontAwesomeIcon icon={faCircleUser} className='main-nav__icon'/>
        {username ? (
          <span className='main-nav__deco'>{username}</span>
        ) : (
          <span className='main-nav__deco'>Sign In</span>
        )}
        {username && (
        <span className='main-nav__deco' onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut} className='main-nav__icon main-nav__icon--signout' />
          Sign Out
        </span>
        )}
      </NavLink>
    </nav>
  );
}

export default Nav