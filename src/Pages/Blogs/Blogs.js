import React from 'react';

const Blogs = () => {
  return (
    <div className='bg-gray-100 py-20'>
      <div className="text-center mb-10">
        <p>My Services</p>
        <h1 className="text-4xl font-bold">Some Hot Question Answers</h1>
        <div className="h-1 w-14 bg-red-500 mx-auto mt-4"></div>
      </div>
      <div className='w-5/6 mx-auto'>
        <div className='mb-10'>
          <h2 className='text-3xl font-semibold mb-3'>Question 1. What is the deffference between SQL and NOSQL?</h2>
          <p>
          SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-3xl font-semibold mb-3'>Question 2. What is JWT, and how does it work?</h2>
          <p>
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-3xl font-semibold mb-3'>Question 3. What is the difference between javascript and NodeJS?</h2>
          <p>
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-3xl font-semibold mb-3'>Question 4. How does NodeJS handle multiple requests at the same time??</h2>
          <p>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;