"use client"
import React, { useState, useEffect } from 'react';
// Class created for Error for client side hydration  rendderiing specially to Next framework
const ClientOnly = ({children}) => {
    const [hasMounted, setHasMounted ] = useState(false);
    
    
    useEffect(()=> {
        setHasMounted(true);
    },[]);

    if(!hasMounted){
        return null;
    }

  return (
    <>{children}</>
  )
}

export default ClientOnly