import { FaSignOutAlt } from "react-icons/fa"
import { IoPersonCircle } from "react-icons/io5"

const ProfileMenuDropdown = () => {
    return (
        <div className='h-max w-[30vh]  bg-customLightGreen rounded-xl absolute bottom-[3.5rem] left-[7.5rem] px-3 py-2'>

            <button className="h-10 w-full rounded-lg text-customTextGreen bg-customLightGreen hover:bg-customDarkGreen text-start px-3 flex items-center ">
                <span className="h-10 w-10 text-xl grid place-content-center">
                    <IoPersonCircle />
                </span>
                <span className="text-[1rem]">Edit profile</span></button>

            <button className="h-10 w-full rounded-lg text-customTextGreen bg-customLightGreen hover:bg-customDarkGreen text-start px-3 flex items-center">

                <span className="h-10 w-10 text-xl grid place-content-center">
                    <FaSignOutAlt />
                </span>
                <span className="text-[1rem]">Sign out</span></button>


        </div>
    )
}

export default ProfileMenuDropdown