class Pendulum{
    constructor(x,y,r){
       // var options =
        var options = { 
            restitution: 1,
            density: 1,
            inertia: Infinity,
            slop : 1, 
            frictionAir: 0.0};
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x , this.y , this.r/2, options);
        World.add(world, this.body);
        

    }
    display(){
         
        var paperpos = this.body.position;

        push ();
        translate(paperpos.x , paperpos.y);
        rectMode(CENTER);
        stroke(255);
        strokeWeight (3);
        fill ("black");
        ellipse (0,0,this.r,this.r);
        pop();
    }
}