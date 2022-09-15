import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { ApplicationContext } from '../../context/context';

export function ImgList() {

   const { search } = useContext(ApplicationContext);
   const [images, SetImages] = useState([]);

   useEffect(() => {
      
   },[])

   return (
      <>
      {search}
      </>
   )
}