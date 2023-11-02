const data = require('./Food.json')
console.log('//1')
// 1 :list all the food items
const printFoodName = ()=>{
    const foodName = data.map(item => item.foodname)
    console.log(foodName)
}
printFoodName()

// 2: list all the food items with category vegetables
console.log('//2')
const filterFoodType=(category)=>{
    const FoodType = data.filter(item => item.category === category)
    const foodName = FoodType.map(item => item.foodname)
    console.log(foodName)
}
filterFoodType('Vegetable')


//3 :list all the food items with category fruit

console.log('//3')
filterFoodType('Fruit')

//4 list all the food items with category protien

console.log('//4')
filterFoodType('Protein')

//5 list all the food items with category nuts

console.log('//5')
filterFoodType('Nuts')

//6 list all the food items with category grains

console.log('//6')
filterFoodType('Grain')

//7 list all the food items with category dairy

console.log('//7')
filterFoodType('Dairy')

//8 :list all the food items with calorie above 100
console.log('//8')
const filterByCalorieA=(calorie)=>{
    const FoodType = data.filter(item => item.calorie > calorie)
    const foodName = FoodType.map(item => item.foodname)
    console.log(foodName)
}
filterByCalorieA(100) 
 //9 :list all the food items with calorie below 100
 console.log('//9')
 const filterByCalorieB=(calorie)=>{
    const FoodType = data.filter(item => item.calorie < calorie)
    const foodName = FoodType.map(item => item.foodname)
    console.log(foodName)
}
filterByCalorieB(100) 
 //10 :list all the food items with highest protien content to lowest
 console.log('//10')
 const sortByProteinContent =()=>{
    const FoodType = data.filter(item => item.protiens)
    const sortedByProtein = FoodType.sort(function(a, b){return b.protiens - a.protiens} );
    const finaldata = sortedByProtein.map(item => item.foodname)
    console.log(finaldata)
 }
 sortByProteinContent()
 //list all the food items with lowest cab content to highest
 console.log('//11')
 const sortByCabContent =()=>{
    const FoodType = data.filter(item => item.cab)
    const sortByCab = FoodType.sort(function(a, b){return a.cab - b.cab} );
    const finaldata = sortByCab.map(item => item.foodname)
    console.log(finaldata)
 }
 sortByCabContent()