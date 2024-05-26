// 1. make a toast
// 2. boil egg
// 3. make coffee
// 4. notify about 'your breakfast is ready'

// 1. toast
function make_Toast(){
    console.log('making toast...')
    setTimeout(()=>{
        console.log('toast is ready')
    },6000)
}

// 2. boil
function boil_Egg(){
    console.log('boiling egg...')
    setTimeout(()=>{
        console.log('egg is ready')
    },2000)
}

// 3. coffee
function make_Coffee(){
    console.log('making coffee...')
    setTimeout(()=>{
        console.log('coffee is ready')
    },4000)
}

function notification(){
    console.log('your breakfast is ready')
}


make_Toast()
boil_Egg()
make_Coffee()
notification()

// callback function
function makeToast2(callback:()=>void){
    console.log('making toast...')
    setTimeout(()=>{
        console.log('toast is ready')
        callback()
    },6000)
}

function boilEgg2(callback:()=>void){
    console.log('boiling egg...')
    setTimeout(()=>{
        console.log('egg is ready')
        callback()
    },2000)   
}

function makeCoffee2(callback:()=>void){
    console.log('making coffee...')
    setTimeout(()=>{
        console.log('coffee is ready')
        callback()
    },4000)
}

function notify2(){
    console.log('your breakfast is ready')
}


// callback hell
makeToast2(()=>{
    boilEgg2(()=>{
        makeCoffee2(()=>{
            notify2()
        })
    })
})



makeToast2(()=>{
    function boilEgg2(callback:()=>void){
        console.log('boiling egg...')
        setTimeout(()=>{
            console.log('egg is ready')
            makeCoffee()
        },2000)
    }
})



// promise
const myPromise = new Promise<string>((resolve, reject) => {
    let say = 'no';
    if(say === 'Yes'){
        resolve('I am happy');
    }else{
        reject('feeling bad');
    }
  });

  myPromise
  .then((value) => {
      console.log(value);
    })
  .catch((error) => {
    console.log(error);
  })

  const fetchUserData = new Promise<{ name: string; age: number }>((resolve, reject) => {
    // Simulate an API call with a delay
    setTimeout(() => {
        const success = true; // Change to false to test the reject path

        if (success) {
            resolve({ name: 'John Doe', age: 30 });
        } else {
            reject('Failed to fetch user data');
        }
    }, 2000);
});

fetchUserData
    .then((data) => {
        console.log(`User Name: ${data.name}`);
        console.log(`User Age: ${data.age}`);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    })
    .finally(() => {
        console.log('Fetch user data operation completed.');
    });


function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 1. toast
async function makeToast(){
    console.log('making toast...');
    await delay(6000);
    console.log('toast is ready');
}

// 2. boil
async function boilEgg(){
    console.log('boiling egg...');
    await delay(2000);
    console.log('egg is ready');
}

// 3. coffee
async function makeCoffee(){
    console.log('making coffee...');
    await delay(4000);
    console.log('coffee is ready');
}

async function notify(){
    console.log('your breakfast is ready');
}

async function prepareBreakfast() {
    await makeToast();
    await boilEgg();
    await makeCoffee();
    await notify();
}

prepareBreakfast();

  


