namespace SpriteKind {
    export const p1 = SpriteKind.create()
    export const p2 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . 8 8 . . 8 8 . . . . . . . . . 
        . 8 8 . 8 8 . . . . . . . . . . 
        8 8 . . 8 . . . . . . . . . . . 
        8 8 . 8 8 . . . . . . . . . . . 
        8 . . 8 . . . . . . . . . . . . 
        8 . 8 8 . . . . . . . . . . . . 
        8 . 8 8 . . . . . . . . . . . . 
        8 . 8 8 . . . . . . . . . . . . 
        8 . 8 8 . . . . . . . . . . . . 
        8 . 8 8 . . . . . . . . . . . . 
        8 . 8 8 . . . . . . . . . . . . 
        8 . . 8 . . . . . . . . . . . . 
        8 8 . 8 8 . . . . . . . . . . . 
        8 8 . . 8 . . . . . . . . . . . 
        . 8 8 . 8 8 . . . . . . . . . . 
        . 8 8 . . 8 8 . . . . . . . . . 
        `, mySprite2, -100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.p1, function (sprite, otherSprite) {
    sprites.destroy(projectile2)
    info.player2.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    if (info.player2.score() > info.player1.score()) {
        game.gameOver(true)
    } else {
        game.gameOver(true)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f 2 2 . . . . . . . 
        . . . . f f f 2 2 2 . . . . . . 
        . . . . f f 2 2 2 2 . . . . . . 
        . . . . f f f f 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.p2, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    info.player1.changeScoreBy(1)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`niveau1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f 2 2 2 2 2 2 f . . . . 
    . . f f 2 2 2 2 2 2 2 2 f . . . 
    . f 2 2 2 2 2 2 2 2 2 2 f . . . 
    . f f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 f f f f 2 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e e e e 1 f e f d e f . . 
    . f e e e e e 1 f e f d f f . . 
    . . f f 2 2 2 e e e e e 2 2 f . 
    . . . f 2 2 2 2 f f f 2 2 e f . 
    . . . f f e e e e e f f f f f . 
    . . . f f e e e e e e e e e f . 
    . . . f f f f f f e e f f f f . 
    . . . . f f . . . f f f . . . 2 
    `, SpriteKind.p1)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
controller.player1.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . f f f f f f . . . . 
    . . . f 8 8 8 8 8 8 f f . . 
    . . f 8 8 8 8 8 8 8 8 f f . 
    . . f 8 8 8 8 8 8 8 8 8 f . 
    . f 8 8 8 8 8 8 8 8 8 8 f . 
    . f 8 8 f f f f 8 8 8 8 f . 
    . f f f e e e f f f f f f f 
    . f e e 4 4 f b e 4 4 e f f 
    . f f e d d f 1 4 d 4 e e f 
    f d d f d d d d 4 e e e f . 
    f b b f e e e 4 e e f f . . 
    f b b e 8 8 4 8 8 8 f . . . 
    . f b e 8 8 e 8 8 8 e . . . 
    . . f f e e f 4 4 4 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . . f f f . . . . . 
    `, SpriteKind.p2)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
controller.player2.moveSprite(mySprite2)
info.startCountdown(120)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
