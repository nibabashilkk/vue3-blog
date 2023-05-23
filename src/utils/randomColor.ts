function randomColor(){
    let r1 = Math.floor(Math.random()*256);
    let g1 = Math.floor(Math.random()*256);
    let b1 = Math.floor(Math.random()*256);
    let before = "rgb("+r1+","+g1+","+b1+")";

    let r2 = Math.floor(Math.random()*256);
    let g2 = Math.floor(Math.random()*256);
    let b2 = Math.floor(Math.random()*256);
    let end = "rgb("+r2+","+g2+","+b2+")";
    return {
        background: 'linear-gradient(to right,'+before+','+end+')'
    };
}
export{
    randomColor
}