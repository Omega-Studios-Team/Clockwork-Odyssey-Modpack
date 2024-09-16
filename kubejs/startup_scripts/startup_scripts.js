// FILEINFO: Startup Scripts File [KubeJS JavaScript]
Platform.mods.kubejs.name = 'Clockwork Odyssey'

// INFO: Clock Coin
StartupEvents.registry('item', event => {
    event.create('clock_coin').displayName(('\u00A76' + 'Clock Coin'))
})

// INFO: Broken Clock Coin
StartupEvents.registry('item', event => {
    event.create('broken_clock_coin').displayName(('\u00A76' + 'Broken Clock Coin'))
})

// INFO: Clock Star
StartupEvents.registry('item', event => {
    event.create('clock_star').displayName(('\u00A7d' + 'Clock Star'))
})

// INFO: Ultimate Clock Star 
StartupEvents.registry('item', event => {
    event.create('ultimate_clock_star').displayName(('\u00A75' + 'Ultimate Clock Star'))
})

// INFO: Clock Tier
ItemEvents.toolTierRegistry(event => {
    event.add('clock', tier => {
        tier.uses = 10000
        tier.speed = 20.0
        tier.attackDamageBonus = 4.0
        tier.level = 5
        tier.enchantmentValue = 24
        tier.repairIngredient = 'kubejs:clock_star'
    })
})

// INFO: ClockSword
StartupEvents.registry('item', event => {
    event.create('clock_sword', 'sword').tier('clock').attackDamageBaseline(120.0).displayName(('\u00A7e' + 'The Clock Sword'))
})

/* // TODO: Block
StartupEvents.registry('block', event => {
    event.create('blockname')
    .displayName('Lenomdubloc')
    .material('stone')
    .hardness('0.8')
    .resistance('2')
    .tagBlock('minecraft:mineable/shovel')
    .tagBlock('minecraft:stone')
    .requireTool(false)
}) */
