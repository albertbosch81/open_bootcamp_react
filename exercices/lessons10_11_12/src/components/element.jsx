import React, { useState } from 'react';



const Element = () => {

    const InitialColor = 'rgb(0 0 0)'

    const [color, setColor] = useState(InitialColor);
    const [intervalId, setIntervalId] = useState(0);

    function getRandomColor () {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red},${green},${blue})`;
        return setColor(color);
    }

    function changeColor() {
        return setIntervalId(setInterval(getRandomColor, 1000))
    }

    function stopChange() {
        clearInterval(intervalId)
    }

    return (
        <div>
            <div className='square' style={{height: '255px', width: '255px', background: color}}
                onMouseOver={ ()=> changeColor()}
                onMouseLeave={ ()=> stopChange()}
                onDoubleClick={ ()=> stopChange()}
                ></div>
        </div>
    );
}

export default Element;

