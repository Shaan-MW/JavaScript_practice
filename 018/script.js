console.log('Getters and Setters.');

class Rectanlge{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }else{
            console.error("invalid height.");
        }
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }else{
            console.error("invalid width.");
        }
    }

    get height(){
        return this._height;
    }

    get width(){
        return this._width;
    }

}

const rectangle1 = new Rectanlge(20,15);

rectangle1.width=121;
rectangle1.height=33;

console.log(rectangle1.width);
console.log(rectangle1.height);