/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  let area = 0
  area = l1 * l2
  return area
}

console.log("L'area del rettangolo è " + area(15, 73))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (i1, i2) {
  let sum = 0
  if (i1 !== i2) {
    sum = i1 + i2
    return sum
  } else {
    sum = (i1 + i2) * 3
    console.log(
      'ATTENZIONE, si stanno sommando due ' +
        i1 +
        '!! Il risultato sarà il triplo della loro somma!'
    )
  }
  return sum
}

console.log('La somma di i1 e i2 è pari a ' + crazySum(15, 12))
console.log('La somma di i1 e i2 è pari a ' + crazySum(3, 3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (p) {
  let diff = 0
  if (p <= 19) {
    diff = Math.abs(p - 19)
    return diff
  } else {
    diff = Math.abs(p - 19) * 3
    console.log(
      'ATTENZIONE, il numero fornito (' +
        p +
        ') è maggiore di 19!! La differenza assoluta è moltiplicata per 3!'
    )
  }
  return diff
}

console.log('La differenza assoluta di p e 19 è pari a ' + crazyDiff(5))
console.log('La differenza assoluta di p e 19 è pari a ' + crazyDiff(22))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  let boundary
  if ((n > 20 && n <= 100) || n === 400) {
    boundary = 'true'
    return boundary
  } else {
    boundary = 'false'
    return boundary
  }
}

//   switch (n) {
//     case n < 20 && n <= 100:
//       boundary = 'true'
//       return boundary
//     case n === 400:
//       boundary = 'true'
//       return boundary
//     default:
//       boundary = 'false'
//       return boundary
//   }

console.log(
  'Il numero che si sta inserendo è compreso fra 20 e 100, o uguale a 400: ' +
    boundary(23)
)
console.log(
  'Il numero che si sta inserendo è compreso fra 20 e 100, o uguale a 400: ' +
    boundary(400)
)
console.log(
  'Il numero che si sta inserendo è compreso fra 20 e 100, o uguale a 400: ' +
    boundary(133)
)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  let sentence = ''
  if (
    str.charAt(0) === 'E' &&
    str.charAt(1) === 'P' &&
    str.charAt(2) === 'I' &&
    str.charAt(3) === 'C' &&
    str.charAt(4) === 'O' &&
    str.charAt(5) === 'D' &&
    str.charAt(6) === 'E'
  ) {
    return (sentence = str)
  } else {
    sentence = 'EPICODE' + str
    return sentence
  }
}

console.log(epify('EPICODE ha ottimi insegnanti!'))
console.log(epify(": davvero un'ottima scuola!!"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (np) {
  let check
  if (np % 3 === 0 || np % 7 === 0) {
    check = 'Il numero inserito è divisibile per 3 o 7'
    return check
  } else {
    check = 'Il numero inserito non è divisibile per 3 o 7'
  }
  return check
}

console.log(check3and7(20))
console.log(check3and7(49))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  const reverse = []
  let n = 0
  for (let i = str.length - 1; i === 0; i--) {
    reverse[n] === str.charAt(i)
    n = n + 1
  }
  newStr = reverse.join()
  return newStr
}

console.log(reverseString('EPICODE'), newStr)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

// const upperFirst = function (str) {
//   let newStr = ''
//   let x = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === ' ')
//         x = str.charAt(i+1)
//         newStr.charAt(i+1) = x.toUpperCase()
//   }
//   return newStr
// }

// console.log(upperFirst('oggi gli esercizi sono molto difficili'), newStr)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
    let newStr = ''
    let n = 0
    for (let i = 1; i < str.length - 1; i++) {
        newStr.charAt(n) = str.charAt(i)
n++
    }
    return newStr
  }
  
  console.log(cutString('EPICODE'), newStr)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (r) {
  const array = []
  let randomNumber = 0
  for (let i = 0; i < r; i++) {
    array[i] = Math.random() * 10
  }
  return array
}

console.log(giveMeRandom(20))
