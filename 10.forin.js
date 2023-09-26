const obj =  {
    1: 'Rokas',
    2: 'Petras',
    3: 'Jurgis',
}
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key + ": " + obj);
    }
}