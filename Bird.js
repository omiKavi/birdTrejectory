class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
    //this.trajectory = [ [x0, y0], [x1,y1], [x2, y2], [], [], [], []];
    }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  if(this.body.position.x > 200 && this.body.speed > 11 ){
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
  }
  

  //looping over the items stored in trajectory array to print smoke dots
   for (var index = 0; index < this.trajectory.length; index++) {
   
    image(this.smokeImg, this.trajectory[index][0], this.trajectory[index][1]);
   }
    super.display();
  }
}
