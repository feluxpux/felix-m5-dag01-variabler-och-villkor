import './kalibrering'
// Dag 1: Variabler, typer och villkor. Följ README.md steg för steg.
// Resultatet syns i Console (F12). Spara, så laddas sidan om av sig själv.
// Röda understrykningar i VS Code är TypeScript som varnar. Håll musen över dem och läs.

// STEG 1 ------------------------------------------------------------
// TODO: skriv ut texten "Hej från Kafé Kardemumma" med console.log
console.log('Hej från Kafé Kardemumma')
// STEG 2 ------------------------------------------------------------
// TODO: skapa konstanten kafeNamn (string) med värdet "Kafé Kardemumma"
// TODO: skapa konstanterna prisBulle (number, 35) och prisKaffe (number, 32)
// TODO: skapa variablerna antalBullar (2) och antalKaffe (1) med let, båda number
// TODO: skriv ut kafeNamn
//       Skriv typen själv, till exempel:  const kafeNamn: string = "..."
const kafeNamn: string = 'Kafé Kardemumma'
const prisBulle: number = 35
const prisKaffe: number = 32
let antalBullar: number = 2
let antalKaffe: number = 1
console.log(kafeNamn)
// STEG 3 ------------------------------------------------------------
// TODO: skapa en string, ett number, en boolean, en undefined och en null
//       Typerna heter string, number, boolean, undefined och null
// TODO: skriv ut typeof för alla fem på en rad (tips: separera med komma)
// TODO: prova att ge number-variabeln en text. Vad säger TypeScript?
const stingVar: string = 'Detta är en text'
const numberVar: number = 42
const booleanVar: boolean = true
let undefinedVar: undefined
let nullVar: null = null
console.log(
    typeof stingVar,
    typeof numberVar,
    typeof booleanVar,
    typeof undefinedVar,
    typeof nullVar
)

//Type ‘string’ is not assignable to type 'number'
// STEG 4 ------------------------------------------------------------
// TODO: räkna ut summa = antalBullar * prisBulle + antalKaffe * prisKaffe
// TODO: räkna ut momsDel (12 % ingår i priset): summa * 0.12 / 1.12
// TODO: skriv ut "Summa: ... kr" och "Varav moms (12 %): ... kr"
//       Moms ska ha två decimaler (toFixed(2))
//       Håll musen över momsDel.toFixed(2). Vilken typ ger toFixed?
const summa: number = antalBullar * prisBulle + antalKaffe * prisKaffe
const momsDel: string = ((summa * 0.12) / 1.12).toFixed(2)
console.log(`Summa: ${summa} kr`)
console.log(`Varav moms (12 %): ${momsDel} kr`)
// Returns a string representing a number in fixed-point notation.
// STEG 5 ------------------------------------------------------------
// TODO: skapa ärStudent (boolean, true). Om ärStudent är true: rabatt 10 %.
// TODO: räkna ut attBetala (number) och skriv ut "Att betala: ... kr"
const ärStudent: boolean = true
let attBetala: number = summa

if (ärStudent) {
    attBetala = summa * 0.9
}
console.log(`Att betala: ${attBetala} kr`)
// STEG 6 ------------------------------------------------------------
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"
let veckodag: string = 'lördag'
let klockslag: number = 15
let öppet: boolean = false
if (veckodag === 'lördag' || veckodag === 'söndag') {
    if (klockslag >= 9 && klockslag <= 16) {
        öppet = true
    }
} else if (klockslag >= 7 && klockslag <= 18) {
    öppet = true
}
console.log(`Öppet just nu: ${öppet ? 'ja' : 'nej'}`)

// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
//console.log('5' + 3)
//console.log('5' - 3)
//console.log(true + 1)
//console.log(0.1 + 0.2)
//console.log('' === 0)
//console.log(null == undefined)
