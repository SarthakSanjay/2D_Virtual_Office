const LandingPage = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-b from-gray-100 to-gray-200">
            {/* Hero Section */}
            <div className="flex flex-col h-full bg-gradient-to-r from-[#c21500] to-[#ffc500]">
                {/* Navbar */}
                <div className="h-16 w-full flex justify-between items-center px-8 bg-black/40">
                    <div className="text-white text-lg font-bold">Virtual Office</div>
                    <div className="flex space-x-4">

                        <button className="px-4 py-2 bg-[#ffc500] text-black rounded-lg hover:bg-black hover:text-[#ffc500]">
                            Get Started
                        </button>                        <button className="px-4 py-2  bg-[#c21500] text-white rounded-lg hover:bg-blue-600">
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Parent Div */}
                <div className="flex flex-grow items-center justify-center border-0 border-red-500 space-x-8 px-8">
                    {/* 1st Div: Text Section */}
                    <div className="h-full w-1/2 flex flex-col items-center justify-center text-center border-0 border-black">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Make your virtual office instantly
                        </h1>
                        <button className="px-6 py-3 bg-black/40 text-white rounded-lg hover:bg-blue-600">
                            Get Started
                        </button>
                    </div>

                    {/* 2nd Div: Video Section */}
                    <div className="h-full w-1/2 flex items-center justify-center">
                        <video
                            className="rounded-lg shadow-lg"
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            autoPlay
                            loop
                            muted
                            controls={false}
                            width="400"
                            height="400"
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
