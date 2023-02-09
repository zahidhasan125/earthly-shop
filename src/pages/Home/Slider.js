import React, { useEffect, useState } from 'react';
import { Animator, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, batch } from 'react-scroll-motion';

const Slider = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('dummyProducts.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    console.log(items);
    return (
        <ScrollContainer>
            {
                items.map((item, idx) =>
                    <ScrollPage key={idx}>
                        <Animator animation={batch(Sticky(), MoveOut(0, 0), MoveIn(0, 500))}>
                            <div className="card w-full lg:card-side bg-base-100 shadow-xl">
                                <figure><img src={item?.img} alt="Album" className='rounded-2xl' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl lg:text-3xl font-bold">{item.name}</h2>
                                    <p className='text-xl font-semibold'>Price: €{item.price}</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary btn-outline rounded-full">View Product</button>
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                )
            }
        </ScrollContainer>
    );
};

export default Slider;