import React from 'react'

function Contact() {
    return (
        <div className='w-full flex-column md:flex md:flex-wrap'>
            <div className="flex-column py-4 px-5 md:p-8 bg-[#515603] text-gray-50 md:w-1/2 ">
                <div className="text-xl md:text-6xl  md:mt-4">Contact Me</div>
                <div className="text-sm md:text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde USvoluptas obcaecati unde US</div>
            </div>
            <div className="flex-column py-4 px-5 md:p-8 bg-[#722300] text-gray-50 md:w-1/2">
                <div className="text-xl md:text-6xl  md:mt-4 ">About Me</div>
                <div className="text-sm md:text-xl  md:mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde USvoluptas obcaecati unde US.
                    <div className='mt-3 md:mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde USvoluptas obcaecati unde US</div></div>
            </div>
            <div className='w-full bg-black '>
                <div className='w-full text-gray-50 text-xl py-4 md:text-3xl md:py-10 text-center'>
                    PROJECT BY DO SOME CODING

                </div>
            </div>
        </div>
    )
}

export default Contact