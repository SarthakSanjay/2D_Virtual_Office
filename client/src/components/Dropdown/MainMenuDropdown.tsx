import { IoSettings } from "react-icons/io5"
import { MdPersonAddAlt1 } from "react-icons/md"

const MainMenuDropdown = () => {
    return (
        <div className='h-max w-[40vh] border border-customDarkGreen bg-customLightGreen rounded-xl absolute bottom-[3.5rem] left-[0.5rem] px-3 py-2'>
            <h1 className="text-xl">my_new_space</h1>
            <button className="h-10 w-full rounded-lg text-customTextGreen bg-customLightGreen hover:bg-customDarkGreen text-start px-3 flex items-center ">
                <span className="h-10 w-10 text-xl grid place-content-center">
                    <MdPersonAddAlt1 />
                </span>
                <span className="text-[1rem]">Invite</span></button>

            <button className="h-10 w-full rounded-lg text-customTextGreen bg-customLightGreen hover:bg-customDarkGreen text-start px-3 flex items-center">

                <span className="h-10 w-10 text-xl grid place-content-center">
                    <IoSettings />
                </span>
                <span className="text-[1rem]">Settings</span></button>


        </div>
    )
}

export default MainMenuDropdown