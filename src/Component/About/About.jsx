const About = () => {
    return (
        <div className="container mx-auto p-8 bg-purple-700 rounded-lg shadow-lg">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-center text-white mb-6">About Gadget Heaven</h1>
            <p className="text-lg text-center text-white mb-10 px-4 md:px-20">
                Welcome to Gadget Heaven, your premier destination for the most innovative and inspiring tech products on the market. We’re here to help you discover gadgets that fit your lifestyle, boost your productivity, and spark your creativity.
            </p>
            
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-purple-600 p-6 rounded-lg shadow">
                    <h2 className="text-3xl font-semibold text-white mb-4">Our Vision</h2>
                    <p className="text-white text-base">
                        At Gadget Heaven, we believe in a future where technology is seamlessly integrated into our lives, making everyday experiences more enjoyable and efficient. Our vision is to bridge the gap between the latest innovations and people, enabling everyone to experience the power of technology.
                    </p>
                </div>
                
                <div className="bg-purple-600 p-6 rounded-lg shadow">
                    <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
                    <p className="text-white text-base">
                        We are committed to providing an unparalleled shopping experience by offering a carefully curated selection of the finest tech products. Whether you’re a tech enthusiast or a casual consumer, our mission is to connect you with gadgets that enhance your life.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="mt-12">
                <h2 className="text-3xl font-semibold text-white text-center mb-6">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-purple-600 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-white mb-2">Innovation</h3>
                        <p className="text-white">We continuously seek out the latest advancements to bring you the most cutting-edge technology and tools that make a real impact.</p>
                    </div>
                    <div className="bg-purple-600 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-white mb-2">Integrity</h3>
                        <p className="text-white">Our commitment to quality and ethical practices ensures that every product we offer meets the highest standards.</p>
                    </div>
                    <div className="bg-purple-600 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-white mb-2">Customer Satisfaction</h3>
                        <p className="text-white">We put our customers first, offering dedicated support to make your experience with Gadget Heaven truly remarkable.</p>
                    </div>
                </div>
            </div>

            {/* Join the Community Section */}
            <div className="mt-12 bg-purple-600 text-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-semibold mb-4">Join the Gadget Heaven Community</h2>
                <p className="text-lg mb-6">
                    At Gadget Heaven, we’re more than just a tech store – we’re a community of innovation enthusiasts. Follow us on social media for the latest updates on cutting-edge gadgets and exclusive promotions!
                </p>
                <div className="flex justify-center space-x-6">
                    {/* Icons for social media or other community links can be added here */}
                    <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-200">Follow Us</button>
                    <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-200">Join Newsletter</button>
                </div>
            </div>
        </div>
    );
};

export default About;
