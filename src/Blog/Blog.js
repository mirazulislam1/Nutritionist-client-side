import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-2xl font-semibold text-accent'>Q1. Difference between SQL and NoSQL</h1>
                <p className='mt-2'>1. SQL databases are relational, NoSQL databases are non-relational.</p>
                <p>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                <p>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                <p>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                <p>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold text-accent'>Q2. What is JWT, and how does it work?</h1>
                <p className='mt-2'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                <br />
                <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                <p>1. User sign-in using username and password or google/facebook.</p>
                <p>2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</p>
                <p>3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</p>
                <p>4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold text-accent mb-2'>Q3. What is the difference between javascript and NodeJS?</h1>
                <p>1. JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</p>
                <p>2. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</p>
                <p>3. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.</p>
                <p>4. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development</p>
                <p>5. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold text-accent mb-2'>Q4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                <br/>
                <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;