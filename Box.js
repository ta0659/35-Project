    class Box{
      constructor(x, y) {
          var options = {
             
              restitution :0.4,
             
          }
          this.visibility = 225;
          this.body = Bodies.rectangle(x, y, 30,40, options);
          this.width = 30;
          this.height = 40;
          World.add(world, this.body);
          
        }
        score(){
          if(this.visibility<0 && this.visibility >-105){
            score++;
          }
        }
        display(){
        //  console.log(this.body.speed);
          if(this.body.speed <3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          noStroke()
          fill(48,22,8)
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          pop();
          
        }
      }
  };