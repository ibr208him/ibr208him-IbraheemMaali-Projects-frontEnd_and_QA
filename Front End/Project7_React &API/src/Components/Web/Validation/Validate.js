// const validate=values=>{
//     let errors={};
//     if(values.userName==''){
//         errors.userName='please enter a username';
//     }
//     if(values.email==''){
//         errors.email='please enter an email';
//     }
//     if(values.password==''){
//         errors.password='please enter a password';
//     }
//     if(values.address==''){
//         errors.address='please enter an address';
//     }
//     return errors;
// };

// export default validate;
import * as yup from 'yup';
const registerSchema =yup.object({
    userName:yup.string().required("username is required").min(3,"must be at least 3 characters").max(30,"must be less than 30 characters"),
    email:yup.string().required("email address is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 characters").max(30,"must be less than 30 characters"),    
    })

const loginSchema =yup.object({
        email:yup.string().required("email address is required").email(),
        password:yup.string().required("password is required").min(3,"must be at least 3 characters").max(30,"must be less than 30 characters"),    
        })
export {registerSchema,loginSchema};

