import { useState } from 'react'
import ChatBoxArea from './ChatBoxArea'
import ChatBoxTopBar from './ChatBoxTopBar'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { IoMdAddCircle } from 'react-icons/io'
import { FaAt } from 'react-icons/fa'
import { RiSendPlane2Fill } from 'react-icons/ri'

const ChatBox = () => {
    const [openMainChat, setOpenMainChat] = useState<boolean>(false)

    if (openMainChat) {
        return <div className='h-full w-full bg-customDarkGreen rounded-lg flex flex-col'>
            <ChatBoxTopBar fromMainChatBox={true} setOpenMainChat={setOpenMainChat} />
            <div className='h-[calc(100%-4rem)] w-full border relative'>

                <div className='h-20 w-11/12 border rounded-xl absolute left-4 bottom-2'>
                    <input placeholder='Type Message'
                        className='h-1/2 w-full rounded-t-xl bg-transparent placeholder:text-customLightGreen/50 px-2 outline-none' />
                    <div className='h-1/2 w-full flex justify-between items-center'>
                        <div className='h-full w-max px-2 flex items-center'>
                            <button className="h-8 w-8 text-customTextGreen hover:bg-customLightGreen/70  grid place-content-center rounded-full text-2xl">
                                <IoMdAddCircle />
                            </button>

                            <button className="h-8 w-8 text-customTextGreen hover:bg-customLightGreen/70  grid place-content-center rounded-full text-xl">
                                <BsEmojiSmileFill />
                            </button>
                            <button className="h-8 w-8 text-customTextGreen hover:bg-customLightGreen/70  grid place-content-center rounded-full text-xl">
                                <FaAt />
                            </button>
                        </div>
                        <button className="h-8 w-8 text-customTextGreen hover:bg-customLightGreen/70  grid place-content-center rounded-full text-xl">
                            <RiSendPlane2Fill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
    return (
        <div className='h-full w-full bg-customDarkGreen rounded-lg flex flex-col'>
            <ChatBoxTopBar fromMainChatBox={false} />
            {/* chat area */}
            <ChatBoxArea setOpenMainChat={setOpenMainChat} />
        </div>
    )
}

export default ChatBox