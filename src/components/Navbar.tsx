import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    function handleLink() {
        window.scrollTo({ top: 0 });
        setToggleMenu(false);
    }

    useEffect(() => {
        console.log(toggleMenu);
    }, [toggleMenu]);
    return (
        <div className="w-full h-[80px] flex items-center justify-around bg-amber-50 top-0 fixed max-md:justify-between z-50">
            <Link to={"/"} onClick={handleLink}>
                <img src={Logo} alt="" className="w-16 h-16 max-md:ml-2" />
            </Link>
            <div className="space-x-5 max-md:hidden">
                <Link
                    to={"/"}
                    onClick={handleLink}
                    className="font-bold text-[#0000009f] transition hover:text-black"
                >
                    Home
                </Link>
                <Link
                    to={"/about"}
                    onClick={handleLink}
                    className="font-bold text-[#0000009f] transition hover:text-black"
                >
                    About us
                </Link>
                <Link
                    to={"/volunteer"}
                    onClick={handleLink}
                    className="font-bold text-[#0000009f] transition hover:text-black"
                >
                    Volunteer
                </Link>
            </div>

            {/* Dropdown menu button*/}
            <div className="hidden mr-5 cursor-pointer max-md:flex">
                <svg
                    className="ct-icon"
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    aria-hidden="true"
                    data-type="type-1"
                    onClick={() =>
                        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
                    }
                >
                    <rect y="0.00" width="18" height="1.7" rx="1"></rect>
                    <rect y="6.15" width="18" height="1.7" rx="1"></rect>
                    <rect y="12.3" width="18" height="1.7" rx="1"></rect>
                </svg>
            </div>

            {/* Dropdown menu */}
            <div
                className={`${
                    toggleMenu ? "flex" : "hidden"
                } w-full h-fit space-y-5 p-3 flex-col bg-amber-50 absolute top-[80px]`}
            >
                <Link
                    to={"/"}
                    onClick={handleLink}
                    className="w-fit font-bold text-[#0000009f] transition hover:text-black"
                >
                    Home
                </Link>
                <Link
                    to={"/about"}
                    onClick={handleLink}
                    className="w-fit font-bold text-[#0000009f] transition hover:text-black"
                >
                    About us
                </Link>
                <Link
                    to={"/volunteer"}
                    onClick={handleLink}
                    className="w-fit font-bold text-[#0000009f] transition hover:text-black"
                >
                    Volunteer
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
