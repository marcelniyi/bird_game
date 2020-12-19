const buttons = document.querySelectorAll('.btn');
const totalEggs = document.querySelector('#total')

buttons.forEach(btn =>  btn.addEventListener('click', targetBird))

function targetBird(e) {
    const targeted = e.target.parentElement.parentElement
   const name = targeted.querySelectorAll('.bird-name')[0].innerText
   const image = targeted.querySelectorAll('img')[0].src
   const egg_number = targeted.querySelectorAll('.egg-number')[0].innerText
   const input_value = targeted.querySelectorAll('.input_value')[0].value
   const cost = targeted.querySelectorAll('.cost')[0].innerText
    

   console.log(cost)
    layingEgg(name, egg_number)
    addToWareHouse(name, egg_number, image)
    computingCost(input_value, cost)
    timeEggs(name, egg_number)
}

let eggs = 0
const layingEgg = (bird, eggNo) =>{
  
    let parsed = parseInt(eggNo)
    eggs += parsed

    getTotalEggs(eggs)

}

function computingCost(value, cost) {
    alert('You pay ' +value * cost)
}

function getTotalEggs(eggs){
    return totalEggs.textContent = eggs
}


function timeEggs(name, eggNumber) {
    setInterval(function(){
        layingEgg('', eggNumber)
    }, 360000)
}



function addToWareHouse(name, egg_number, image){
    let warehouse = document.getElementById('egg-container');
    warehouse.innerHTML += `<div class="bird-info">
    <div class="bird-img">
        <img src="${image}" alt="bird" width="40" height="40">
    </div>
    <div class="bird-detail">
        <p>Your 3 birds have laid: ${egg_number} eggs</p>
    </div>
    
</div>`;
}