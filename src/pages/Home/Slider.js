import React, { useEffect, useState } from 'react';

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
            {
                items.map(item => <div className='carousel-item w-full'>
                    <div>
                        <h2>Item Name</h2>

                    </div>
                    <div className="w-full">
                        <img src={item?.img} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Slider;