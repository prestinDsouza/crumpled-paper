class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2

			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h, options);
 		World.add(world, this.body);


	}
	display()
	{
			
        var groundPos=this.body.position;		

       

			push()
            translate(groundPos.x, groundPos.y)		
			rectMode(CENTER)
			rect(-26000,0,this.w, this.h);
            image(this.image,-20, -15, this.w,this.h);
			pop()
			
	}

}