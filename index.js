var recipes = {Cake: "Flour, Egg, & Milk"};

function updateObjectWithKeyAndValue(recipe, key, value) {
  
  return Object.assign({}, recipe, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  recipe[key] = value 
  
  return recipe
}