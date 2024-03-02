import React from 'react'

export default function UserValidation(user) {

let errors={};

if(user.name.trim()===''){ // remove the white spaces by trim function
  errors.name='username is required';
}
else if(user.name.length<2){
  errors.name='username must be at least 3 characters';
}

if(user.email.trim()===''){ // remove the white spaces by trim function
  errors.email='email is required';
}
else if(user.email.length<9){
  errors.email='email must be at least 10 characters';
}

if(user.password.trim()===''){ // remove the white spaces by trim function
  errors.password='password is required';
}
else if(user.password.length<4){
  errors.password='password must be at least 5 characters';
}
return errors;
}
