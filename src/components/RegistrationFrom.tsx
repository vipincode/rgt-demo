'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/utils/auth';

export default function RegistrationForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // register api placeholder
    registerUser(email, password)
      .then((res) => {
        if (res.status === 201) {
          clearInputs();
          router.push('/login');
        } else {
          setError(res.message);
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className='max-w-[500px] mx-auto'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={email}
          onChange={handleEmailChange}
          placeholder='Your email'
          className='w-full my-3 px-3 py-2 rounded-md border border-gray-400'
        />
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Your password'
          className='w-full my-3 px-3 py-2 rounded-md border border-gray-400'
        />
        <button
          type='submit'
          className='bg-green-600 text-white px-4 py-2 rounded-md min-w-[100px]'
        >
          Register
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
