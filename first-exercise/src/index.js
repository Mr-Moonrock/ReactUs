import { choice, remove } from './helpers'
import fruits from './foods'

const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go ${randomFruit}`);
console.log(`Delicious! May I have another?`);

const remainingFruit = remove(fruits, randomFruit);

console.log(`I'm sorry, we're all out. We have ${remainingFruit.length} left.`)