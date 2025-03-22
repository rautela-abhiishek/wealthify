import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/header';  

const Page = () => {
  return (
    <ClerkProvider>
      <Header />
    </ClerkProvider>
  );
};

export default Page;