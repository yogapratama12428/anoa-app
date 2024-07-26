import Image from "next/image";

export const Navbar = () => {
  return (
    <div className='sticky top-0 items-center flex justify-between'>
      <div className='my-auto flex flex-row w-auto gap-2'>
        <Image
          src='/googlemaps.svg'
          alt='logo'
          width={40}
          height={40}
          className='mx-1 my-2'
        />
        <div className='text-black text-xl my-auto'>Anoa Apps</div>
      </div>
      {/* Profil */}
    </div>
  );
};
