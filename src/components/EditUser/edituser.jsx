import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function EditUser() {

   const dispatch = useDispatch();

   const token = useSelector((state) => state.auth.token);
   const user = useSelector((state) => state.name.username);
   const firstname = useSelector((state) => state.name.firstname);
   const lastname = useSelector((state) => state.name.lastname);

   const [showForm, setShowForm] = useState(false);
   const [newUsername, setNewUsername] = useState(user);

   const toggleForm = () => {
      setShowForm(!showForm);
   };

   const handleInputChange = (event) => {
      setNewUsername(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({userName: newUsername}),
         });

         if (response.ok) {
         console.log(response);
         dispatch({
            type: 'SET_USER',
            payload: {
               username: newUsername,
               firstname: firstname,
               lastname: lastname,
            },
         });

         
         } else {
         console.error('Erreur lors de l envoi du nouveau nom d utilisateur');
         }
         
      } catch (error) {
         console.error('Erreur lors de la requête :', error);
      }
      setNewUsername(newUsername);
      setShowForm(false);
   };

   const handleCancel = () => {
    setShowForm(false);
    setNewUsername(user); 
 };

   useEffect(() => {
      setNewUsername(user);
   }, [user]);

   return (
    <section className="edituser__header header"> 
             <h1>Welcome back, <div>{firstname} {lastname}!</div></h1>
        {!showForm && (
          <button className='button' onClick={toggleForm}>Edit Name</button>
        )}
      {showForm && (
        <form className="edituser__form" onSubmit={handleSubmit}>
            <div className='edituser__container'>
            <label>User name:</label>
            <input type="text" value={newUsername} onChange={handleInputChange} required/>
            </div>
            <div className='edituser__container'>
            <label>First name:</label>
            <input type="text" value={firstname} disabled/>
            </div>
            <div className='edituser__container'>
            <label>Last name:</label>
            <input type="text" value={lastname} disabled/>
            </div>
            <div className='edituser__buttons'>
                <button type="submit" className='button'>Save</button>
                <button type="button" className='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
      )}
    </section>
  );

}

export default EditUser;
