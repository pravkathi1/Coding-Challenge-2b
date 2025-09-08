// Coding Challenge 2b

let itemName = 'Labubu' ;
let unitCost = 50;
let currentStock = 100;
let reorderLevel = 101;
let targetStock = 110
let weeklyDemand = 30
let supplierLeadTimeWeeks = 2

weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
stockDeficit = Math.max(0, targetStock - currentStock)
reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log("Item Name:", itemName)
console.log("Weeks of Cover:", + weeksOfCover.toFixed(2))
console.log("Recommended Reorder Quantity:", + reorderQuantity)
console.log("Estimated Reorder Cost:", + estimatedReorderCost.toFixed(2))
console.log("Reorder Now?", reorderNow);