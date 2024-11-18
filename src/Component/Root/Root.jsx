import React, { useEffect, createContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create contexts for cart and wishlist
export const CartContext = createContext();
export const WishlistContext = createContext();
export const ActiveContext = createContext();

const Root = () => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [activeTab, setActiveTab] = useState([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
                <ActiveContext.Provider value={{ activeTab, setActiveTab }}>
                    <div>
                        <Navbar cartItems={cartItems} wishlistItems={wishlistItems} />
                        <TitleUpdater /> {/* Handles updating the document title */}
                        <ToastContainer position="top-center" autoClose={1000} />
                        <Outlet /> {/* Renders the routed component */}
                        <Footer />
                    </div>
                </ActiveContext.Provider>
            </WishlistContext.Provider>
        </CartContext.Provider>
    );
};

// TitleUpdater component to dynamically update document title based on the current route
const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/dashboard':
                document.title = 'Dashboard | Gadget Heaven';
                break;
            case '/statistics':
                document.title = 'Statistics | Gadget Heaven';
                break;
            case '/about':
                document.title = 'About | Gadget Heaven';
                break;
            default:
                document.title = 'Gadget Heaven';
        }
    }, [location.pathname]);

    return null;
};

export default Root;
