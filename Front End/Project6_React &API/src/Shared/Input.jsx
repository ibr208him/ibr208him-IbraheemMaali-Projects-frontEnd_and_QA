import React from 'react'

export default function Input({value,errors,id,labelTitle,type,name,onChangeFunc,CustomClass}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{labelTitle}</label>
    <input value={value} type={type} name={name} className={`form-control ${CustomClass}`} id={id} onChange={onChangeFunc}/>
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}

  </div>
  )
}
