# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck             | Min gissning | Det som hände       | Vad sa TypeScript? | Hade jag rätt? |
| ------------------- | ------------ | ------------------- | ------------------ | -------------- |
| `"5" + 3`           | 53           | 53                  |                    | ja             |
| `"5" - 3`           | 2            | 2                   | ts(2362)           | ja             |
| `true + 1`          | 2            | 2                   | ts(2365)           | ja             |
| `0.1 + 0.2`         | 0.3          | 0.30000000000000004 |                    | nej            |
| `"" === 0`          | false        | false               | ts(2367)           | ja             |
| `null == undefined` | true         | true                |                    | ja             |

## Min regel för det jag missade

Skriv en mening med egna ord för varje uttryck du hade fel på.

## Tänk efter

Tre av raderna ger ett typfel i TypeScript, men JavaScript kör dem ändå. Vilka tre, och vad säger det om vad TypeScript kan och inte kan göra?
