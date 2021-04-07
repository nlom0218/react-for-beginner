import React from 'react';

const PropsBoolean = ({ trueFalse }) => {
    console.log(trueFalse);
    return (
        <div>
            {trueFalse ? `2. ${trueFalse}` : `1. ${trueFalse}`}
        </div>
    );
}

export default PropsBoolean;