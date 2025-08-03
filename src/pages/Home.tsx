import Navbar from "../components/Navbar";
import Home_Page_Background from "../assets/Home_Page_Background.jpg";
import Home_Page_About_Us from "../assets/Home_Page_About_Us.jpg";
import Home_Page_About_Us_2 from "../assets/Home_Page_About_Us_2.jpg";
import Join_Our_Team from "../assets/Join_Our_Team.jpg";
import Kanika_Rajput from "../assets/Kanika_Rajput.jpg";
import Shreya_Gupta from "../assets/Shreya_Gupta.jpeg";
import Pooja_Arora from "../assets/Pooja_Arora.jpg";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="flex flex-col items-center ">
            <Navbar />

            {/* Banner */}
            <div className="w-full flex justify-center top-[80px] relative">
                {/* Home Page Background */}
                <div
                    className="w-full h-[100vh] bg-cover bg-no-repeat bg-position-[center_top_-500px] absolute  max-md:bg-position-[center_top_0px]"
                    style={{ backgroundImage: `url(${Home_Page_Background})` }}
                ></div>

                <div className="w-1/2 space-y-10 flex flex-col items-center text-white top-[200px] relative max-md:w-full max-md:p-5 max-md:top-[50px]">
                    <h1 className="text-8xl text-center max-md:text-4xl">
                        Basti Ki Pathshala Foundation​
                    </h1>
                    <p className="text-xl font-bold text-center max-md:text-sm">
                        Basti Ki Pathshala Foundation​ Join us in our mission to
                        break the barriers of education in underserved
                        communities. With your support, we can provide quality
                        education to children living in slum areas, empowering
                        them with the knowledge and skills they need to build a
                        brighter future. Together, let’s make a difference. Take
                        action today and be a part of the change!​
                    </p>
                    <button
                        type="button"
                        className="w-fit p-3 bg-[#ffcd05] text-black rounded hover:cursor-pointer"
                    >
                        Donate Now
                    </button>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col items-center z-10 top-[350px] relative">
                {/* About us */}

                <div className="w-[70%] h-[650px] p-12 flex justify-between bg-white rounded shadow-2xl max-md:w-[90%] max-md:flex-col max-md:h-fit max-md:top-[150px]">
                    <img src={Home_Page_About_Us} alt="" className="h-full" />

                    <div className="w-full space-x-5 ml-20 flex max-md:ml-0">
                        <hr className="h-full border-l border-[#eeeeee] max-md:hidden" />
                        <div className="space-y-5 p-5 max-md:py-5 max-md:px-0 max-md:text-center">
                            <h1 className="text-2xl">About us</h1>
                            <h1 className="text-4xl max-md:text-3xl">
                                Lighting the Path to Change with Basti Ki
                                Pathshala Foundation
                            </h1>
                            <p className="text-[#687279]">
                                At Basti Ki Pathshala Foundation, we are more
                                than just an organization – we are a movement,
                                driven by the belief that education is the
                                cornerstone of empowerment. Established under
                                the Indian Societies Act of 1860, we stand as a
                                beacon of hope in underserved communities,
                                dedicated to breaking the chains of poverty
                                through the transformative power of learning.
                            </p>
                            <p className="text-[#687279]">
                                Join us in our quest to rewrite the narrative of
                                education, one success story at a time.
                                Together, let’s build a world where every child
                                has the opportunity to dream, to learn, and to
                                soar. Welcome to Basti Ki Pathshala Foundation –
                                where hope is our currency, and education is our
                                legacy.
                            </p>
                            <button
                                type="button"
                                className="w-fit p-3 mt-5 bg-[#ffcd05] text-black rounded hover:cursor-pointer"
                            >
                                Donate
                            </button>
                        </div>
                    </div>
                </div>

                {/* About us 2*/}
                <div className="w-[70%] h-fit space-y-5 p-8 mt-10 flex justify-between z-10 max-md:w-full max-md:flex-col max-md:top-[150px]">
                    <div className="text-black space-y-10 px-5 pr-10 max-md:px-1">
                        <div className="space-y-5">
                            <h1 className="text-4xl max-md:text-3xl">
                                Why Education is important? Breaking the Cycle
                                of Poverty
                            </h1>
                            <p className="text-[#687279]">
                                Education offers underprivileged slum children a
                                pathway out of poverty by providing them with
                                the knowledge and skills necessary to secure
                                better opportunities in the future. By
                                empowering them with education, these children
                                can break the intergenerational cycle of poverty
                                and create a brighter future for themselves and
                                their families.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <h1 className="text-4xl max-md:text-3xl">
                                Empowerment and Self-Improvement
                            </h1>
                            <p className="text-[#687279]">
                                Education empowers slum children to envision a
                                life beyond their current circumstances. It
                                instills in them a sense of self-worth and
                                confidence, enabling them to dream big and
                                pursue their aspirations. Through education,
                                these children gain the tools to advocate for
                                themselves, make informed decisions, and strive
                                for a better quality of life.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <h1 className="text-4xl max-md:text-3xl">
                                Building Resilience and Hope
                            </h1>
                            <p className="text-[#687279]">
                                Education offers slum children a sense of hope
                                and resilience in the face of adversity. It
                                equips them with the skills to overcome
                                challenges and navigate the complexities of
                                their environment. By investing in their
                                education, we provide these children with a
                                beacon of hope, showing them that a brighter
                                future is possible, no matter where they come
                                from.
                            </p>
                        </div>
                    </div>
                    <img src={Home_Page_About_Us_2} alt="" className="h-full" />
                </div>

                {/* JOIN OUR TEAM */}
                <div className="w-full h-[780px] flex bg-[#fbf6ed] max-md:flex-col max-md:h-fit">
                    <img
                        src={Join_Our_Team}
                        alt=""
                        className="w-1/2 h-full object-cover max-md:w-full max-md:h-1/2"
                    />

                    <div className="w-1/2 space-y-10 p-10 pr-[300px] max-md:w-full max-md:p-5 max-md:text-center">
                        <div className="space-y-5 max-md:mt-5">
                            <h1 className="text-6xl max-md:text-4xl">
                                JOIN OUR
                            </h1>
                            <h1 className="text-6xl max-md:text-4xl">TEAM</h1>
                        </div>

                        <p className="text-[#687279]">
                            At Basti Ki Pathshala Foundation, we’re not just
                            building a team; we’re assembling a force for
                            change. As we continue our mission to break barriers
                            and empower communities through education, we invite
                            passionate individuals to join us in making a
                            tangible difference in the lives of underserved
                            children.
                        </p>

                        <p className="text-[#687279]">
                            Whether you’re a seasoned educator, a community
                            organizer, or simply someone with a heart for social
                            impact, there’s a place for you in our team.
                            Together, we’ll collaborate, innovate, and inspire,
                            working towards a future where every child has the
                            opportunity to thrive.
                        </p>

                        <p className="text-[#687279]">
                            Join us in this rewarding journey of transformation.
                            Together, let’s pave the way for brighter tomorrows
                            and empower futures, one child at a time.
                        </p>

                        <button
                            type="button"
                            className="w-fit p-3 bg-[#ffcd05] text-black rounded hover:cursor-pointer"
                        >
                            Donate Now
                        </button>
                    </div>
                </div>

                {/* Intern Insights */}
                <div className="w-full mt-20">
                    <div className="space-y-5 text-center">
                        <h1 className="text-4xl max-md:text-3xl">
                            Intern Insights
                        </h1>
                        <p className="text-[#687279]">
                            Hear from Our Valued Team Members
                        </p>
                    </div>

                    {/* Intern Insights Cards */}
                    <div className="h-fit mt-10 space-x-8 flex justify-center max-md:p-5 max-md:flex-col max-sm:space-y-8">
                        {/* Kanika_Rajput */}
                        <div className="w-[400px] space-y-5 p-10 flex flex-col items-center bg-[#fbf6ed] rounded max-md:w-full">
                            <p className="text-[#687279] text-center">
                                As an intern at Basti Ki Pathshala Foundation,
                                I've been truly inspired by the dedication of
                                the team and the impact we're making in
                                underserved communities. It's been an
                                eye-opening experience to witness firsthand the
                                transformation that education can bring to the
                                lives of children living in slum areas. I'm
                                grateful for the opportunity to contribute to
                                such meaningful work and to be a part of this
                                incredible journey.
                            </p>

                            <img
                                src={Kanika_Rajput}
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-full"
                            />
                            <h1 className="text-2xl">Kanika Rajput</h1>
                        </div>

                        {/* Shreya Gupta */}
                        <div className="w-[400px] space-y-5 p-10 flex flex-col items-center bg-[#fbf6ed] rounded max-md:w-full">
                            <p className="text-[#687279] text-center">
                                Joining Basti Ki Pathshala Foundation as an
                                intern has been an enriching experience that has
                                deepened my understanding of the importance of
                                education in breaking the cycle of poverty. The
                                opportunity to work closely with children from
                                slum areas and witness their enthusiasm for
                                learning has been incredibly inspiring. The
                                supportive environment and mentorship provided
                                by the team have helped me develop valuable
                                skills and perspective that will stay with me
                                long after my internship ends. I'm grateful for
                                the chance to contribute to such a meaningful
                                cause.
                            </p>

                            <img
                                src={Shreya_Gupta}
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-full"
                            />
                            <h1 className="text-2xl">Shreya Gupta</h1>
                        </div>

                        {/* Pooja Arora */}
                        <div className="w-[400px] space-y-5 p-10 flex flex-col items-center bg-[#fbf6ed] rounded max-md:w-full">
                            <p className="text-[#687279] text-center">
                                My time as an intern at Basti Ki Pathshala
                                Foundation has been nothing short of
                                transformative. From facilitating educational
                                workshops to engaging with local communities,
                                every moment has been filled with learning and
                                growth. The passion and commitment of the team
                                are palpable, and it's truly rewarding to see
                                the positive changes we're making in the lives
                                of marginalized children. I'm proud to be a part
                                of an organization that is making a real
                                difference in the world.
                            </p>

                            <img
                                src={Pooja_Arora}
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-full"
                            />
                            <h1 className="text-2xl">Pooja Arora</h1>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Home;
