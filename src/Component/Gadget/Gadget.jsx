import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const { product_id, product_name, product_image, price } = gadget;

    return (
        <div className="bg-white p-6 rounded-2xl">
            <figure className=' w-full h-44'>
                <img
                    src={product_image}
                    className='rounded-2xl w-full h-full object-cover'
                    alt={product_name} />
            </figure>
            <br />
            <h3 className="font-semibold text-xl">{product_name}</h3>
            <h4 className="font-semibold text-gray-600">Price: ${price}</h4>
            <br />
            <Link to={`/gadgets/${product_id}`}><button className="btn btn-outline btn-primary font-semibold text-lg rounded-3xl">View Details</button></Link>
        </div>
    );
};

export default Gadget;