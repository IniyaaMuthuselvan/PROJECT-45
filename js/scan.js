class Scan{
    constructor(){

        this.access1 = createInput("Answer 1")
        this.access1.position(150,90)
        this.access1.style('background','white')

        this.button1 = createButton('Check')
        this.button1.position(150,110)
        this.button1.style('background','grey')
    }

    display(){
        this.button1.mousePressed(() => {
            if(system.check(answer1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        }) 
    }
}

