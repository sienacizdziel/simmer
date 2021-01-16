import React from 'react';

const RecipeList = ({recipeList=[]}) => {
  return (
    <>
    { recipeList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default RecipeList
