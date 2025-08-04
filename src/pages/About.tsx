import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Home_Page_Background from "../assets/Home_Page_Background.jpg";
import About_Us_1 from "../assets/About_Us_1.jpg";
import About_Us_2 from "../assets/About_Us_2.jpg";
import Footer from "../components/Footer";

function About() {
    return (
        <div className="flex flex-col items-center">
            <Navbar />
            {/* Banner */}
            <div className="w-full flex justify-center top-[80px] relative">
                {/* Black tint */}
                <div className="w-full h-[80vh] bg-black opacity-30 absolute max-md:h-[50vh] z-10"></div>

                {/* Home Page Background */}
                <div
                    className="w-full h-[80vh] bg-cover bg-no-repeat bg-position-[center_top_-700px] absolute max-md:bg-position-[center_top_0px] max-md:h-[50vh]"
                    style={{ backgroundImage: `url(${Home_Page_Background})` }}
                ></div>

                <div className="h-[80vh] space-y-10 flex flex-col items-center justify-center text-white relative max-md:w-full max-md:h-[50vh] max-md:p-5 max-md:justify-center max-md:top-[0px] z-20">
                    <h1 className="text-8xl text-center max-md:text-4xl">
                        About Us
                    </h1>

                    <div className="space-x-2 flex items-center text-sm font-semibold">
                        {" "}
                        <Link to={"/"}>HOME</Link>{" "}
                        <svg
                            className="separator flex items-center h-full"
                            fill="currentColor"
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M2,6.9L4.8,4L2,1.1L2.6,0l4,4l-4,4L2,6.9z"></path>
                        </svg>
                        <p>ABOUT US</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col items-center top-[80px] relative z-20">
                {/* About us */}
                <div className=" space-y-5 py-20 flex flex-col items-center bg-[#FBF6ED] ">
                    <h1 className="text-4xl text-center font-bold max-md:text-3xl">
                        We Work Together
                    </h1>
                    <p className="w-1/2 text-[#687279] text-center max-md:w-full max-md:px-5">
                        At Basti Ki Pathshala Foundation, collaboration is at
                        the heart of everything we do. Under the banner of ‘We
                        Work Together,’ we embrace the power of unity,
                        recognizing that real change comes from collective
                        action. Our dedicated team, passionate volunteers,
                        generous donors, and supportive community members all
                        play integral roles in our mission to break the barriers
                        of education in underserved communities. Together, we
                        strive towards a common goal: to empower every child
                        with the opportunity to thrive. Through shared vision,
                        shared values, and shared effort, we pave the way for a
                        brighter, more inclusive future for all.
                    </p>
                </div>

                {/* About us 1*/}
                <div className="w-[70%] h-fit space-y-5 p-8 mt-10 flex justify-between max-md:w-full max-md:flex-col max-md:top-[150px] z-10">
                    <div className="text-black space-y-10 px-5 pr-10 max-md:px-1">
                        <div className="space-y-10">
                            <h1 className="text-4xl font-bold max-md:text-3xl">
                                Our Mission: A succinct statement outlining the
                                core purpose and goals of your organization
                            </h1>
                            <p className="text-[#687279]">
                                At Basti Ki Pathshala Foundation, our mission is
                                clear: to break the barriers of education in
                                underserved communities. We are dedicated to
                                providing quality education to children living
                                in slum areas, ensuring that every child has the
                                opportunity to thrive and succeed. Our goal is
                                to create a nurturing learning environment where
                                every child can access the tools, resources, and
                                support they need to unlock their full
                                potential. Through innovative teaching methods,
                                community engagement, and strategic
                                partnerships, we empower children with the
                                knowledge and skills necessary to build a
                                brighter future for themselves and their
                                communities. Our mission extends beyond the
                                classroom as we work tirelessly to bridge the
                                educational gap and foster long-term,
                                sustainable change in the lives of marginalized
                                families. Together, we strive to rewrite the
                                narrative of education, one child at a time.
                            </p>
                        </div>
                    </div>

                    <img
                        src={About_Us_1}
                        alt=""
                        className="w-1/2 rounded max-md:w-full"
                    />
                </div>

                {/* About us 2*/}
                <div className="w-[70%] h-fit space-y-5 p-8 flex justify-between z-10 max-md:w-full max-md:flex-col max-md:top-[150px]">
                    <img
                        src={About_Us_2}
                        alt=""
                        className="w-1/2 rounded max-md:hidden"
                    />

                    <div className="text-black space-y-10 px-5 pl-10 max-md:px-1">
                        <div className="space-y-10">
                            <h1 className="text-4xl font-bold max-md:text-3xl">
                                Our Story
                            </h1>
                            {/* Image for mobile */}
                            <img
                                src={About_Us_2}
                                alt=""
                                className="hidden w-full rounded max-md:block"
                            />

                            <p className="text-[#687279]">
                                Basti Ki Pathshala Foundation began with a
                                simple yet powerful vision: to transform the
                                lives of children living in slum areas through
                                education. Founded under the Indian Societies
                                Act of 1860, our journey started with a
                                deep-seated belief in the potential of every
                                child, regardless of their circumstances.
                            </p>

                            <p className="text-[#687279]">
                                It all began when Sunita, inspired by their own
                                experiences and driven by a passion for social
                                justice, embarked on a mission to address the
                                educational inequalities prevalent in
                                underserved communities. Armed with
                                determination and fueled by compassion, they
                                rallied a team of like-minded individuals who
                                shared their vision of a brighter, more
                                equitable future.
                            </p>

                            <p className="text-[#687279]">
                                From humble beginnings, our organization has
                                grown into a beacon of hope, touching the lives
                                of countless children and families along the
                                way. Each milestone achieved, each barrier
                                overcome, has only strengthened our resolve to
                                continue our mission of empowerment and
                                transformation.
                            </p>

                            <p className="text-[#687279]">
                                Through the years, we’ve witnessed the
                                transformative power of education firsthand.
                                We’ve seen shy, uncertain children blossom into
                                confident, capable individuals, equipped with
                                the knowledge and skills to pursue their dreams.
                                We’ve seen communities come together, united by
                                a shared commitment to the betterment of their
                                children’s future.
                            </p>

                            <p className="text-[#687279]">
                                As we reflect on our journey, we are filled with
                                gratitude for the unwavering support of our
                                volunteers, donors, partners, and the
                                communities we serve. Together, we have achieved
                                so much, yet we know that our work is far from
                                over.
                            </p>

                            <p className="text-[#687279]">
                                Our story is still being written, with each
                                chapter filled with hope, resilience, and
                                determination. As we look towards the future, we
                                remain steadfast in our mission to break down
                                barriers, uplift communities, and create a world
                                where every child has the opportunity to thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
