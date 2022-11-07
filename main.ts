input.onButtonPressed(Button.A, function () {
    if (SPRITE.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        if (true) {
            game.removeLife(1)
        } else {
            game.gameOver()
        }
    }
})
let SPRITE: game.LedSprite = null
game.startCountdown(10000)
SPRITE = game.createSprite(2, 2)
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    SPRITE.move(1)
    basic.pause(200)
    SPRITE.ifOnEdgeBounce()
})
