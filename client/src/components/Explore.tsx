import React from 'react'

const Explore = () => {
    const imgUrl = 'https://cdn.gather.town/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fvalueprop%2Fvalueprop1.png?alt=media'
    return (
        <div className='h-3/4 w-3/4 rounded-lg bg-black p-4
            space-y-10'>
            <img src={imgUrl} className='h-[80%] w-full rounded-lg' />
            <div className='h-[10%] w-full rounded-lg flex justify-between items-center '>
                <h1 className='text-xl'>Let's create you a office environment</h1>
                <button
                    className='h-10 w-max px-5 rounded-lg bg-white text-black'
                >Explore</button>
            </div>
        </div>
    )
}

export default Explore
