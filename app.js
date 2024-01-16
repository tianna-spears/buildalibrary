class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut= false;
        this._ratings= [];
    }
        get title() {
        return this._title;
    }
        get isCheckedOut() {
        return this._isCheckedOut;
    }
        get ratings(){
            return this._ratings;
        }

        set isCheckedOut(value) {
            this._isCheckedOut = value;
        }

        toggleCheckOutStatus () {
            this._isCheckedOut = !this.isCheckedOut;
        }

        getAverageRating () {
            // stopped at question 7
            // return this.ratings.reduce((currentSum, rating) => 
            // currentSum + rating, 0);
        }

        addMethod () {
            
        }

}