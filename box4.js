class Box4 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 500;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        fill("Blue");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
      
      else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 2;
        tint(255, this.visiblity);
    
        pop();
      }
    }
    };