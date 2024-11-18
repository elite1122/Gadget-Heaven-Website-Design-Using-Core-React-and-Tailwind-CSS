import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext, WishlistContext } from '../Root/Root';
import { toast } from 'react-toastify';


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart');
    const { cartItems, setCartItems } = useContext(CartContext);
    const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const addItemToCart = (item) => {
        const itemExists = cartItems.some(cartItem => cartItem.gadget.product_id === item.gadget.product_id);
        if (!itemExists) {
            setCartItems([...cartItems, item]);
            handleRemoveFromWishlist(item.gadget.product_id);
            toast.success("Item added to cart!");
        } else {
            toast.warning("This item is already in the cart.");
        }
    };

    const handleSortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.gadget.price - a.gadget.price);
        setCartItems(sortedItems);
    };

    // handleRemoveFromCart Function
    const handleRemoveFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.gadget.product_id !== productId);
        const productToRemove = cartItems.find(item => item.gadget.product_id === productId);
        setCartItems(updatedCartItems);
        toast.info(`${productToRemove.gadget.product_name} removed from Cart.`);
    };

    // handleRemoveFromWishlist Function
    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlistItems = wishlistItems.filter(item => item.gadget.product_id !== productId);
        const productToRemove = wishlistItems.find(item => item.gadget.product_id === productId);
        setWishlistItems(updatedWishlistItems);
        toast.info(`${productToRemove.gadget.product_name} removed from Wishlist.`);
    };

    // getTotalCost Function
    const getTotalCost = () => {
        return cartItems.reduce((total, item) => total + item.gadget.price, 0);
    };

    // handlePurchase Function
    const handlePurchase = () => {
        if (cartItems.length > 0) {
            setIsModalOpen(true); // Open modal
        }
    };

    // closeModal Function
    const closeModal = () => {
        setIsModalOpen(false);
        setCartItems([]); // Clear cart
        navigate('/'); // Redirect to home
    };

    return (
        <div className="bg-gray-100">
            <header className="bg-purple-600 text-white text-center py-8 shadow-lg">
                <h2 className="text-3xl font-bold text-white pb-2">Dashboard</h2>
                <p className="text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex justify-center mt-4 space-x-4">

                    {/* Cart Button */}
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`${activeTab === 'cart' ? 'btn btn-info font-bold' : 'btn btn-outline btn-info font-bold'} text-white py-2 px-6 rounded-full focus:outline-none`}
                    >
                        Cart
                    </button>

                    {/* Wishlist button */}
                    <button
                        onClick={() => setActiveTab('wishlist')}
                        className={`${activeTab === 'wishlist' ? 'btn btn-info font-bold' : 'btn btn-outline btn-info font-semibold'} text-white py-2 px-6 rounded-full focus:outline-none`}
                    >
                        Wishlist
                    </button>
                </div>
            </header>

            {activeTab === 'cart' ? (
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Cart</h3>
                        <div className="flex items-center gap-3">
                            <p className="text-lg font-semibold">Total cost: ${getTotalCost()}</p>
                            <button onClick={handleSortByPrice} className="bg-purple-600 text-white py-2 px-4 rounded-full">Sort by Price</button>
                            <button
                                onClick={handlePurchase}
                                className="bg-purple-600 text-white py-2 px-4 rounded-full"
                                disabled={cartItems.length === 0}
                            >
                                Purchase
                            </button>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.gadget.product_id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow gap-5">
                                <div className="avatar">
                                    <div className='w-24 rounded-xl'>
                                        <img src={item.gadget.product_image} alt="" className='' />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className="flex-grow">
                                        <h4 className="text-lg font-semibold">{item.gadget.product_name}</h4>
                                        <p className="text-gray-600">{item.gadget.description}</p>
                                        <p className="text-purple-700 font-bold mt-2">Price: ${item.gadget.price}</p>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleRemoveFromCart(item.gadget.product_id)}
                                        className="text-red-500 text-2xl font-bold ml-4" // Add margin-left for some spacing
                                    >
                                        ✕
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
                    <div className="space-y-4">
                        {wishlistItems.map(item => (
                            <div key={item.gadget.product_id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow gap-5">
                                <div className="avatar">
                                    <div className='w-24 rounded-xl'>
                                        <img src={item.gadget.product_image} alt="" className='' />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className="flex-grow">
                                        <h4 className="text-lg font-semibold">{item.gadget.product_name}</h4>
                                        <p className="text-gray-600">{item.gadget.description}</p>
                                        <p className="text-purple-700 font-bold mt-2 mb-2">Price: ${item.gadget.price}</p>
                                        <button onClick={() => addItemToCart(item)} className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-full mr-4 hover:bg-purple-700">
                                            Add To Cart
                                        </button>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item.gadget.product_id)}
                                        className="text-red-500 text-2xl font-bold ml-4" // Add margin-left for some spacing
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-3xl shadow-lg max-w-md w-full text-center">
                        {/* image */}
                        <div className="flex justify-center items-center mb-4">
                            <img src="/Group.png" alt="Success Icon" />
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-black mb-2 border-b-2 pb-3">Payment Successfully</h2>

                        {/* Message and Total */}
                        <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
                        <p className="text-gray-600 font-medium mb-6">Total: ${getTotalCost().toFixed(2)}</p>

                        {/* Close Button */}
                        <button onClick={closeModal} className="bg-gray-200 text-black py-2 px-6 rounded-full w-full font-semibold">
                            Close
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Dashboard;
