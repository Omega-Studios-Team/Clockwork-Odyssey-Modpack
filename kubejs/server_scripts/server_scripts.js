// FILEINFO: Server Scripts File [KubeJS JavaScript]
// INFO: Clock Coin Recipe
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
// INFO: Broken Clock Coin Recipe
ServerEvents.recipes(event => {
    event.shaped('kubejs:broken_clock_coin', [
        'BBB',
        'BAB',
        'BBB'
    ],{
        A: 'minecraft:gold_block',
        B: 'minecraft:gold_ingot'
    })
}) 
// INFO: Ultimate Clock Star Recipe
ServerEvents.recipes(event => {
    event.shapeless('kubejs:ultimate_clock_star', [
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star',
        'kubejs:clock_star'
    ])
})

// INFO: ClockSword Recipe
ServerEvents.recipes(event => {
    event.shaped('kubejs:clock_sword', [
        ' A ',
        ' B ',
        ' B '
    ],{
        A: 'kubejs:ultimate_clock_star',
        B: 'minecraft:stick'
    })
}) 

