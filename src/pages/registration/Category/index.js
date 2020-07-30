import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';



function RegistrationCategory() {
    return (
      <PageDefault>
        <h1>Registration Category</h1>
             
        <Link to="/">
            back to home
        </Link> 
      </PageDefault>
    )
 }

 export default RegistrationCategory;