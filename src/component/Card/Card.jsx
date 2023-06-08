import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Header/Button/Button';

const Card = () => {
    // state lifting- 2 componants are sharing same info
    const [data, setData] = useState([]);
    const [showAll, setShowAll]=useState(false);

    // useState will be true after onClick
    const handleShowAll = () =>{
        setShowAll(true);
    }
    useEffect(()=>{
        const loadData = async() => {
            const res= await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const value= await res.json();
            console.log(value.data.tools);
            setData(value.data.tools);
        } 
        loadData();
    },[]);

    return (
        <>
            <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-4 lg:px-12 my-6">
            {
                // forEach er bodole react e map use hoy, map shudhu array chiney
                // data.map((singleData) => {
                //     // double line e bole return kora lagbe
                //     // console.log(singleData);
                //     // variable singleData er reference e data pathai safety er jnno
                //     return <SingleData singleData={singleData}/>;
                // })

                // single line e call
                data.slice(0,showAll? 12:6).map((singleData) =>(
                <SingleData singleData={singleData} key={singleData.id}></SingleData>))
            }
            </div>

            {/* to remove show all button after showing all cards */}
            {
                !showAll && (<span onClick={handleShowAll}>
                    <Button>See More</Button>
                    </span>)
            }
        </>
    );
};

export default Card;