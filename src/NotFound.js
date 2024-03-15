import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='page-not-found'>
        <h1>404 Page not found</h1>
        <h2><Link to="/portal/home"> Back to HomePage </Link></h2>
        <img src="https://media.istockphoto.com/id/1093209080/vector/error-404-page-not-found-concept-illustration-webpage-banner-search-result-message-404.jpg?s=612x612&w=0&k=20&c=S90k5D19BxMN_AevZMkG3soJTQQLIL1-xmz5j0wLlZs=" width="500px" height="500px"/>
    </div>
  )
}
