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

ServerEvents.recipes(event => {
//kubejs = mod ; idhere = nom de l'objet/item a craft.
//Ceux du dessous sont les item nécessaire a la recipe, avec la précision de la forme nécessaire.
    event.shaped('kubejs:idhere', [
        'AAA',
        'ABA',
        'A A'
    ],{
        A: 'kubejs:id',
        B: 'minecraft:id'
    })
}) */