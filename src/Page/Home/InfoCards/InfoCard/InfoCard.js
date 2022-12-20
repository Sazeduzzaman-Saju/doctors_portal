import React from 'react';


const InfoCard = ({ data }) => {
    const { name, description, icon, bgClass } = data;
    return (
        <div className={`card mb-3 ${bgClass}`} >
            <div className="row g-0 text-white justify-content-center align-items-center p-3">
                <div className="col-md-4">
                    <img src={icon} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;