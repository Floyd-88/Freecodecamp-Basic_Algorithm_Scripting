/*Вам дана переменная, celsiusпредставляющая температуру в градусах Цельсия. Используйте уже определенную переменную fahrenheitи 
назначьте ей температуру по Фаренгейту, эквивалентную заданной температуре по Цельсию. Используйте упомянутый выше алгоритм, 
чтобы преобразовать температуру по Цельсию в градусы Фаренгейта.*/

/*function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32
  return fahrenheit;
}

console.log(convertToF(30))*/;



/*Переверните предоставленную строку.
Возможно, вам придется превратить строку в массив, прежде чем вы сможете ее изменить.
Ваш результат должен быть строкой.*/

/*function reverseString(str) {
return  str.split("").reverse().join("")

}
console.log(reverseString("hello"));*/


/*Если целое число представлено буквой n, факториал представляет собой произведение всех положительных целых чисел, меньших или равных n.
Факториалы часто представляются в сокращенной записиn!
Например:5! = 1 * 2 * 3 * 4 * 5 = 120
В функцию будут переданы только целые числа, большие или равные нулю.*/

/*function factorialize(num) {
let result = 1;
for(let i=1; i<=num; i++) {
result *= i; 
}
  return result;
}

console.log(factorialize(3));*/

/*function factorialize(num) {
if(num === 1) {
	return 1
	}else {
		return num * factorialize(num - 1)
	}
}

console.log(factorialize(5));*/


/*Возвращает длину самого длинного слова в предоставленном предложении.
Ваш ответ должен быть числом.*/

/*function findLongestWordLength(str) {
  return Math.max.apply(null, str.split(" ").map(i => i.length))
}

console.log(findLongestWordLength("The quick fox jumped over the lazy dog"));*/

/*
Возвращает массив, состоящий из наибольшего числа из каждого предоставленного подмассива. Для простоты предоставленный массив 
будет содержать ровно 4 подмассива.
Помните, что вы можете перебирать массив с помощью простого цикла for и обращаться к каждому члену с помощью синтаксиса массива arr[i].*/

/*function largestOfFour(arr) {
	let arrMax =[]
for(let i=0; i < arr.length; i++) {
	arrMax.push(Math.max.apply(null, arr[i]));
}
 return arrMax;
}*/

/*function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
      console.log(prev)
    });
  });
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));*/




/*Проверьте, strзаканчивается ли строка (первый аргумент, ) заданной целевой строкой (второй аргумент, target).
Эту задачу можно решить с помощью .endsWith()метода, представленного в ES2015. Но для целей этой задачи мы хотели бы, чтобы вы 
вместо этого использовали один из методов подстроки JavaScript.*/

/*function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEnding("Bastian", "an"));*/



/*Повторить заданную строку str(первый аргумент) несколько numраз (второй аргумент). Возвращает пустую строку, если numне 
является положительным числом. Для целей этой задачи не используйте встроенный .repeat()метод.*/

/*function repeatStringNumTimes(str, num) {
  let x = 0;
  let result = "";
  while(x < num) {
  	result += str;
  	x += 1;
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));
*/

/*Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть усеченную 
строку с ...окончанием.*/

/*function truncateString(str, num) {
 return (str.length > num) ? str.slice(0, num) + "..." : str.slice(0, num);  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));*/




/*Создайте функцию, которая просматривает массив arrи возвращает первый элемент в нем, прошедший «проверку на истинность». Это 
означает, что для данного элемента x«проверка на истинность» пройдена, если func(x)есть true. Если ни один элемент не прошел 
тест, верните undefined.*/

/*function findElement(arr, func) {
  return arr.filter(i => func(i))[0]
}

console.log(findElement([1, 2, 1, 4], num => num % 2 === 0));*/


/*Проверьте, классифицируется ли значение как логический примитив. Возврат trueили false.
Булевы примитивы trueи false.*/

/*function booWho(bool) {
  return typeof(bool) == "boolean"
}

console.log(booWho(false));*/


/*Вернуть предоставленную строку с заглавной первой буквой каждого слова. Убедитесь, что остальная часть слова находится в 
нижнем регистре. В этом упражнении вы также должны писать с большой буквы соединительные слова, такие как theи of.*/

/*function titleCase(str) {
let result = str.split(" ").map(i => i[0].toUpperCase() + i.slice(1).toLowerCase())
  return result.join(" ")

}
console.log(titleCase("I'm a little tea pot"));*/




/*Вам даны два массива и индекс.
Скопируйте каждый элемент первого массива во второй массив по порядку.
Начните вставлять элементы с индекса nвторого массива.
Вернуть полученный массив. Входные массивы должны оставаться неизменными после запуска функции.*/

/*function frankenSplice(arr1, arr2, n) {
let arrNew = [...arr2]
 let x = arrNew.splice(0, n)
 return x.concat(arr1, arrNew)

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));*/



/*Удалить все ложные значения из массива.
Ложными значениями в JavaScript являются false, null, 0, "", undefinedи NaN.
Подсказка: попробуйте преобразовать каждое значение в логическое значение.*/


/*function bouncer(arr) {
  return arr.filter(i => Boolean(i))
}


console.log(bouncer([7, "ate", "", false, 9]));*/




/*Возвращает наименьший индекс, по которому значение (второй аргумент) должно быть вставлено в массив (первый аргумент) после 
его сортировки. Возвращаемое значение должно быть числом.
Например, getIndexToIns([1,2,3,4], 1.5)должен возвращаться , 1потому что он больше 1(индекс 0), но меньше 2(индекс 1).*/

/*function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b)
  return arr.indexOf(num)
}

console.log(getIndexToIns([40, 30, 70, 100, 60], 50));*/


/*Возврат true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.
Например ["hello", "Hello"], должно возвращаться значение , trueпоскольку все буквы во второй строке присутствуют в первой 
без учета регистра. Аргументы ["hello", "hey"]должны возвращаться false, потому что строка helloне содержит расширение y.
Наконец, ["Alien", "line"]должен вернуться , trueпотому что все буквы lineприсутствуют в Alien.*/

/*function mutation(arr) {
  let str_1 = arr[0].toLowerCase().split("");
  let str_2 = arr[1].toLowerCase().split("");
return str_2.every(i => str_1.includes(i))
}

console.log(mutation(["hello", "elos"]));*/


/*Напишите функцию, которая разбивает массив (первый аргумент) на группы длиной size(второй аргумент) и возвращает их в виде
 двумерного массива.*/

 function chunkArrayInGroups(arr, size) {
 	let new_arr = [];
 	while(arr.length > 0) {
 		new_arr.push(arr.splice(0, size));
 	}
 	return new_arr;
 }

console.log(chunkArrayInGroups(["a", "b", "c", "d", "g", "h", "nom"], 3));