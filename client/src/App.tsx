import { useRef } from 'react';
import { IRefPhaserGame, PhaserGame } from './game/PhaserGame';
import { useParams } from 'react-router';
import ChatBox from './components/ChatBox';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

function App() {
    const phaserRef = useRef<IRefPhaserGame | null>(null);
    const { id, name } = useParams()

    console.log(id, name)
    return (
        <div id="app" className="h-screen w-screen bg-gradient-to-b from-customLightGreen to-customDarkGreen flex flex-col p-0 m-0">
            <TopBar />
            <div className='flex h-[calc(100vh-5.5rem)] w-full gap-2'>
                <div className="w-[75vw] h-full bg-black border-white border rounded-lg">
                    <PhaserGame ref={phaserRef} />
                </div>
                <div className="h-full w-[25vw] text-white flex justify-center items-center rounded-lg">
                    <ChatBox />
                </div>
            </div>
            <BottomBar />

        </div>
    );
}

export default App;