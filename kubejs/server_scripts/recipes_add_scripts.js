/* //Recipes Add

ServerEvents.recipes(event => {
//kubejs = mod ; idhere = nom de l'objet/item a craft.
//Ceux du dessous sont les item nécessaire a la recipe
    event.shapeless('kubejs:idhere', [
        'kubejs:id2here',
        'kubejs:id3here',
        'kubejs:id4here',
    ])
})
*/
// Clock Coin Recipe
ServerEvents.recipes(event => {
    event.shaped('kubejs:clock_coin', [
        'ACA',
        'CBC',
        'ACA'
    ],{
        A: 'minecraft:gold_ingot',
        B: 'kubejs:broken_clock_coin',
        C: 'minecraft:diamond'
    })
})  
// Broken Clock Coin Recipe
ServerEvents.recipes(event => {
    event.shaped('kubejs:broken_clock_coin', [
        'DAD',
        'CBC',
        'DAD'
    ],{
        A: 'mekanism:alloy_atomic',
        B: 'minecraft:echo_shard',
        C: 'minecraft:netherite_ingot',
        D: 'minecraft:gold_ingot'
    })
})  
