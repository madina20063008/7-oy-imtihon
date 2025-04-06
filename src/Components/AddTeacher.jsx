
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bell from '../assets/bell.png';

function AddFlower() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        flowerName: '',
        discountPrice: '',
        category: '',
        price: '',
        image: null,
    });

    const handleLogout = () => {
        navigate('/login');
        window.location.reload();
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingFlowers = JSON.parse(localStorage.getItem('flowers')) || [];

        const newFlower = {
            title: formData.flowerName,
            discount_price: formData.discountPrice || 'is not in discount',
            category: formData.category,
            price: formData.price,
            main_image: formData.image ? URL.createObjectURL(formData.image) : null,
        };

        const updatedFlowers = [...existingFlowers, newFlower];

        localStorage.setItem('flowers', JSON.stringify(updatedFlowers));

        navigate('/teachers');
    };

    return (
        <div className="bg-white p-8 rounded shadow-md h-screen">
            <div className="flex justify-end pt-[30px]">
                <img src={bell} alt="" className="h-[28px] mr-[10px] mt-2" />
                <button className="py-2 px-6 rounded " onClick={handleLogout}>
                    Log out
                </button>
            </div>
            <div className="flex bg-white justify-between items-center">
                <div className="py-8">
                    <h3 className="text-[#4F4F4F] font-medium text-[20px]">Flowers</h3>
                </div>
                <button
                    type="submit"
                    className="bg-[#509CDB] text-white py-2 px-4 rounded hover:bg-[#4084C0]"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Flower Name</label>
                    <input
                        type="text"
                        name="flowerName"
                        value={formData.flowerName}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Discount Price</label>
                    <input
                        type="number"
                        name="discountPrice"
                        value={formData.discountPrice}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="small-plants">Small Plants</option>
                        <option value="medium-plants">House Plants</option>
                        <option value="large-plants">Seeds</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Import Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
            </form>
        </div>
    );
}

export default AddFlower;
