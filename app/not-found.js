import React from 'react';
import Link from "next/link";

function NotFound(props) {
  return (
    <main className="text-center">
      <h2 className='text-4xl'>There was a problem</h2>
      <p>We could not find the page you were looking for</p>
      <p>Go back to the <Link href='/'>Dashboard</Link></p>
    </main>
  );
}

export default NotFound;