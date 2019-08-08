interface Orbit {
    readonly theta: number;
    readonly radius: number;
    // Degrees per second
    readonly rate: number;
}

interface Point {
    readonly x: number;
    readonly y: number;
}

// 60 frames per second
const FRAME_RATE = 60
const REFRESH = (1 / FRAME_RATE)*1000;
const X = 100
const Y = 100

function renderOrbit(){
    let orb: Orbit = {theta: 0, radius: 100, rate: 1}
    let point: Point = orbitToPoint(orb)
    while(true){
        setTimeout(function(){
            render(point)
            orb = newPos(orb)
            point = orbitToPoint(orb)
        }, REFRESH)
    }
}

function orbitToPoint(orb: Orbit){
    return {x: X + orb.radius*Math.cos(orb.theta), y: Y + orb.radius*Math.sin(orb.theta)}
}

function newPos(orb: Orbit){
    return {theta: orb.theta + orb.rate/FRAME_RATE, radius: orb.radius, rate: orb.rate}
}

function render(point: Point){
    let canvas: any = document.getElementById('canvas');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d')
        ctx.fillRect(point.x, point.y, 10, 10)
    }
}

function clear(point : Point){
    let canvas: any = document.getElementById('canvas');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d')
        ctx.clearRect(point.x, point.y, 10, 10)
    }
}
