let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    switch (hand) {
        case 1:
            basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
            break;

        case 2:
            basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
            break;

        case 3:
            basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
            break
    }
})
