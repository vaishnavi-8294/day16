import React from 'react'
import{Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <>
    <h2>404 Error, page not found</h2>
    <Link to={"/"}>
        <button>back to home </button>
    </Link>
    </>
  )
}
