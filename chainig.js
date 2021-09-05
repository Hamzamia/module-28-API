// declaring variable based on the name of an objact property 
const myObjact = { a: 23, b: 65, x: 53, y: 87, z: 86 };
const { x, b } = myObjact;
console.log(b)


// destructing array

const [p, q, r] = [67, 45, 86, 89, 64];
console.log(p, q, r);

const [best, faltu] = ["hamza", "mahmud"];
const { soil, sky } = { sky: 'blue ', soil: ' mati ', color: 'red' };
// console.log(best, faltu);\
console.log(sky)

const company = {
    name: 'gp',
    ceo: { id: 10, name1: 'atahar ali ', food: 'fuchka' },
    web: {
        work: 'web Development',
        employee: 23,
        framework: 'React',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        },
    },

}
console.log(company.name);