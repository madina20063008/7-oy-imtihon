
// import React, { useEffect, useState } from 'react';
// import bell from '../assets/bell.png';
// import sleep from '../assets/sleep.svg';
// import button from '../assets/button.png';
// import arrow from '../assets/arrow.png';
// import { useNavigate } from 'react-router-dom';
// export const token = "67e1514e2ac3b760a778e38a";

// function Teachers() {
//   const navigate = useNavigate();
//   const [teachers, setTeachers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const handleLogout = () => {
//     navigate('/login');
//     window.location.reload();
//   };

//   const handleAddTeacher = () => {
//     navigate('/add-teacher'); 
//   };

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const res = await fetch('https://nt-devconnector.onrender.com/api/profile');
//         const data = await res.json();
//         if (Array.isArray(data) && data.length > 0) {
//           setTeachers(data);
//         } else {
//           setError(true);
//         }
//       } catch (err) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   const filteredTeachers = teachers.filter((teacher) => {
//     const name = teacher.user?.name?.toLowerCase() || '';
//     const email = teacher.user?.email?.toLowerCase() || '';
//     const company = teacher.company?.toLowerCase() || '';
//     const status = teacher.status?.toLowerCase() || '';
//     const location = teacher.location?.toLowerCase() || '';

//     return (
//       name.includes(searchTerm.toLowerCase()) ||
//       email.includes(searchTerm.toLowerCase()) ||
//       company.includes(searchTerm.toLowerCase()) ||
//       status.includes(searchTerm.toLowerCase()) ||
//       location.includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="mx-14">
//         <div className="flex justify-end pt-[30px]">
//           <img src={bell} alt="" className="h-[28px] mr-[10px] mt-2" />
//           <button className="py-2 px-6 rounded " onClick={handleLogout}>
//             Log out
//           </button>
//         </div>

//         <div className="flex bg-white justify-between items-center">
//           <div className="py-8">
//             <h3 className="text-[#4F4F4F] font-medium text-[20px]">Teachers</h3>
//           </div>
//           <button
//             className="bg-[#509CDB] text-white py-2 px-6 rounded"
//             onClick={handleAddTeacher} // Call handleAddTeacher when clicked
//           >
//             Add Teachers
//           </button>
//         </div>

// <input
//   type="search"
//   value={searchTerm}
//   onChange={(e) => setSearchTerm(e.target.value)}
//   placeholder="Search for a teacher by name or email"
//   className="w-full p-4 rounded-[10px] border border-gray-300 mb-4"
// />

//         {!loading && !error && filteredTeachers.length > 0 && (
//           <div className="mt-6 overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-white text-black border-b">
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Status</th>
//                   <th className="p-3">Company</th>
//                   <th className="p-3">Location</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTeachers.map((teacher, index) => {
//                   const user = teacher.user || {};
//                   const profileImage = user.avatar
//                     ? user.avatar
//                     : 'https://via.placeholder.com/40x40?text=👤'; // Fallback

//                   return (
//                     <tr
//                       key={index}
//                       className={`${
//                         index % 2 === 0 ? 'bg-white' : 'bg-[#EBF6FF80]'
//                       } text-black border-b`}
//                     >
//                       <td className="p-3 flex items-center gap-3">
//                         <img
//                           src={profileImage}
//                           alt="profile"
//                           className="w-10 h-10 rounded-full object-cover"
//                         />
//                         <span>{user.name || 'N/A'}</span>
//                       </td>
//                       <td className="p-3">{teacher.status || 'N/A'}</td>
//                       <td className="p-3">{teacher.company || 'N/A'}</td>
//                       <td className="p-3">{teacher.location || 'N/A'}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {!loading && (error || filteredTeachers.length === 0) && (
//         <div className="mt-[45px] flex justify-center">
//           <div className="grid justify-center mb-[50px] text-center">
//             <img src={sleep} alt="" />
//             <h1 className="text-[#4F4F4F] font-semibold text-[28px]">
//               No Teachers at this time
//             </h1>
//             <p className="text-[#4F4F4F] font-medium text-[14px]">
//               Teachers will appear here after they enroll in your school.
//             </p>
//           </div>
//           <div className="mt-[300px] ml-[100px]">
//             <button className="bg-[#152259] w-[150px] flex gap-4 text-white py-4 px-4 rounded-[50px]">
//               <div className="flex">
//                 <img src={button} alt="" className="h-[16px] mt-1 mr-1" />
//                 Support
//               </div>
//               <img src={arrow} alt="" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Teachers;




import React, { useEffect, useState } from 'react';
import bell from '../assets/bell.png';
import sleep from '../assets/sleep.svg';
import button from '../assets/button.png';
import arrow from '../assets/arrow.png';
import { useNavigate } from 'react-router-dom';

const token = "64bebc1e2c6d3f056a8c85b7";

function Teachers() {
    const navigate = useNavigate();
    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = () => {
        navigate('/login');
        window.location.reload();
    };

    const handleAddTeacher = () => {
        navigate('/add-teacher');
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRowClick = (id) => {
        navigate(`/flower/${id}`);
    };

    const mergeFlowers = (localData, apiData) => {
        const combined = [...(localData || []), ...(apiData || [])];

        const unique = combined.filter(
            (flower, index, self) =>
                index === self.findIndex(f => f._id ? f._id === flower._id : f.title === flower.title)
        );

        return unique;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const local = JSON.parse(localStorage.getItem('flowers')) || [];

                const res = await fetch(`https://green-shop-backend.onrender.com/api/flower/category/small-plants?access_token=${token}`);
                const json = await res.json();

                const apiFlowers = json?.data || [];
                const merged = mergeFlowers(local, apiFlowers);

                setFlowers(merged);
                localStorage.setItem('flowers', JSON.stringify(merged));
            } catch (err) {
                console.error('Fetch error:', err);
                const local = JSON.parse(localStorage.getItem('flowers')) || [];
                setFlowers(local);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const isNumber = (value) => !isNaN(value) && value.trim() !== '';

    const filteredFlowers = flowers.filter(flower => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const numberSearchTerm = isNumber(searchTerm) ? parseFloat(searchTerm) : null;

        return (
            flower.title.toLowerCase().includes(lowerSearchTerm) ||
            flower.category.toLowerCase().includes(lowerSearchTerm) ||
            (flower.discount_price && flower.discount_price.toLowerCase().includes(lowerSearchTerm)) ||
            (numberSearchTerm !== null && (
                flower.price === numberSearchTerm || flower.discount_price === numberSearchTerm ||
                (flower.discount_price === "is not in discount" && lowerSearchTerm === "is not in discount")
            ))
        );
    });

    return (
        <div className="bg-white min-h-screen">
            <div className="mx-14">
                <div className="flex justify-end pt-[30px]">
                    <img src={bell} alt="" className="h-[28px] mr-[10px] mt-2" />
                    <button className="py-2 px-6 rounded" onClick={handleLogout}>
                        Log out
                    </button>
                </div>

                <div className="flex bg-white justify-between items-center">
                    <div className="py-8">
                        <h3 className="text-[#4F4F4F] font-medium text-[20px]">Flowers</h3>
                    </div>
                    <button className="bg-[#509CDB] text-white py-2 px-6 rounded" onClick={handleAddTeacher}>
                        Add Flower
                    </button>
                </div>

                <input
                    type="search"
                    placeholder="Search for a flower by name, category, or price"
                    className="w-full p-4 rounded-[10px] border border-gray-300 mb-4"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                {loading ? (
                    <div className="mt-[45px] flex justify-center">
                        <div className="grid justify-center mb-[50px] text-center">
                            <img src={sleep} alt="Loading" />
                            <h1 className="text-[#4F4F4F] font-semibold text-[28px]">Loading...</h1>
                        </div>
                        <div className="mt-[300px] ml-[100px]">
                            <button className="bg-[#152259] w-[150px] flex gap-4 text-white py-4 px-4 rounded-[50px]">
                                <div className="flex">
                                    <img src={button} alt="" className="h-[16px] mt-1 mr-1" />
                                    Support
                                </div>
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                ) : filteredFlowers.length === 0 ? (
                    <div className="mt-[45px] flex justify-center">
                        <div className="grid justify-center mb-[50px] text-center">
                            <img src={sleep} alt="" />
                            <h1 className="text-[#4F4F4F] font-semibold text-[28px]">
                                No matching flowers found
                            </h1>
                            <p className="text-[#4F4F4F] font-medium text-[14px]">
                                Try searching with a different name, category, or price.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white text-black border-b">
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Flower Name</th>
                                    <th className="p-3">Discount Price</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFlowers.map((flower, index) => (
                                    <tr
                                    key={index}
                                    onClick={() => navigate(`/flower/${flower._id || index}`)} 
                                    className={`cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-[#EBF6FF80]'} text-black border-b`}
                                  >                                                                  
                                  
                                        <td className="p-3">
                                            <img
                                                src={flower.main_image || '/fallback.jpg'}
                                                alt={flower.title}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </td>
                                        <td className="p-3">{flower.title}</td>
                                        <td className="p-3">{flower.discount_price || 'is not in discount'}</td>
                                        <td className="p-3">{flower.category}</td>
                                        <td className="p-3">${flower.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Teachers;
