'use client'

import { useEffect, useState } from 'react'
import LoadingModal from "@/components/LoadingModal/LoadingModal";
import { Header } from "@/components/Header/Header";
import { InitContent } from "@/components/InitContent/InitContent";

import { MiddelContent } from "@/components/middelContent/MiddelContent";
export const InitComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
          }, 3000);
    },[])
  return (
    <>
      {isLoading && <LoadingModal message="Cargando curriculum" />}
      {!isLoading && (
        <>
          <Header />
          <InitContent />
          <MiddelContent />
        </>
      )}
    </>
  );
};
