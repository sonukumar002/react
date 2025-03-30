import { useEffect } from "react";
import canvasImages from "./image";
function Canvas(){
    useEffect(()=>{
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = canvasImages[0];
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    });
    return<canvas id="canvas">

    </canvas>;
}
export default Canvas;