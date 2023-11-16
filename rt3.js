// 1
function createPoint(x, y){
    return {
        x : x,
        y : y,
        getX : () => x,
        getY : () => y,
        translate : function(x, y){
            this.x += x;
            this.y += y;
        },
        scale : function(k){
            this.x *= k;
            this.y *= k;
        }
    }
}

// 2

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getX = () => this.x;
    getY = () => this.y;
    translate(x, y){
        this.x += x;
        this.y += y;
    };

    scale(k){
        this.x *= k;
        this.y *= k;
    };
}

// 3

class Random {
    constructor(){ };

    nextDouble(low, high){
        return Math.random() * (high - low) + low;
    }

    nextInt(low, high){
        return Math.floor(Math.random() * (high - low)) + low;
    }

    nextElement(array){
        return array[this.nextInt(0, array.length)];
    }
}


let randGen = new Random();
let a = [1, 2, 3, 4, 5];

console.log(randGen.nextDouble(0, 10));
console.log(randGen.nextInt(0, 10));
console.log(randGen.nextElement(a));