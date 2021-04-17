class paper {
    constructor(x, y, radius){
        var options={
            isStatic : false,
            restitution : 0.3,
            density : 1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push ();
        translate (pos.x, pos.y)
        ellipseMode (CENTER)
        ellipse (0, 0, this.radius, this.radius)
        pop ();
    }
}