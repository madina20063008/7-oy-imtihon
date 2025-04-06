
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Login() {
//   const [login, setLogin] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const isFormValid = login && password;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('https://nt-devconnector.onrender.com/api/auth', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: login,
//           password
//         })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.errors?.[0]?.msg || 'There is no such user');
//         return;
//       }

//       localStorage.setItem('token', data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       setError('There is no such user');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="text-center space-y-8">
//         <h1 className="text-2xl font-semibold text-gray-800">
//           Welcome, Log into your account
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-8 rounded shadow-md w-80 mx-auto space-y-6"
//         >
//           <p className="text-gray-500 text-sm">
//             It is our great pleasure to have you on board!
//           </p>

//           <input
//             type="text"
//             placeholder="Enter your Email"
//             value={login}
//             onChange={(e) => setLogin(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             disabled={!isFormValid}
//             className={`w-full py-2 rounded transition duration-300 text-white ${
//               isFormValid ? 'bg-blue-400 hover:bg-blue-500' : 'bg-gray-300 cursor-not-allowed'
//             }`}
//           >
//             Login
//           </button>

//           <p className="text-sm text-gray-600 mt-2">
//             Does not have an account?{' '}
//             <Link to="/" className="text-blue-500 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const isFormValid = login && password;

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === login && user.password === password);

    if (!user) {
      setError('Invalid login or password');
      return;
    }

    localStorage.setItem('token', 'dummy-token'); // Use real token here if necessary

    // If you want to navigate to a "password page" or any other page:
    navigate('/password'); // Change this to whatever route you want
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome, Log into your account</h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 mx-auto space-y-6">
          <p className="text-gray-500 text-sm">It is our great pleasure to have you on board!</p>

          <input
            type="text"
            placeholder="Enter your Email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded transition duration-300 text-white ${isFormValid ? 'bg-blue-400 hover:bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Login
          </button>

          <p className="text-sm text-gray-600 mt-2">
            Does not have an account?{' '}
            <Link to="/" className="text-blue-500 hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
