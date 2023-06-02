// Task 1. Выведите в консоль числа от 1 до n используя цикл for. (Дано: n = 10)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Task 2. Выведите в консоль числа от 1 до n используя цикл while. (Дано: n = 10)

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Task 3. Используя цикл while, выведите в консоль числа от n до 1. (Дано: n = 10)

// let n = 10;

// while (n >= 1) {
//   console.log(n);
//   n--;
// }

// Task 4. Напишите цикл, который выводит все четные числа от 1 до n. (Дано: n = 50)

// let n = 50;

// for (let i = 2; i <= n; i += 2) {
//   console.log(i);
// }

// Task 5. Выведите в консоль таблицу умножения от 1 до n используя вложенные циклы. (Дано: n = 10)

// let n = 10;

// for (let a = 1; a <= n; a++) {
//   for (let b = 1; b <= n; b++) {
//     let result = a * b;
//     console.log(a + " * " + b + " = " + result);
//   }
// }

// Task 6. Вычислите факториал числа n, используя цикл. (Дано: n = 7)

// let n = 7;
// let factorial = 1;

// for (let a = 1; a <= n; a++) {
//   factorial *= a;
// }

// console.log("Факториал числа " + n + " равен: " + factorial);

// Task 7. Выведите первые n чисел последовательности Фибоначчи. (Дано: n = 10)

// let n = 10;
// let fibonacciSequence = [];

// for (let a = 0; a < n; a++) {
//   if (a < 2) {
//     fibonacciSequence.push(a);
//   } else {
//     let num = fibonacciSequence[a - 1] + fibonacciSequence[a - 2];
//     fibonacciSequence.push(num);
//   }
// }

// console.log("Первые " + n + " чисел последовательности Фибоначчи: " + fibonacciSequence.join(", "));

// Task 8. Выведите все простые числа от 1 до n. (Дано: n = 100)

// let n = 100;

// for (let a = 2; a <= n; a++) {
//  let isPrime = true;

//   for (let b = 2; b < a; b++) {
//     if (a % b === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(a);
//   }
// }

// Task 9. Создайте массив чисел от 1 до n, а затем выведите только те числа, которые делятся на 5 без остатка. (Дано: n = 100)

// let n = 100;
// let numbers = [];

// for (let x = 1; x <= n; x++) {
//   numbers.push(x);
// }

// let divisibleByFive = numbers.filter(function(number) {
//   return number % 5 === 0;
// });

// console.log(divisibleByFive);

// Task 10. Дан массив чисел. Вычислите сумму чисел в этом массиве. (Дано: массив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// console.log("Сумма чисел в массиве: " + sum);
