import person from '../assets/person.png'
import building from '../assets/building.png'
import cap from '../assets/cap.png'
import button from '../assets/button.png'
import arrow from '../assets/arrow.png'
import bell from '../assets/bell.png'
import { NavLink, useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
        window.location.reload(); 
      };
      
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className="p-8">
                    <p className="text-gray-600">Learn  how to launch faster <br />
                        watch our webinar for tips from our experts and get a limited time offer.</p>
                </div>
                <div className="pr-8 flex">
                    <img src={bell} alt="" className='h-[28px] mr-[50px] mt-2'/>
                    <button className="bg-[#509CDB] text-white py-2 px-6 rounded" onClick={handleLogout}>Log out</button>
                </div>
            </div>
            <div className="bg-white w-full h-screen ">
                <h1 className="text-[36px] font-semibold pb-[25px] p-8">Welcome to your dashboard, Udemy school</h1>

                <div className="flex ml-12">
                    <div className="">
                        <p className="font-semibold text-[24px] text-gray-700 mb-[50px]">Uyo/school/@teachable.com</p>
                        <div className=" p-6 flex gap-[20px]">
                            <img src={person} alt="" className='h-[40px]' />
                            <div className="mb-2">
                                <h2 className="text-[24px] font-medium ">Add other admins</h2>
                                <p className="text-gray-600">Create rich course content and coaching products for your students. <br /> When you give them a pricing plan, they'll appear on your site!</p>
                            </div>
                        </div>
                        <div className=" p-6 flex gap-[20px]">
                            <img src={building} alt="" className='h-[40px]' />
                            <div className="mb-2">
                                <h2 className="text-[24px] font-medium ">Add classes</h2>
                                <p className="text-gray-600">Create rich course content and coaching products for your students. <br /> When you give them a pricing plan, they'll appear on your site!</p>
                            </div>
                        </div>
                        <div className=" flex w-[800px] justify-between">
                            <div className="p-6 flex gap-[20px]">
                                <img src={cap} alt="" className='h-[40px]' />
                                <div className="mb-2">
                                    <h2 className="text-[24px] font-medium ">Add students</h2>
                                    <p className="text-gray-600">Create rich course content and coaching products for your students. <br /> When you give them a pricing plan, they'll appear on your site!</p>
                                </div>
                            </div>
                            <div className=" mt-6">
                                <button className="bg-[#152259] w-[150px] flex gap-4 text-white py-4 px-4 rounded-[50px]">
                                    <div className="flex">
                                        <img src={button} alt="" className='h-[16px] mt-1 mr-1'/>
                                        Support
                                    </div>
                                    <img src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Dashboard;