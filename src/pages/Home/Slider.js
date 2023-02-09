import React, { useEffect, useState } from 'react';
import { Animator, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, batch } from 'react-scroll-motion';

const Slider = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('dummyProducts.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    console.log(items);
    return (
        <div className="max-w-7xl mx-auto carousel rounded-box my-4">
            <div className='carousel-item w-full'>
                <ScrollContainer>
                    {
                        items.map(item =>
                            <ScrollPage>
                                <div className="w-full">
                                    <Animator animation={batch(FadeIn(), Sticky(), MoveOut(500, 0), MoveIn(0, 200))}>
                                        <div className="card w-full shadow-xl image-full">
                                            <figure><img src={item?.img} alt="Shoes" className="w-full rounded-2xl" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title text-2xl lg:text-7xl font-bold">{item.name}</h2>
                                                <p className='text-xl font-semibold'>Price: ${item.price}</p>
                                                <div className="card-actions justify-center">
                                                    <button className="btn text-white btn-outline rounded-full">View All Products</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Animator>
                                </div>
                            </ScrollPage>
                        )
                    }
                </ScrollContainer>
            </div>
        </div>
    );
};

export default Slider;