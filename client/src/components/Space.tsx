import { BsThreeDotsVertical } from "react-icons/bs";
import Explore from "./Explore";
import Backdrop from "./Backdrop";

const Space = ({ clickedCreateSpaceBtn, setClickedCreateSpaceBtn }: {
    clickedCreateSpaceBtn: boolean,
    setClickedCreateSpaceBtn: (value: boolean) => void
}) => {

    if (clickedCreateSpaceBtn) {
        return <Backdrop>
            <Explore setClickedCreateSpaceBtn={setClickedCreateSpaceBtn} />
        </Backdrop>
    }

    return (
        <div className="h-full w-full bg-blue-900 ">
            <div className="w-full h-16 flex justify-end items-center space-x-4 px-8">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    Last Visited
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    Created Space
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                />
            </div>

            <div className="h-full w-full px-10 py-2">
                <div className="h-52 w-72 rounded-lg bg-transparent">
                    <div className="h-40 w-full border rounded-lg"></div>

                    <div className="h-12 w-full flex justify-between items-center px-1">
                        <div className="text-sm font-medium text-white">Name</div>

                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-sm">Last Visited</span>
                            <button className="h-5 w-5 flex justify-center items-center rounded-sm hover:bg-black/50">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Space;
