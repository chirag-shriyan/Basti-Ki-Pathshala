import Navbar from "../components/Navbar";
import Home_Page_Background from "../assets/Home_Page_Background.jpg";
import { useState, type ChangeEvent } from "react";

function Volunteer() {
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleNumber(e: ChangeEvent<HTMLInputElement>) {
        if (/^\d{0,10}$/.test(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    }
    return (
        <div>
            <Navbar />
            {/* Banner */}
            <div className="w-full flex justify-center top-[80px] relative">
                {/* Black tint */}
                <div className="w-full h-[80vh] bg-black opacity-30 absolute max-md:h-[80vh] z-10"></div>

                {/* Home Page Background */}
                <div
                    className="w-full h-[80vh] bg-cover bg-no-repeat bg-position-[center_top_-700px] absolute max-md:bg-position-[center_top_0px] max-md:h-[80vh]"
                    style={{ backgroundImage: `url(${Home_Page_Background})` }}
                ></div>

                <div className="h-[80vh] space-y-10 flex flex-col items-center justify-center text-white relative -top-20 max-md:w-full max-md:h-[80vh] max-md:px-2 max-md:justify-center max-md:top-[20px] z-20">
                    <h1 className="text-8xl text-center max-md:text-4xl">
                        Volunteer Recruitment
                    </h1>
                    <p className="w-1/2 text-center max-md:w-full">
                        Basti Ki Pathshala Foundation is on a mission to provide
                        free education and a brighter future to underprivileged
                        children living in slum and marginalized communities. We
                        are looking for passionate volunteers who believe that
                        every child deserves to learn, dream, and grow. Whether
                        you’re a student, working professional, homemaker, or
                        retiree — your time and skills can make a real
                        difference!
                    </p>
                </div>
            </div>

            <div className="w-full h-fit pb-10 flex flex-col items-center -top-[200px] relative max-md:top-[100px] z-20">
                <div className="w-[70%] h-[650px] space-y-10 p-12  flex flex-col items-center bg-white rounded shadow-2xl max-md:w-[90%] max-md:h-fit max-md:p-8 max-md:flex-col  max-md:top-[150px]">
                    <h1 className="w-[70%] text-4xl text-center font-bold max-md:w-full max-md:text-2xl">
                        Volunteer Recruitment form
                    </h1>

                    <form action="" className="w-[50%] space-y-5 max-md:w-full">
                        <div className="w-full">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="w-full p-2 text-[#687279] border border-[#687279] rounded"
                                placeholder="Your fullname"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 text-[#687279] border border-[#687279] rounded"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="text"
                                value={phoneNumber}
                                onChange={handleNumber}
                                minLength={10}
                                maxLength={10}
                                className="w-full p-2 text-[#687279] border border-[#687279] rounded"
                                placeholder="Your phone number"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 mt-5 bg-[#ffcd05] text-black rounded hover:cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Volunteer;
