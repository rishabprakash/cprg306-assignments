import React, { useEffect, useState } from 'react';

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    function loadMealIdeas(ingredient) {
        fetchMealIdeas(ingredient)
            .then((meals) => {
                setMeals(meals);
            })
            .catch((error) => {
                console.error(error);
                setMeals([]);
            });
    }
    return (
        <div>
            <h1 className=' text-3xl text-white'>Meal Ideas</h1>
            <ul className=' flex flex-col gap-2 mt-4'>
                {meals == null && <li className='bg-slate-800 rounded-xl p-4'>No meal ideas found</li>}
                {meals != null &&
                <>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className=' bg-slate-800 rounded-xl p-4 hover:scale-105 duration-200 ease-in-out w-11/12 active:scale-95'>{meal.strMeal}</li>
                ))}
                </>
                }
            </ul>
        </div>
    );
}

export default MealIdeas;