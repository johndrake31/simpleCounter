//JS teaching material copyrights Peter T. May

/**
 * Benefits of this approach:
 * Encapsulates state (prevents direct modification)
 * Avoids global variable pollution
 * Enables multiple independent counters
 * Follows functional programming best practices
 */
const createCounter = ()=>{
    let count =  0; // Private variable, not accessible outside
    return {
        increment: function (){ return ++count; }, // Increases count
        decrement: function () { return --count; }, // Decreases count
        reset: function () { return count = 0; }, // Resets count
        getCount: function () { return count; }, // Retrieves current count
    }
}

//Reduce chances of typos and keeps from repeatitive code
//select elements in the dom with querySelector function
function querySelct (id) {
    return document.querySelector(id)
}

const counter = createCounter();

const root = querySelct('#root')
root.innerHTML='HELLO COUNTER WORLD'

/**create mutated array of btns selectors*/
const btns = ['#btn', '#btn2', '#btn3'].map((el)=>{return querySelct(el)})

/** 
 * btn.innerHTML implicit global variable behavior allow you to automatically select document id 
 * however, in best prectice, it is suggested 
 * to use querySelector and store it in a const in case of var naming conflicts
 * 
 * e.g. 
 * const btn = document.querySelector('#btn')
 * */ 
btn.innerHTML = "+1"
btn2.innerHTML = "-1"

const btnListener = (
    el, //element 
    ind, //index
    btns //array of elements 
    )=> {
    el.addEventListener('click', (event)=>{
        btns.forEach((btn)=>{ btn.style.backgroundColor= 'rgb(77, 108, 164)'})
        // highlight user action
        event.target.style.backgroundColor = 'red'
        //logic to apply methods to each btn
        ind === 0 ? counter.increment() : (ind === 1 ? counter.decrement() : counter.reset())
        //Display count value on screen
        root.innerHTML = counter.getCount()
    } )
}


btns.forEach((el, ind, btns) => {
    btnListener(el, ind, btns)
});


/**
 * code examples of non re-usable static code that fails to use the DRY methode 
 */

// btn2.addEventListener('click', (event)=>{
//     btn.style.backgroundColor= 'rgb(77, 108, 164)';
//     event.target.style.backgroundColor = 'red'
//     counter.decrement()
//     root.innerHTML= counter.getCount()
// } )

// btn3.addEventListener('click', ()=>{
//     counter.reset()
//     root.innerHTML= counter.getCount()
// } )
//const btn = document.querySelector(#btn)
//const btn2 = document.querySelector(#btn2)
//const btn3 = document.querySelector(#btn3)
