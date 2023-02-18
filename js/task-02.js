

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.getElementById('ingredients');
const foodIngredients = ingredients.map(ingredient => {
  let item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;

  return item;
});

  ulList.append(...foodIngredients );