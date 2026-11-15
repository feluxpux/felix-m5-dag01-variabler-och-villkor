const namn = 'felix'

console.log(namn)

const number1 = 25
const number2 = 30
const sum = number1 + number2
console.log(sum)

if (sum > 10) {
    console.log('Stort')
} else {
    console.log('Litet')
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

function doubbleNumber(num: number): number {
    return num * 2
}

console.log(doubbleNumber(67))
