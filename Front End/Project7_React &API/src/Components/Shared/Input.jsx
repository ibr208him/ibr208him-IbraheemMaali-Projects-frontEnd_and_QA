import React from 'react'

export default function Input({id,type,name,title,value,onChange,errors,onBlur,touched}) {
  console.log(touched);
  return (
    <>
    <div className='input-group mb-3'>
     <label htmlFor={id}>{title}</label>
     <input type={type} className='form-control ms-5' id={id} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
     {touched[name] && errors[name]&&<p className="text text-danger">{errors[name]}</p>}
     </div>

    </>
  )
}
