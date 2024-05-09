const API_BASE_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
const API_KEY = import.meta.env['VITE_API_KEY'];
const URI_ENCODED_DATA_TYPE_ARRAY = encodeURI('[branded]');
const AVERAGE_DAILY_CALORIC_INTAKE = 2000;

//api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=cookie&data_type=%5bbranded%5b&brandOwner=Costco
// https:
export async function getFoodByNameAndBrand(brandName, foodName) {
  const uriEncodedBrandName = encodeURI(brandName);
  const uriEncodedFoodName = encodeURI(foodName);
  const result = await fetch(
    `${API_BASE_URL}?api_key=${API_KEY}&query=${uriEncodedFoodName}&data_type=${URI_ENCODED_DATA_TYPE_ARRAY}&brand_owner=${uriEncodedBrandName}`
  );
  const json = await result.json()
  console.log(json.foods)
  return json.foods[0];
}

export async function calculateAmountOfFoodNeededToHitDailyCaloricIntake(
  foodName,
  brandName
) {
  const CALORIE_ID = 1008;
  const food = await getFoodByNameAndBrand(brandName, foodName);
  const caloriesObject = food.foodNutrients.find(
    (nutrient) => nutrient.nutrientId === CALORIE_ID
  );
  const calories = caloriesObject.value;

  const numberOfServingsToHitIntake = (AVERAGE_DAILY_CALORIC_INTAKE / calories).toFixed(2)

  const amountOfFoodToHitIntake = numberOfServingsToHitIntake * food.servingSize // This number will be in grams most likely

  return [(AVERAGE_DAILY_CALORIC_INTAKE / calories).toFixed(2), amountOfFoodToHitIntake];
}