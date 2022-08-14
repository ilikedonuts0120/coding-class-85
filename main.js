canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;

mars_array = ["image 1.jpeg", "image 2.jpeg", "image 3.jpeg", "image 4.jpeg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
background_image = mars_array [random_number];

rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;
    rover_img = new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown (e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38'){
        up ();
        console.log("UP");
    }
    if (keypressed == '40'){
        down ();
        console.log("DOWN");
    }
    if (keypressed == '37'){
        left ();
        console.log("LEFT");
    }
    if (keypressed == '39'){
        right ();
        console.log("RIGHT");
    }
}

function up (){
    if (rover_y >= 0)
    {
        rover_y = rover_y - 10
        console.log("When up arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down (){
    if (rover_y <= 500)
    {
        rover_y = rover_y + 10
        console.log("When down arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left (){
    if (rover_x >=0)
    {
        rover_x = rover_x - 10
        console.log("When left arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right (){
    if (rover_x <= 500)
    {
        rover_x = rover_x + 10
        console.log("When right arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}