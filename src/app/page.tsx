import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='bg-black flex flex-col justify-center items-center space-y-8 h-screen'>
      <h1 className='text-white text-center text-2xl font-bold uppercase'>
        You have logged in!
      </h1>
      <Image
        src='/images/treasure.png'
        alt='treasure chest illustration'
        className='w-1/4 object-contain'
        width={400}
        height={400}
      />
      <LogoutButton />
    </section>
  );
}
