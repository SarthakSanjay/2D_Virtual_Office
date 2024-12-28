import { useState } from "react"
import { BsEmojiSmileFill } from "react-icons/bs"
import { FaChevronUp, FaDoorOpen, FaVideoSlash } from "react-icons/fa"
import { IoMdMicOff } from "react-icons/io"
import { IoChatbubbles } from "react-icons/io5"
import { MdEdit, MdScreenShare, MdSupervisorAccount } from "react-icons/md"
import { VscAccount } from "react-icons/vsc"
import MainMenuDropdown from "./Dropdown/MainMenuDropdown"
import ProfileMenuDropdown from "./Dropdown/ProfileMenuDropdown"

const BottomBar = () => {
    const [toggleMainMenuDD, setToggleMainMenuDD] = useState<boolean>(false)
    const [toggleProfileMenuDD, setToggleProfileMenuDD] = useState<boolean>(false)

    const handleMainMenuToggle = () => {
        setToggleMainMenuDD(!toggleMainMenuDD);
        if (toggleProfileMenuDD) setToggleProfileMenuDD(false);
    };

    const handleProfileMenuToggle = () => {
        setToggleProfileMenuDD(!toggleProfileMenuDD);
        if (toggleMainMenuDD) setToggleMainMenuDD(false);
    };
    return (
        <div className='h-12 w-full bg-customDarkGreen flex justify-between items-center relative'>
            {toggleMainMenuDD && <MainMenuDropdown />}
            {toggleProfileMenuDD && <ProfileMenuDropdown />}
            {/* left side */}
            <div className="h-12 w-max px-2 flex items-center gap-2">
                {/* main menu button */}
                <button className="h-10 w-10 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg"
                    onClick={handleMainMenuToggle}
                >
                    VQ
                </button>
                {/* personal setting & edit */}
                <div className="flex h-10 w-max px-2">
                    <button className="h-10 w-14 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen border-r border-customDarkGreen grid place-content-center rounded-l-lg">
                        <VscAccount />
                    </button>
                    <button className="h-10 w-44 px-2 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen flex flex-col  rounded-r-lg relative"
                        onClick={handleProfileMenuToggle}>
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-sm">username</h1>
                            {/* edit */}
                            <div className="text-[15px]">
                                <MdEdit />
                            </div>
                        </div>
                        <h1 className="text-sm opacity-50">available</h1>
                        <div className="h-4 w-4 border-[3px] border-customDarkGreen bg-emerald-300 absolute bottom-0 right-0 rounded-full"></div>
                    </button>

                </div>
                {/* mic button */}
                <div className="flex h-9 w-max items-center text-[#F5004F] bg-black rounded-full">
                    <button className="h-full w-10 bg-black text-[#F5004F] hover:bg-[#F5004F]/50 grid place-content-center rounded-l-full text-lg">
                        <IoMdMicOff />
                    </button>
                    |
                    <button className="h-full w-8  px-2 bg-black text-[#F5004F]  hover:bg-[#F5004F]/50 rounded-r-full grid place-content-center text-sm">

                        <FaChevronUp />
                    </button>

                </div>
                {/* video button */}

                <div className="flex h-9 w-max items-center text-[#F5004F] bg-black rounded-full">
                    <button className="h-full w-10 bg-black text-[#F5004F] hover:bg-[#F5004F]/50 grid place-content-center rounded-l-full text-lg">
                        <FaVideoSlash />
                    </button>
                    |
                    <button className="h-full w-8  px-2 bg-black text-[#F5004F]  hover:bg-[#F5004F]/50 rounded-r-full grid place-content-center text-sm">

                        <FaChevronUp />
                    </button>

                </div>

                {/* share screen */}
                <button className="h-8 w-8 bg-customLightGreen/50 text-customTextGreen hover:bg-customLightGreen/70  grid place-content-center rounded-full">
                    <MdScreenShare />
                </button>

                <button className="h-8 w-8 bg-customLightGreen/50 text-customTextGreen hover:bg-customLightGreen/70  grid place-content-center rounded-full">
                    <BsEmojiSmileFill />
                </button>

            </div>
            {/* right */}
            <div className="h-12 w-max px-2 flex items-center gap-2">


                <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <IoChatbubbles />
                </button>
                <button className="h-9 w-28 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen flex justify-center items-center text-lg gap-2 rounded-lg">
                    <div className="text-[25px]">
                        <MdSupervisorAccount />
                    </div>
                    <div className="h-[10px] w-[10px]  rounded-full bg-emerald-300"></div>
                    <h1>1</h1>
                </button>

                <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-[#F5004F] grid place-content-center rounded-lg">
                    <FaDoorOpen />
                </button>
            </div>


        </div>
    )
}

export default BottomBar