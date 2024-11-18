
const Footer = () => {
    return (
        <footer className="bg-white p-10">
            <div className="text-center space-y-3">
                <h2 className="font-bold text-4xl">
                    Gadget Heaven
                </h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <br />
            <div className="border-1 border-gray-300 border-t w-4/5 mx-auto">
            </div>
            <br />
            <div className="flex justify-between w-3/5 mx-auto text-lg text-gray-600">
                <nav className="flex flex-col">
                    <h6 className="font-bold text-black pb-2">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="font-bold text-black pb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="font-bold text-black pb-2">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;