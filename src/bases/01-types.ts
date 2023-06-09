export let name: string = 'Fernanda';
export const age: number = 35;
export const isValid: boolean = true;

name = 'Elba';
// name = 123;
// name = true;

export const templateStrings = `Esto es un string
multilinea
que puede tener
"dobles
'simples
inyectar valores ${name}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}
`;

console.log(templateStrings)
