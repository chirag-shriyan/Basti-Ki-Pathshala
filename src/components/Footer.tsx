function Footer() {
    return (
        <div className={`w-full mt-[100px] z-10`}>
            <div className="w-full h-[400px] space-x-20 flex justify-center items-center bg-black max-md:h-fit max-md:space-y-10 max-md:max-md:space-x-0 max-md:py-10 max-md:flex-col">
                <div className="space-y-5 text-white text-center">
                    <h1 className="text-6xl text-[#ffcd05]">31,245</h1>
                    <p className="text-2xl">Life Changed</p>
                </div>

                <div className="space-y-5 text-white text-center">
                    <h1 className="text-6xl text-[#ffcd05]">28,976</h1>
                    <p className="text-2xl">Meals Served</p>
                </div>

                <div className="space-y-5 text-white text-center">
                    <h1 className="text-6xl text-[#ffcd05]">19,854</h1>
                    <p className="text-2xl">Interns</p>
                </div>

                <div className="space-y-5 text-white text-center">
                    <h1 className="text-6xl text-[#ffcd05]">10,989</h1>
                    <p className="text-2xl">Supporters</p>
                </div>
            </div>

            <div className="w-full h-[70px] flex justify-center items-center bg-[#111518] text-[#86919a] max-md:text-sm">
                Copyright © 2025 - Basti Ki Pathshala Foundation
            </div>
        </div>
    );
}

export default Footer;
