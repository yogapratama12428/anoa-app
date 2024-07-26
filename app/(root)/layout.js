import { Navbar } from "./_component/Navbar";
import { Sidebar } from "./_component/Sidebar";

const Rootlayout = ({ children }) => {
  return (
    <div className='h-auto relative dark:bg-gray-900 w-screen'>
      <div className='fixed inset-x-0 top-0 h-18 py-2 mt-2 .container z-50 mx-2 bg-white rounded-xl'>
        <Navbar />
      </div>

      <div className='fixed flex  inset-y-0 left-0 z-50 mx-2 mt-28'>
        <Sidebar />
      </div>
      {/* pt or pull top pushes the content down accounting for the height of the navbar  
            1:26:33 / 10:41:03 - https://youtu.be/Big_aFLmekI?si=P2rTnadq2IYS_90F */}
      <main className='h-full dark:bg-gray-900'>{children}</main>
    </div>
  );
};

export default Rootlayout;
