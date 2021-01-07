class particles{
    constructor(x,y){
        var options = {
            restitution : 0.3,
            friction : 0.4,
            density : 0.2
        }
        this.body = Bodies.circle(x,y,7,options);
        this.r = 7;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
 }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}