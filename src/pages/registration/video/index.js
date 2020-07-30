import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';



function RegistrationVideo() {
    return (
      <PageDefault>
        <h1>Registration video</h1>
             
        <Link to="/registration/category">
            Category Registration 
        </Link> 
      </PageDefault>
    )
 }

 export default RegistrationVideo;


 //'to' on <Link  to > is a substituition of href. 