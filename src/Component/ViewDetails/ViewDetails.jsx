import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { CartContext, WishlistContext } from '../Root/Root';
import { toast } from 'react-toastify';

const ViewDetails = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { wishlistItems, setWishlistItems } = useContext(WishlistContext);

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);

    const gadget = data.find(gadget => gadget.product_id === id);

    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        // Check if the item is already in the wishlist when component mounts
        const itemExists = wishlistItems.some(wishlistItem => wishlistItem.gadget.product_id === gadget.product_id);
        setIsInWishlist(itemExists);
    }, [wishlistItems, gadget]);

    const addItemToCart = (item) => {
        const itemExists = cartItems.some(cartItem => cartItem.gadget.product_id === item.gadget.product_id);
        if (!itemExists) {
            setCartItems([...cartItems, item]);
            toast.success("Item added to cart!");
        } else {
            toast.warning("This item is already in the cart.");
        }
    };

    const addItemToWishlist = (item) => {
        const itemExists = wishlistItems.some(wishlistItem => wishlistItem.gadget.product_id === item.gadget.product_id);
        if (!itemExists) {
            setWishlistItems([...wishlistItems, item]);
            toast.success("Item added to wishlist!");
            setIsInWishlist(true); // Disable the button after adding to wishlist
        } else {
            toast.warning("This item is already in the wishlist.");
        }
    };

    const {
        product_name,
        product_image,
        price,
        description,
        specification,
        availability,
        rating,
    } = gadget;

    return (
        <div className="">
            <div className="bg-purple-600 pb-64">
                <div className="w-4/5 text-center mx-auto ">
                    <br />
                    <h1 className="text-5xl font-bold text-white">Product Details</h1>
                    <p className="pt-4 text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="relative flex justify-center pb-64">
                <div className="w-3/5 mx-auto my-10 p-8 border-2 border-purple-600 rounded-lg shadow-lg bg-white absolute -top-64">
                    <div className="flex flex-col md:flex-row">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-full md:w-1/2 h-80 bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={product_image}
                                alt={product_name}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
                            <h1 className="text-2xl font-bold">{product_name}</h1>
                            <p className="text-xl font-semibold mt-2">Price: ${price}</p>

                            {/* Availability */}
                            <p className={`mt-2 ${availability ? 'text-green-500' : 'text-red-500'} font-semibold`}>
                                {availability ? 'In Stock' : 'Out of Stock'}
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-gray-600">{description}</p>

                            {/* Specifications */}
                            <div className="mt-4">
                                <h3 className="font-bold">Specifications:</h3>
                                <ul className="list-decimal ml-5 mt-1 text-gray-600">
                                    {specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mt-4">
                                <p className="font-semibold mr-2">Rating:</p>
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.156 6.606a1 1 0 00.95.69h6.933c.969 0 1.371 1.24.588 1.81l-5.608 4.073a1 1 0 00-.364 1.118l2.156 6.606c.3.921-.755 1.688-1.54 1.118l-5.608-4.073a1 1 0 00-1.176 0l-5.608 4.073c-.784.57-1.838-.197-1.54-1.118l2.156-6.606a1 1 0 00-.364-1.118L2.38 12.033c-.783-.57-.38-1.81.588-1.81h6.933a1 1 0 00.95-.69l2.156-6.606z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">{rating}</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex mt-6">
                                <button onClick={() => addItemToCart({ gadget })} className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-full mr-4 hover:bg-purple-700">
                                    Add To Cart
                                </button>
                                <button
                                    onClick={() => addItemToWishlist({ gadget })}
                                    disabled={isInWishlist}
                                    className={`px-4 py-2 font-semibold rounded-full mr-4 ${isInWishlist ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 text-white'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 5.121a3 3 0 014.242 0l.707.707.707-.707a3 3 0 014.242 4.242l-5.657 5.657a2.495 2.495 0 01-3.536 0L5.12 9.364a3 3 0 010-4.243z" />
                                    </svg>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
