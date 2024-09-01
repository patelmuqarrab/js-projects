import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {uid} = useParams()
  return (
      <div className='flex justify-center font-semibold text-2xl'>
      User: {uid}
      </div>
  );
}
export default User