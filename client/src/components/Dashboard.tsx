import { useState } from 'react';
import Navbar from './Navbar';
import Space from './Space';

const Dashboard = () => {
    const [clickedCreateSpaceBtn, setClickedCreateSpaceBtn] = useState(false)

    return (
        <div className="flex flex-col h-screen w-screen bg-blue-800">
            <Navbar setClickedCreateSpaceBtn={setClickedCreateSpaceBtn} />
            <Space
                clickedCreateSpaceBtn={clickedCreateSpaceBtn}
                setClickedCreateSpaceBtn={setClickedCreateSpaceBtn}
            />
        </div>
    );
};

export default Dashboard;
