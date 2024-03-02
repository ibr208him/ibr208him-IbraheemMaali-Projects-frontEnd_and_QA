import React from 'react'
import { toast } from 'react-toastify';
import Input from '../../Shared/Input.jsx';
import { useFormik, } from 'formik';
import {registerSchema} from '../Validation/Validate.js';
import axios from'axios';

export default function Register() {


const initialValues={ 
    userName:'',
    email:'',
    password:'',
    image:'',
    };
const handleFieldChange=(event)=>{
    console.log(event);
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhh');
    formik.setFieldValue('image',event.target.files[0]);
}
const onSubmit=async users=>{
    console.log(users);
    const formData=new FormData();
    formData.append("userName", users.userName);
    formData.append("email", users.email);
    formData.append("password", users.password);
    formData.append("image", users.image);
    const {data}=await axios.post('https://ecommerce-node4.vercel.app/auth/signup',formData);
    console.log(data,'xxxxxxxxxxxxxxxx');

    if(data.message=='success'){
        formik.resetForm();
            toast('account created successfuly! please verify your email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        };
const formik=useFormik({
    initialValues, //shortcut for initialValues:initialValues, since the key and value is same word
    onSubmit,//shortcut for onSubmit:onSubmit,
    validationSchema:registerSchema,
})

    const inputs=[
        {
            type:'text',
            id:"username",
            name:'userName',// shall be same as given by backend,see the API documentation
            title:"User name",
            value:formik.values.userName,
        },
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
        {
            type:'file',
            id:"image",
            name:'image',
            title:"user image",
            onChange:handleFieldChange,
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
            onChange={input.onChange || formik.handleChange}
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
    <h2>Create account</h2>
    <form onSubmit={formik.handleSubmit} encType='multipart/formdata'>
        {
        renderInputs
        }
        <button type='Register' disabled={!formik.isValid}> Submit </button>
    </form>

    </div>
    </>
    
  )
}
