import React from 'react';

const Airport = () => {
    return (
        <div>
            <select >
                    <option value="AIBD">AIBD</option>
                    <option value="ACDG">ACDG</option>
                    <option selected ="PARIS">PARIS</option>
                    <option value="AILSS">AILSS</option>
                </select>
        </div>
    );
};

export default Airport;