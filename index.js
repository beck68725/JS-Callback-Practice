const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
//move(character).withArrowKeys(100, 250)
// let direction = null;
// let x = 100;
// let y = 250;
//I have gone through the activity twice. I can't get anything to happen when I try to move the green guy. I can see the numbers moving in the div tools but nothing on screen. 
//When I get to the handleDirectionChange everything goes off the screen so moved it into the function but I am pretty sure this is not right.
function handleDirectionChange(){

    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }

move(character).withArrowKeys(100, 250, handleDirectionChange)
}
// setInterval(function(){
// if(direction === 'west'){
//     x = x - 1
// }

// if(direction === 'north'){
//     y = y + 1
// }

// if(direction === 'east'){
//     x = x + 1
// }

// if(direction === 'south'){
//     y = y - 1
// }

// character.style.left = x + 'px'
// character.style.bottom = y + 'px'
// }, 1)

// document.addEventListener('keydown', function(e){
//     if(e.repeat) return;

//     if(e.key === 'ArrowLeft'){
//         direction = 'west'
//     }

//     if(e.key === 'ArrowUp'){
//         direction = 'north'
//     }

//     if(e.key === 'ArrowRight'){
//         direction = 'east'
//     }

//     if(e.key === 'ArrowDown'){
//         direction = 'south'
//     }
// })

// document.addEventListener('keyup', function(e){
//     direction = null
// })
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)