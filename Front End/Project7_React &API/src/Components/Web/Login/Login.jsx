import React from 'react'
import { toast } from 'react-toastify';
import Input from '../../Shared/Input.jsx';
import { useFormik, } from 'formik';
import {loginSchema} from '../Validation/Validate.js';
import axios from'axios';
import { useNavigate } from 'react-router-dom';



export default function Login({saveCurrentUser}) {

const navigate=useNavigate();
const initialValues={ 
 
    email:'',
    password:'',
 
    };
const handleFieldChange=(event)=>{
    console.log(event);
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhh');
    formik.setFieldValue('image',event.target.files[0]);
}
const onSubmit=async users=>{
    console.log(users);
    const {data}=await axios.post('https://ecommerce-node4.vercel.app/auth/signin',users);
    console.log(data,'xxxxxxxxxxxxxxxx');

     if(data.message=='success'){
        localStorage.setItem('userToken',data.token);
        saveCurrentUser();
         formik.resetForm();
            toast('you are successfully logged in ...:)', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigate('/home');
         }
        };
const formik=useFormik({
    initialValues, //shortcut for initialValues:initialValues, since the key and value is same word
    onSubmit,//shortcut for onSubmit:onSubmit,
    validationSchema:loginSchema,
})

    const inputs=[
        
        {
            type:'email',
            id:"email",
            name:'email',
            title:"Email address", 
            value:formik.values.email,
        },
        {
            type:'password',
            id:"password",
            name:'password',
            title:"Password",
            value:formik.values.password,
        },
        
    ];
// console.log('hhh', formik.initialValues.email);
const renderInputs=inputs.map((input,index)=>{
    console.log(input);
    return <Input 
            type={input.type}
            id={input.id}
            name={input.name}
            title={input.title}
            value={input.value}
            onChange={ formik.handleChange}
            errors={formik.errors}
            onBlur={formik.handleBlur}//onBlur & touched should be written together
            touched={formik.touched}//onBlur & touched should be written together
            key={index}
           
        />
 
}     
)

   return (
    <>
    <div className='container'>
    <h2>Log In</h2>
    <form onSubmit={formik.handleSubmit} encType='multipart/formdata'>
        {
        renderInputs
        }
        <button type='Register' disabled={!formik.isValid}> Log In </button>
    </form>

    </div>
    </>
    
  )
}
