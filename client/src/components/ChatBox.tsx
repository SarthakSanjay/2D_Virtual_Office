import { IoMdClose } from 'react-icons/io'
import { IoChatbubbles } from 'react-icons/io5'
import { LuRefreshCw } from 'react-icons/lu'
import { RiChatNewLine } from 'react-icons/ri'

const ChatBox = () => {
    return (
        <div className='h-full w-full bg-customDarkGreen rounded-lg flex flex-col'>

            <div className='h-16 w-full text-customTextGreen flex justify-between items-center px-2 pl-4'>

                <h1 className='text-xl'>Chat</h1>
                <div className='flex justify-between'>
                    <button className='h-10 w-10 rounded-lg text-lg grid place-content-center'>
                        <LuRefreshCw />
                    </button>
                    <button className='h-10 w-10 rounded-lg text-lg grid place-content-center'>
                        <RiChatNewLine />
                    </button>
                    <button className='h-10 w-10 rounded-lg text-lg grid place-content-center'>
                        <IoMdClose />
                    </button>
                </div>
            </div>
            <div className='h-[calc(100vh-4rem)] w-full border flex gap-2 flex-col justify-center items-center'>
                <div className='bg-customTextGreen/25 text-customDarkGreen text-3xl h-24 w-24 rounded-full grid place-content-center'>
                    <IoChatbubbles />
                </div>
                <p>Your Inbox is empty</p>
                <button className='bg-customLightGreen text-customTextGreen rounded-lg px-4 py-2 h-10 w-max'>start chat</button>
            </div>
        </div>
    )
}

export default ChatBox