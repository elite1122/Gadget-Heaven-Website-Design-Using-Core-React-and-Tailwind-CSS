import { NavLink } from 'react-router-dom';
import { ActiveContext } from '../Root/Root';
import React, { useContext } from 'react';

const Banner = () => {

    const { setActiveTab } = useContext(ActiveContext);

    return (
        <div className="">
            <div className="w-full bg-purple-600 pb-64">
                <div className="w-4/5 mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    {/* <button className="btn  rounded-3xl">Shop Now</button> */}
                    <NavLink to="/dashboard" onClick={() => setActiveTab('dashboard')} className="bg-gray-100 text-purple-600 font-semibold px-4 py-2 rounded-3xl">Shop Now</NavLink>
                </div>
            </div>
            <div className="flex justify-center w-3/5 mx-auto relative">
                <div className="w-3/5 h-100 border-2 border-white rounded-2xl p-5 absolute -top-52 flex justify-center">
                    <img src="/banner.jpg" alt=""
                        className="object-cover w-full h-full rounded-2xl" />
                </div>
            </div>

        </div>
    );
};

export default Banner;