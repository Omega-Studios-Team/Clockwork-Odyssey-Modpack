// ClockCoin
StartupEvents.registry('item', event => {
    event.create('clock_coin')
    .displayName('Clock Coin')
    item.maxStackSize = 8
    item.rarity = "RARE"
})

// BrokenClockCoin
StartupEvents.registry('item', event => {
    event.create('broken_clock_coin')
    .displayName('Broken Clock Coin')
    item.maxStackSize = 16
    item.rarity = "RARE"
})

// Clock Star 
StartupEvents.registry('item', event => {
    event.create('clock_star')
    .displayName('Clock Star')
    item.maxStackSize = 64
    item.rarity = "EPIC"
})

