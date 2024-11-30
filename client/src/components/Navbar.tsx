import { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="h-[80px] w-full bg-gradient-to-r from-blue-900 via-blue-500 to-blue-800 flex justify-center items-center px-4">
            <div className="flex justify-between w-full px-4">
                <div className="flex space-x-2">
                    <button className="text-white">Logo</button>
                    <button className="text-white h-10 w-max px-4 hover:bg-black/40 rounded-lg">Events</button>
                    <button className="text-white h-10 w-max px-4 hover:bg-black/40 rounded-lg">My Space</button>
                </div>
                <div className="flex space-x-1">
                    <button className="text-white h-10 w-max px-4 hover:bg-black/40 rounded-lg">Profile</button>
                    {/* <button className="text-white">Resources</button> */}
                    <button
                        onClick={toggleDropdown} // Toggle the dropdown on click
                        className="text-white h-10 w-max px-4 hover:bg-black/40 rounded-lg"
                    >
                        Language
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-[80px] right-10 bg-blue-200 text-black w-40 rounded-lg shadow-lg">
                            <ul className="space-y-2 p-2">
                                <li className="cursor-pointer hover:bg-blue-400 rounded-lg px-4 py-2">English</li>
                                <li className="cursor-pointer hover:bg-blue-400 rounded-lg px-4 py-2">Spanish</li>
                                <li className="cursor-pointer hover:bg-blue-400 rounded-lg px-4 py-2">German</li>
                            </ul>
                        </div>
                    )}

                    <button className="text-black bg-emerald-500 h-10 w-max px-4 hover:bg-black/40 rounded-lg">Create Space</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

