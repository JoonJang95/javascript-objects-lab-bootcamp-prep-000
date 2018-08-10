var recipes = {Cake: "Flour, Egg, & Milk"};

function updateObjectWithKeyAndValue(recipe, key, value) {
  
  return Object.assign({}, recipe, { [key]: value })
}

