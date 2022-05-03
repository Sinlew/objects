/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
    }
    if (data.gender == 'male' && data.income == undefined) {
        data.income = 100000;
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let obj11 = Object.keys(obj1);
    let obj21 = Object.keys(obj2);
    let obj31 = Object.keys(obj3);
    let obj22 = obj11.concat(obj21, obj31);
    let obj23 = obj22.sort();

    return obj23;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let objfin = [];
    for (var i = 0; i < count; i++) {
        let obj1 = JSON.parse(JSON.stringify(obj));
        obj1.id = i;
        let obj2 = { ...obj1 };
        objfin.push(obj1);
    }
    return objfin;
}
