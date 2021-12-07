import React from 'react';
import RecommendedList from '@components/RecommendedList';
import useGetRecommended from '@hooks/useGetRecommended';


const Recommended = ( reco ) => {

    const food = reco.q?.recipe;

    return (
        <div>
            <RecommendedList recipe = {food} /> 
        </div>
    );
}

export default Recommended;

//