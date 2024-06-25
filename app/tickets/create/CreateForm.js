'use client'

import React, {useState} from 'react';
import {useRouter} from "next/navigation";

function CreateForm(props) {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true)

    const ticket = {
      title, body, priority, user_email: 'test@gmail.com'
    }

    const res = await fetch('http://localhost:4000/tickets/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ticket),
    })

    if(res.status === 201) {
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <form className='w-1/2' onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          type='text'
          value={title}
          placeholder='Title'
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
          required
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value)
          }}
        >
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
      </label>
      <button
        className='btn btn-primary'
        disabled={isLoading}
      >
        {isLoading && 'Adding ...'}
        {!isLoading && 'Add ticket'}
      </button>
    </form>
  );
}

export default CreateForm;