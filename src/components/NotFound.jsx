import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error=useRouteError();
  return (
    <>
    <h2>NotFound | 404</h2>
    <p>{error.data}</p>
    </>

  )
}

export default NotFound