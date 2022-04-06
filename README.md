# iHoover Test

---

iHoover test for Yanport application

## Input and output datas

**Input datas :**

-   Dimensions of the grid (room to clean) : Number of squares of X axe and number of squares of Y axe ;
-   Initial position of the hoover : Position on axe X and on axe Y ;
-   Initial orientation of the hoover : N, E, S or W ;
-   Instructions for movements fo the hoover : Sequence of letters A (go ahead), D (rotate right) and G (rotate left).

**Output datas :**

-   Final position of the hoover : Position on axe X and on axe Y ;
-   Final orientation of the hoover : N, E, S or W.

## Technologies used

-   Typescript
-   Jest (testing framework)

## Installation of application

Node.js must be installed

```
$ git clone https://github.com/DelMout/iHoover_Test.git
$ cd ../path/to/the/file
$ npm install
$ npm t
```

## Test 1

Input datas :

-   Grid dimension : x=10 y=10
-   Initia position of the hoover : x=5 y=5 orientation=N
-   Instructions : DADADADAA
    Output datas :
-   Expected result : x=5 y=6 orientation=N

Test 1 is executed on the last test in the unit test file (app.test.ts).
