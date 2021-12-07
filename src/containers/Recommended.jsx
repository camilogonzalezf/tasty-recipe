import React from 'react';
import RecommendedList from '@components/RecommendedList';
import useGetRecommended from '@hooks/useGetRecommended';


const Recommended = ( recipe ) => {

    const food = recipe.q;

    //console.log(food);

    return (
        <div>
           <RecommendedList recipe = {food} />
        </div>
    );
}

export default Recommended;

//  