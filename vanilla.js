arr = [11, 21, 31, 41, 51];
arr2 = [];
arr.forEach(function(item, index, array) {
    arr2.push(item * -1);
});
console.log(arr2);

spice = [
    { name: 'cinnamon', quantity: 1 },
    { name: 'ginger', quantity: 2 },
    { name: 'nutmeg', quantity: 3 }
];
mspice = spice.map((s,key) => {
    console.log(key);
    if (key == 0) {
        return { name: "jaanit", quantity: s.quantity * 2 };
    } else {
        return s;
    }
});

console.log(mspice[0]);