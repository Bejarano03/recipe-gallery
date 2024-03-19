import React from "react";
import {recipes} from '../utils/recipes';

export default function RecipeGallery() {
  return (
    <div>
        {recipes.map((data) => {
            return (
                <>
                <div>
                    <h3>Recipe: {data.title}</h3>
                </div>
                <div>
                    <img src={data.imgUrl} alt="reciper picture" width={200}  height={200} />
                </div>
                <div>
                    <div>
                        <h4>Ingredients:</h4>
                        {data.ingredients.map((item) => {
                            return (
                                <>
                                <ul>
                                    <li>{item}</li>
                                </ul>
                                </>
                            )
                        })}
                    </div>
                </div>
                </>
            )
        })}
    </div>
  )
}
