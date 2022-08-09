// ==================== DOM ==================== //
const reduceTippersBtn = document.querySelector('.decrease-tippers');
const increaseTippersBtn = document.querySelector('.increase-tippers');
const billTotal = document.querySelector('.total-bill');
const numberOfTippers = document.querySelector('.tippers');
const billInput = document.querySelector('#tip-input');
const billTax = document.querySelector('#tip-amount');



document.addEventListener('DOMContentLoaded', ()=> {
    billInput.value = '';
    billTax.value = 99;
})


function calcBill() {

    //get bill input value
    billInput.addEventListener('keyup', (ev)=>{
        let bill;
        let val = 0 + ev.target.value;
        billInput.value = parseFloat(val);
        bill = billInput.value;

        // calculate bill
        bill = +bill / Number(numberOfTippers.innerText);
        billTotal.innerText = `$${bill.toFixed(2)}`;
    })

}


function contributors() {

    let count = Number(numberOfTippers.innerText);

    // reduce contributor
    reduceTippersBtn.addEventListener('click', (ev)=>{

       numberOfTippers.classList.add('fly');
       setTimeout(()=> {
        numberOfTippers.classList.remove('fly');
       }, 500);

        if (count > 1) {
            count--;
            numberOfTippers.innerText = count;
            // console.log(count);

            //update bill 
            let bill = +billInput.value / count;
            billTotal.innerText = `$${bill.toFixed(2)}`;

        }
        
    })



    // increase contributor 
    increaseTippersBtn.addEventListener('click', ()=> {
        numberOfTippers.classList.add('fly');
        setTimeout(()=> {
         numberOfTippers.classList.remove('fly');
        }, 500);
        count >= 9 ? count : count++;
        numberOfTippers.innerText = count;

        //update bill
        let bill = +billInput.value / count;
        billTotal.innerText = `$${bill.toFixed(2)}`;

    })

}

calcBill();
contributors();
// refactor to DRY ===> next
