console.log("hola mundo:D");
            console.log("ancho:" + window.innerWidth);
            let par; 
            par = document.getElementById("parrafito")
            if (window.innerWidth < 700)  {
                par.innerHTML = "menor o igual a 700 px";   
            }
            else {
                par.innerHTML = "menor o igual a 700 px"; 
            } 
            function setup() {
                createCanvas(800, 600);
                noCursor();
                captura = createCapture(VIDEO)
                captura.hide();
              }
              
              function draw() {
                background(220,0,0);
                image(captura,0,0,300,300);
                ellipse(mouseX,mouseY,10,10);
              }         