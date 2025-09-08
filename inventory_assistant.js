// Coding Challenge 2b

let itemName = Labubu
let unitCost = 50
let currentStock = 100
let reorderLevel = 70
let targetStock = 110
let weeklyDemand = 30
let supplierLeadTimeWeeks = 1

weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
stockDeficit = Math.max(0, targetStock - currentStock)
reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
estimatedReorderCost = reorderQuantity * unitCost
reorderNow (boolean) = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log("Item Name:", + itemName)
console.log("Weeks of Cover:", + weeksOfCover.toFixed(2))
console.log("Reorder Now?", + reorderNow)
console.log("Recommended Reorder Quantity:", + reorderQuantity)
console.log("Estimated Reorder Cost:", + estimatedReorderCost.toFixed(2))
