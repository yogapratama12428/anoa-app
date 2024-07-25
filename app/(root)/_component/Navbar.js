import Image from "next/image";

export const Navbar = () => {
  return (
    <div className='sticky top-0 items-center flex justify-between '>
      <div className='my-auto'>
        <Image
          src='/next.svg'
          alt='logo'
          width={100}
          height={100}
          className='my-6 mx-5'
        />
      </div>
      <div>
        <Image
          src='/next.svg'
          alt='logo'
          width={80}
          height={80}
          className='rounded-full'
        />
      </div>
    </div>
  );
};
