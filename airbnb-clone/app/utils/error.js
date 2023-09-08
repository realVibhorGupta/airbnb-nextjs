'use client';

import { useEffect } from "react";
import EmptyState from "../components/emptystate/emptystate";

const ErrorState = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return ( 
    <EmptyState
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
   );
}
 
export default ErrorState;