'use client';
import { signOut, useSession } from 'next-auth/react';


export default function Home() {
  const {data : Session, status } = useSession();
   if (status === "unauthenticated") {
    return <p>Access Denied</p>
  } 
  return (
    <>
      <div >{Session?.user?.name}</div>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}