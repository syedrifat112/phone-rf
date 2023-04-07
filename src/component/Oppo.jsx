import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ICard from './ICard';

const Oppo = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <div className='grid gap-6 my-8 lg:grid-cols-4 sm:grid-cols-2'>
                {
                    data.map(singleData =>(
                        <ICard key = {singleData.slug} singleData = {singleData}></ICard>
                    ))
                }

            </div>
        </div>
    );
};

export default Oppo;<h1>oppo</h1>