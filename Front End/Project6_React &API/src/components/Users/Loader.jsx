import React from 'react'

export default function Loader() {
  return (
    <>
<div className='bg-white d-flex vh-100 w-100 d-flex justify-content-center align-items-center '>
  <button className="btn btn-primary" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
    Loading...
  </button>
</div>

</>
  )
}
