import React from 'react';

const ErrorHandler = ({error}) => {
  return ( 
    <p>
      Status: {error.status} {error.msg}      
    </p>
   );
}
 
export default ErrorHandler;