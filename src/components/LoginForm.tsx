'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn('credentials', {
      email,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res.error) {
          setError(JSON.parse(res.error).message);
        } else {
          clearInputs();
          router.push('/');
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
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
