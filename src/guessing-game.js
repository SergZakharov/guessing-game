class GuessingGame {
    constructor(min,max,mid) {
      this.min; //hope it ok here?
      this.max;
      this.mid;

    }

    setRange(min, max) {
      this.min=min+1; // set up range
      this.max=max;   // which is len - 1
    }

    guess() {
    return this.mid=Math.floor((this.min+this.max)/2);
    //the position of the middle element as in optimizied BSA
    }

    lower() {
    this.max=this.mid;//set up R margin if lower
    }
    greater() {
    this.min=this.mid+1; //set up l margin greater
    }
}

module.exports = GuessingGame;
