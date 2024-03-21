import { GetServerSideProps } from 'next';
import React from 'react'

const admin = () => {
  return (
    <div>admin</div>
  )
}

export default admin

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Redirect to another page
  res.writeHead(302, { Location: '/admin/dashboard' });
  res.end();
  
  return {
    props: {}, // You must return an empty object here
  };
};