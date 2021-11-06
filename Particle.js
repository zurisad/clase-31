class Particle {
    constructor(x, y) {

        var options ={
            friction: 0.001,
            restitution:0.1  
        }
            
        this.body = Bodies.circle(x, y, 10,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.radius = 10;
        World.add(world, this.body);
        

    }
    display() {
//Esto de las posciones de las posiciones y angulo para las patiulas
//era lo que esta causando conflicto a la hora que caían
        //var pos = this.body.position;
        //var angle = this.body.angle;

        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);
       pop();
    }

};