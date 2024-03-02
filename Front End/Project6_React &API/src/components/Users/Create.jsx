import React from 'react';
import axios from 'axios';
import Input from'../../Shared/Input.jsx';
import { toast } from 'react-toastify';
import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import UserValidation from '../../Validation/UserValidation.jsx';
import Loader from './Loader.jsx';

export default function Create() {
  const navigate=useNavigate();
  /****************************************************************** */
  let [age,setAge]=useState(0);
  let changeAge=(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    setAge(e.target.value);
  }
/************************************************************************************ */
   let [user,setUser]=useState(
    {
      name:"",
      email:"",
      password:""
     
  });

  let [errors,setErrors]=useState(
    {
      name:"",
      email:"",
      password:""
     
  });

  let [errorBack,setErrorBack]=useState('');

  let [loader,setLoader]=useState(false);

 let handleData=  function(e){
  // console.log(e.target.value);
  // const{name,value}= e.target; //e.target object has two properties which are name and value.
  // console.log(name);
  // console.log(value);
  // // setUser(
  // //   {inputName:value}
  // // )
  //  setUser(
  //   {[name]:value}
  // )
  // console.log(user); // every time, the old properties get replaced with the changed input only
  /*************************************************************** */
     setUser(
  {
     ...user, //to solve the issue of (every time, the old properties get replaced with the changed input only)
  [e.target.name]:e.target.value,//e.target object has two properties which are name and value.
  }
  )

console.log(user);

 };
/************************************************************************************ */
// let sendData=async function(){
//   const {newData}=await axios.post('https://crud-users-gold.vercel.app/users/',user);
// }
const sendData=async (e)=>{
  e.preventDefault();
  setLoader(true);
  console.log('test');
  console.log('hello',UserValidation(user));

if(Object.keys(UserValidation(user)).length>0){ // object.keys(objectname) used to check if the object is empty
   setErrors(UserValidation(user));
   setLoader(false);
}
 else{
  const {data}=await axios.post("https://crud-users-gold.vercel.app/users/",user).catch(err=>{
    console.error(err.response.data.message,'hhhhhhhhhhhhhhhhhhhh');
    setErrorBack(err.response.data.message);
    setLoader(false);
  })


  // console.log(data);
  if(data.message==='success'){ // data and message can be any name depending on backend how they named it, so it is better to  console.log(data) to see how it named
    toast('data added successfully');
   navigate('/user/index');
   setLoader(false);
}
}
}

if(loader===true){
  return(
    <Loader />
  )
  }
else{
  return (
    /*************************************************************************************************** */
    // <form action="">
    //   <label htmlFor="age" className='me-3'> Enter your age</label>
    //   <input type="text" id='age' name='age' value={age} onChange={(event)=>changeAge(event)} />
    //   <button className='ms-3'> click</button>
    //   <p>entered age is {age}</p>
    // </form>
/******************************************************************************************************** */
<div className="container-fluid">
  <div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li>
            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
          </li>
          <li>
            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
              <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">loser</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>

  {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
  
     <div className="col py-3">

     {errorBack&&<p className='text-danger'>{errorBack}</p>}
   <form onSubmit={sendData}>

  {/* <div className="mb-3">
    <label htmlFor="username" className="form-label">user name</label>
    <input type="text" className="form-control" id="username" value={user.name} name='name' onChange={(event)=>handleData(event)}/>
  </div> 
   <div className="mb-3">
    <label htmlFor="email" className="form-label">email address</label>
    <input type="email" className="form-control" id="email" value={user.email} name='email' onChange={(event)=>handleData(event)}/>
  </div> 
     <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input type="password" className="form-control" id="password" value={user.password} name='password' onChange={(event)=>handleData(event)}/>
  </div> */}
  
  <Input value={user.name} errors={errors} id={'username'} labelTitle={'user name'} type={'text'} name={'name'} onChangeFunc={handleData}/>
  {/* {errors.name && <p className='text-danger'>{errors.name}</p>} */}
 
   
  <Input value={user.email} errors={errors} id={'email'} labelTitle={'email address'} type={'email'} name={'email'} onChangeFunc={handleData}/>
  {/* {errors.email && <p className='text-danger'>{errors.email}</p>} */}
  <Input value={user.password} errors={errors} id={'password'} labelTitle={'password'} type={'password'} name={'password'} onChangeFunc={handleData}/>
  {/* {errors.password && <p className='text-danger'>{errors.password}</p>} */}

  <div className="mb-3 w-25 ">
    <input type="submit" className="form-control bg-success" value="add user"/>
  </div> 

</form>
    </div>
    {/* ............................................................................................ */}

  </div>
</div> 


  )
}
}