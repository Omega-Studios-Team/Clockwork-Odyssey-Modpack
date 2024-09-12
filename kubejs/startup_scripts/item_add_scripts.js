// ClockCoin
StartupEvents.registry('item', event => {
    event.create('clock_coin')
    .displayName('Clock Coin')
    item.maxStackSize = 8
    item.rarity = "EPIC"
})

// BrokenClockCoin
StartupEvents.registry('item', event => {
    event.create('broken_clock_coin')
    .displayName('Broken Clock Coin')
    item.maxStackSize = 16
    item.rarity = "RARE"
})

// 
StartupEvents.registry('item', event => {
    event.create('')
    .displayName('')
    item.maxStackSize = 64
    item.rarity = "COMMON"
})
