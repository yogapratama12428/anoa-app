import React from "react";
import dynamic from "next/dynamic";

const RootPage = () => {
  const ComponentC = dynamic(() => import("./_component/MapView"), {
    ssr: false,
  });
  return (
    <div className='relative'>
      <ComponentC />
    </div>
  );
};

export default RootPage;
