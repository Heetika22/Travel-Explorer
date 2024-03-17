// Error.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png' alt="404 Error" style={{height: '400px', borderRadius: '50%' }}/><br/>
      Go to<button style={{border:'none', backgroundColor: '#cf0d88', margin:'20px'}}><Link to={'/'} className='LinkData'style={{ textDecoration: 'none', color: 'white' }}> Home</Link></button>
    </div>
  );
}

export default Error;
