const displayMeals = (meals) => {
  const mealContainer = document.getElementById("meal-container");

  meals.forEach(meal => {
    // console.log(meal)
    const {strMealThumb, strMeal, strInstructions} = meal;
    const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<div>
    <img src="${strMealThumb}" alt="">
    </div>
    <div class="card-body">
        <h2>${strMeal}</h2>
        <p>${strInstructions.slice(0, 80)}</p>
        <button type="button" class="btn">Buy Now</button>
    </div>`;
    mealContainer.appendChild(div);
  })
};

const loadMeals = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

loadMeals();
