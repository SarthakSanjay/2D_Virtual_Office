import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IoChatbubbleEllipsesSharp, IoPerson } from 'react-icons/io5'
import { LuRefreshCw } from 'react-icons/lu'
import { RiChatNewLine } from 'react-icons/ri'

const ChatBoxTopBar = ({ fromMainChatBox, setOpenMainChat }: {
    fromMainChatBox: boolean,
    setOpenMainChat?: (v: boolean) => void
}) => {

    return (
        <div className='h-16 w-full text-customTextGreen flex justify-between items-center px-2 border-b border-customLightGreen/50'>


            {fromMainChatBox ? <div className='h-full w-max px-2'>
                <div className='h-full w-full rounded-xl flex justify-start items-center cursor-pointer gap-2'>
                    <button className="h-9 w-9 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg"
                        onClick={() => setOpenMainChat(false)}>
                        <FaChevronLeft />
                    </button>

                    <div className='h-10 w-10 rounded-full bg-blue-500 grid place-content-center text-xl'>
                        <IoChatbubbleEllipsesSharp />
                    </div>
                    <h1 className=''>chat space name</h1>
                </div>
            </div> : <h1 className='text-xl'>Chat</h1>}
            <div className='flex justify-between gap-1'>
                {
                    fromMainChatBox ?
                        <button className="h-max w-max bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen flex justify-center items-center rounded-lg pr-2">
                            <div className='h-9 w-9 grid place-content-center'>

                                <IoPerson />
                            </div>
                            <h1 className='w-min'>1</h1>
                        </button>
                        : <>
                            <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                                <LuRefreshCw />
                            </button>
                            <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                                <RiChatNewLine />
                            </button>
                        </>
                }

                <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <IoMdClose />
                </button>
            </div>
        </div>
    )
}

export default ChatBoxTopBar