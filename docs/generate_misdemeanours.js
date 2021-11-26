const types = [ 'rudeness', 'vegetables', 'lift', 'united' ];

function rand(x){
    return Math.random() * x;
}

function choose(arr){
    if(!arr) arr = [];
    return arr[Math.floor(Math.random() * arr.length)];
}

const sleep = async (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

export default async function generateMisdemeanours(number){
    
    await sleep(1500);

    let amount = number ?? 50;

    const misdemeanours = [];

    for(let i =0; i < amount; i++){
        misdemeanours.push({
            citizenId: Math.floor((i + rand(37) * rand(967))),
            misdemeanour: choose(types),
            date: new Date().toLocaleDateString()
        })
    }

    return misdemeanours;
}