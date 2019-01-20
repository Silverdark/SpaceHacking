# SpaceHacking

SpaceHacking is a game (with an uninspiring name) for the [Gynvael's Winter GameDev Challenge 2018/19](https://gynvael.coldwind.pl/?lang=en&id=697). I lost the motivation because I found other interesting projects (for every programmer a problem ;-)). Maybe someone can use this project as a blueprint or to gain some inspiration.

## Ideas
The idea was that a squad of space marines have to reach the end of the abandoned space ship. For this there should be multiple levels with multiple rooms. To reach the next room, you have to hack all required devices for the door (like in the Portal game, where you have to complete some tasks that the door will be open). For every level there should be a timer and if it reaches 0 the space ship should explode.

There should be multiple minigames (like the existing Fallout Terminal hacking minigame) which are required to hack. If you fail in a minigame, the timer should decrease so you have to concentrate to reach the end of the space ship.

I wanted to use no external assets like graphics or sounds. Special graphics should be drawn with the [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp). Music / sound should be generated [programmatically](http://marcgg.com/blog/2016/11/01/javascript-audio/).

## Problems
You can see in the commits, that I haven't worked so much on this project so far. Because of this there's no final game state, not even a complete Level / Room. I had some problems with the position from the `onClick` event handler and rendering of elements. If I would continue, I would start here to unify these positions.

## Start the game
If you want to start the game in development mode run `yarn run dev` (npm is also fine and make sure, that you first install all dependencies). For a production build you can run `yarn run build` which can be tested with `yarn run start`.

## Contribute
You are allowed to fork / copy this repository and use it as you like. If you want, you can also create pull requests to finish the game as well (but I won't submit this work for the challenge).