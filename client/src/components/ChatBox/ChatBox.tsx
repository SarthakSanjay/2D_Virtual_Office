import { useState } from 'react'
import ChatBoxArea from './ChatBoxArea'
import ChatBoxTopBar from './ChatBoxTopBar'

const ChatBox = () => {
    const [openMainChat, setOpenMainChat] = useState(false)

    if (openMainChat) {
        return <div className='h-full w-full bg-customDarkGreen rounded-lg flex flex-col'>
            this is new chat
        </div>
    }
    return (
        <div className='h-full w-full bg-customDarkGreen rounded-lg flex flex-col'>
            <ChatBoxTopBar />
            {/* chat area */}
            <ChatBoxArea setOpenMainChat={setOpenMainChat} />
        </div>
    )
}

export default ChatBox