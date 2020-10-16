import React from 'react';

const FeedbackSub = (props) => {
    const {name, description} = props.data;
    return (
            <div className="col-md-4 col-sm-6">
                <h5>{name}</h5>
                <p>{description}</p>
        </div>
    );
};

export default FeedbackSub;