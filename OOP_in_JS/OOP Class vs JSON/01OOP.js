class Person{
    fname
    lname
    constructor(f,l){
        this.fname=f;
        this.lname=l;
    }
    getName= function(){
        console.log(`Hello ${this.fname} ${this.lname}`);
        
    }
}

const HP = new Person("Hironmoy","Ray Ray");


HP.getName()