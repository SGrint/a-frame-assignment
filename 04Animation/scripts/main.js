

// changing individual properties with code and using setInterval
var check = 1;
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
  myOtherBox.object3D.rotation.y += rotationSpeed;
  myOtherBox.object3D.rotation.z += rotationSpeed;
	//console.log(myOtherBox.object3D.rotation.x);

  if(check == 1){
    if (rotationSpeed < 0.3) {
      rotationSpeed += 0.001;
    } else {
      check = 0;
    }
  }
  if(check == 0){
    if (rotationSpeed > 0.01) {
      rotationSpeed -= 0.001;
    } else {
      check = 1;
    }
  }

  console.log(rotationSpeed);
  console.log(check);
}

setInterval(spin, 16); //equivalent to 60 fps
