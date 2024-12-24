import { FaLink, FaLock } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdMore } from "react-icons/io"
import { IoGrid } from "react-icons/io5"
import { PiDeskFill } from "react-icons/pi"

const TopBar = () => {
    return (
        <div className="h-10 w-full text-lg bg-customLightGreen flex justify-between items-center">
            <div className="h-full w-max px-2 flex justify-center items-center">
                <button className="h-8 w-8 text-customDarkGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <FaLink />
                </button>
                <button className="h-8 w-8 text-customDarkGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <FaLock />
                </button>
            </div>
            <div className="flex h-10 w-max px-2 items-center">
                <div className="h-8 w-8 text-customDarkGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg ">
                    <FaLocationDot />
                </div>
                <h1 className="text-customDarkGreen">current location</h1>
            </div>
            <div className="h-10 w-max px-2 flex items-center gap-2">
                <button className="h-8 w-8 text-customDarkGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg border-customDarkGreen border">

                    <IoGrid />

                </button>
                <button className="h-8 w-max px-2 text-customDarkGreen hover:bg-customDarkGreen hover:text-customLightGreen flex items-center gap-2 rounded-lg border-customDarkGreen border ">
                    <PiDeskFill />
                    <h1 className="text-[16px]">Walk to desk</h1>
                </button>               <button className="h-8 w-8 text-customDarkGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg border-customDarkGreen border">
                    <IoMdMore />
                </button>
            </div>
        </div>
    )
}

export default TopBar
