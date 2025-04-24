// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let value: string | number = 20;
console.log(value);
value = 'hello';
console.log(value);

let switcher: 'enable' | 'disable' = 'enable';
console.log(switcher);