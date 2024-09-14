// Clock Coin
StartupEvents.registry('item', event => {
    event.create('clock_coin').displayName(('\u00A76' + 'Clock Coin'))
})

// Broken Clock Coin
StartupEvents.registry('item', event => {
    event.create('broken_clock_coin').displayName(('\u00A76' + 'Broken Clock Coin'))
})

// Clock Star
StartupEvents.registry('item', event => {
    event.create('clock_star').displayName(('\u00A7d' + 'Clock Star'))
})

// Ultimate Clock Star 
StartupEvents.registry('item', event => {
    event.create('ultimate_clock_star').displayName(('\u00A75' + 'Ultimate Clock Star'))
})

// Clock Tier
ItemEvents.toolTierRegistry(event => {
    event.add('clock', tier => {
        tier.uses = 10000
        tier.speed = 20.0
        tier.attackDamageBonus = 4.0
        tier.level = 5
        tier.enchantmentValue = 14
        tier.repairIngredient = 'kubejs:clock_star'
    })
})

// ClockSword
StartupEvents.registry('item', event => {
    event.create('clock_sword', 'sword').tier('clock').attackDamageBaseline(120.0).displayName(('\u00A7e' + 'The Clock Sword'))
})
    