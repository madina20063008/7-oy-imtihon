// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [login, setLogin] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();
//   const isFormValid = email && login && password;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('https://nt-devconnector.onrender.com/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: login,
//           email,
//           password
//         })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.errors?.[0]?.msg || 'Signup failed');
//         return;
//       }

//       localStorage.setItem('token', data.token);
//       navigate('/login');
//     } catch (err) {
//       setError('Something went wrong');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="text-center space-y-8">
//         <h1 className="text-2xl font-semibold text-gray-800">
//           Welcome, Sign up
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-8 rounded shadow-md w-80 mx-auto space-y-6"
//         >
//           <p className="text-gray-500 text-sm">
//             It is our great pleasure to have you on board!
//           </p>

//           <input
//             type="email"
//             placeholder="Enter your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
//           />
//           <input
//             type="text"
//             placeholder="Create your Login"
//             value={login}
//             onChange={(e) => setLogin(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
//           />
//           <input
//             type="password"
//             placeholder="Create your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             disabled={!isFormValid}
//             className={`w-full py-2 rounded transition duration-300 text-white ${
//               isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
//             }`}
//           >
//             Sign up
//           </button>

//           <p className="text-sm text-gray-600 mt-2">
//             Already have an account?{' '}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Sign in
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const isFormValid = email && login && password;

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUser.some(user => user.email === email);
    
    if (userExists) {
      setError('User with this email already exists');
      return;
    }

    const newUser = { email, login, password };
    existingUser.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUser));

    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome, Sign up</h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 mx-auto space-y-6">
          <p className="text-gray-500 text-sm">It is our great pleasure to have you on board!</p>

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Create your Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="password"
            placeholder="Create your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded transition duration-300 text-white ${isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Sign up
          </button>

          <p className="text-sm text-gray-600 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
