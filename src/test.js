/*
use a for loop
set a variable called initial idex
if i-[initial index] = 1, increment count variable
else concatenate the string with initial index - [count], and set initial index to count + 1,
increment count 

*/


const test = (list) => {
    let fragment = [];
    let finalResult = [];
    let range = '';
    for(let i = 1; i<=list.length;i++){
        if (list[i] - list[i-1] === 1){
            fragment.push(list[i-1]);
        }
        else {
            fragment.push(list[i-1])
            finalResult.push(fragment);
            fragment = [];
        }
    }

    for(let v of finalResult){
        if(v.length > 2){
            range+=`${v[0]}-${v[v.length-1]},`
        }
        else if(v.length === 2){
            range+=`${v[0]},${v[1]},`
        }
      else {
        range+=`${v[0]},`
      }
    }
    
    return range.slice(0,-1);
}

let list = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
list.map((val, idx) => {
    console.log(val,idx);
});

const sol = list => {
    return list.map((val, idx) => list[idx - 1] === val - 1 && list[++idx] === val + 1 ? `~` : val).join(`,`).replace(/,?(~,)+/g, `-`);
}

console.log(sol(list));