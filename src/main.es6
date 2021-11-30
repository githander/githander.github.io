let structures = [];
let pixels = [];
const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const createStructures = () =>
{
    structures.push({
        name: "Water",
        isLiquid: true,
        color: "blue",
        hasGravity: true,
        gravityScale: 1
    });
}

pixels.push({
    x: 0,
    y: 0,
    type: structures[0]
});

setInterval(() => {
    ctx.clearRect(0,0,128,128);
    for(let pix of pixels)
    {
        ctx.fillStyle = pix.color;
        //If pixel has gravity apply it
        pix.y += pix.type.gravityScale;
        ctx.fillRect(pix.x, pix.y, 1, 1);
    }
}, 1000);
createStructures();