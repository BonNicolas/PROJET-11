import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import EditUser from '../../components/EditUser/edituser';
import Account from '../../components/Account/account';

const InfosAccounts = [

   { 
       id : "1",
       title : "Argent Bank Checking (x8349)",
       amount : "$2,082.79",
       description : "Available Balance",
   },
 
   {
       id : "2",
       title : "Argent Bank Savings (x6712)",
       amount : "$10,928.42",
       description : "Available Balance",
 
   },
   
   {
       id : "3",
       title : "Argent Bank Credit Card (x8349)",
       amount : "$184.30",
       description : "Current Balance",
 
   },
 ]

function User() {

   const token = useSelector((state) => state.auth.token);
   const navigate = useNavigate();

   useEffect(() => {
      if (!token) {
         navigate("/signin");
      }
   }, [token, navigate]);

   return (
      <main className="main main--bg-dark">
        <EditUser />
        {InfosAccounts.map((props => {
         return(
            <Account key={props.id}
            title={props.title}
            amount={props.amount}
            description={props.description}          
            /> 
         )
        }))}     
      </main>
   )
}
 
export default User