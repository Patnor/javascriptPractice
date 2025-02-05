function init(){
    const canvas = document.getElementById("canvas");
    canvas.addEventListener('mousemove', handleMouseMove, false);

    const context = canvas.getContext("2d");

    let started = false;

    function handleMouseMove(e){
        let x, y;
        if(e.clientX || e.clientY == 0){
            x = e.clientX;
            y = e.clientY;
        }

        if(!started){
            context.beginPath();
            context.moveTo(x, y);
            started = true;
        } else {
            context.lineTo(x, y);
            context.stroke();
        }
    }
}

document.addEventListener('DOMContentLoaded', init);