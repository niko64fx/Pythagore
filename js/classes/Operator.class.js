var Operation = function ()
{
    
    this.plus = function (mumber1, mumber2){
        return mumber1 + mumber2;
    }

    this.minus = function (mumber1, mumber2){
        return mumber1 - mumber2;
    }

    this.times = function (mumber1, mumber2){
        return mumber1 * mumber2;
    }

    this.over = function (mumber1, mumber2){
        return mumber1 / mumber2; // division par 0 !!!
    }
};


