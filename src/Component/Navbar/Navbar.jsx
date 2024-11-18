import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Navbar = ({ cartItems, wishlistItems }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Dynamically set active tab based on current route
    const activeTab = location.pathname === '/' ? 'home' : location.pathname.slice(1);

    // Function to calculate total cart cost
    const getTotalCost = () => {
        return cartItems.reduce((total, item) => total + (item.gadget.price || 0), 0);
    };

    // Function to handle NavLink styling based on active state
    const getNavLinkClass = (tabName) => (
        `${activeTab === tabName ? 'underline underline-offset-4' : ''} 
        ${isHomePage ? 'text-white' : 'text-black'} 
        font-bold py-2 px-6 mr-2`
    );
    

    const links = (
        <>
            <li>
                <NavLink to="/" className={getNavLinkClass('home')}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/statistics" className={getNavLinkClass('statistics')}>
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={getNavLinkClass('dashboard')}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={getNavLinkClass('about')}>
                    About
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`${isHomePage ? 'bg-purple-600' : 'bg-white'} transition-colors duration-300`}>
            <div className="navbar w-4/5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`${isHomePage ? 'text-white' : 'text-black'} h-5 w-5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className={`${isHomePage ? 'text-white' : 'text-black'} btn btn-ghost text-xl`}>
                        Gadget Heaven
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    {/* Cart Dropdown */}
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle border-1 border-gray-300 bg-white hover:bg-slate-200">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                                </div>
                            </div>
                            <div tabIndex="0" className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">{cartItems.length} Items</span>
                                    <span className="text-gray-500 text-base pb-2">Subtotal: ${getTotalCost()}</span>
                                    <div className="card-actions">
                                        <Link to="/dashboard">
                                            <button className="btn btn-primary btn-block">Dashboard</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wishlist Dropdown */}
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle border-1 border-gray-300 bg-white hover:bg-slate-200">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">{wishlistItems.length}</span>
                                </div>
                            </div>
                            <div tabIndex="0" className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">{wishlistItems.length} Items</span>
                                    <span className="text-gray-500 text-sm pb-3">
                                        <ul>
                                            {wishlistItems.map((item, index) => (
                                                <li key={index}>
                                                    {index + 1}. {item.gadget.product_name}
                                                </li>
                                            ))}
                                        </ul>
                                    </span>
                                    <div className="card-actions">
                                        <Link to="/dashboard">
                                            <button className="btn btn-primary btn-block">Dashboard</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
