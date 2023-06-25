import React from 'react'
import img1 from '../assets/image-2.png';
import img2 from '../assets/image-3.png';
import img3 from '../assets/image-4.png';



function Card() {

    const array = [
        {
            img: img1,
            title: "App Development",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            img: img2,
            title: "App Development",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            img: img3,
            title: "App Development",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]
    return (
        <div className='w-full bg-white-50 px-2 pt-2 pb-0 md:px-20 md:pt-16 md:pb-12'>
            <div className='flex-column space-y-4 md:flex md:gap-20'>
                {
                    array.map(item => {
                        return (
                            <div className='flex-column bg-gray-100 shadow-lg '>
                                <img className="w-full h-auto" src={item.img} />
                                <div className='px-3 pb-5 md:px-9 md:pb-20'>
                                    <div className='mt-3  text-xl md:mt-6 md:text-2xl font-medium leading-10'>{item.title}</div>
                                    <div className='text-sm md:mt-6 md:text-2xl'>{item.content}</div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card