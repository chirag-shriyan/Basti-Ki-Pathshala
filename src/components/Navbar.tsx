import Logo from "../assets/logo.png";
import { Link } from "react-router";

function Navbar() {
    return (
        <div className="w-full h-[80px] flex items-center justify-around bg-amber-50 top-0 fixed z-50">
            <div>
                <img src={Logo} alt="" className="w-16 h-16" />
            </div>
            <div className="space-x-5">
                <Link
                    to={"/"}
                    className="font-bold text-[#0000009f] transition hover:text-black"
                >
                    Home
                </Link>
                <Link
                    to={"/about"}
                    className="font-bold text-[#0000009f] transition hover:text-black"
                >
                    About us
                </Link>
                <Link
                    to={"/volunteer"}
                    className="font-bold text-[#0000009f] transition hover:text-black"
                >
                    Volunteer
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
