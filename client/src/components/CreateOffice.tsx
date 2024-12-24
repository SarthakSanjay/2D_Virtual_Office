import React from 'react'

const CreateOffice = ({ setSpace, setId, space, handleCreateSpace }: {
    setSpace: (value: string) => void,
    setId: (updater: (prev: number) => number) => void,
    space: string,
    handleCreateSpace: () => void
}) => {
    return <div className='h-screen w-screen flex justify-center items-center flex-col'>
        <h1 className='text-xl my-10'>Create a new office space for your team</h1>
        <p className='text-sm w-1/3 text-start'>Space name will appear at the end of url</p>
        <input
            className='h-10 w-1/3 border-2 border-white bg-transparent rounded-lg outline-none px-3'
            onChange={(e) => {
                setSpace(e.target.value)
            }}
            value={space}
        />
        <div className='w-1/3 flex justify-between my-10'>
            <button
                className='h-10 w-max px-5 rounded-lg bg-white text-black'
                onClick={() => setId(p => p - 1)}
            >Back</button>
            <button
                className='h-10 w-max px-5 rounded-lg bg-green-600 text-black disabled:bg-green-600/60'
                disabled={!space}
                onClick={handleCreateSpace}
            >Create space</button>

        </div>
    </div>
}

export default CreateOffice
