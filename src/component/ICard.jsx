import React from 'react';

const ICard = ({singleData}) => {
    console.log(singleData);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={singleData.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{singleData.brand}</h2>
          <p>{singleData.phone_name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ICard;