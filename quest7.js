const myText = `
Гедонизм категорически создает напряженный позитивизм. Адаптация индуктивно дискредитирует интеллект. 
Суждение реально рефлектирует закон внешнего мира. Сомнение подрывает трансцендентальный закон внешнего мира. Освобождение философски преобразует знак.

Отвечая на вопрос о взаимоотношении идеального ли и материального ци, Дай Чжень заявлял, что ощущение мира заполняет типичный мир. Сомнение выводит данный структурализм. 
Актуализация подчеркивает типичный гедонизм, tertium nоn datur. Реальная власть осмысляет даосизм. Отношение к современности нетривиально. 
Язык образов методологически подрывает субъективный смысл жизни, при этом буквы А, В, I, О символизируют соответственно общеутвердительное, общеотрицательное, 
частноутвердительное и частноотрицательное суждения.

Заблуждение, конечно, реально оспособляет смысл жизни, при этом буквы А, В, I, О символизируют соответственно общеутвердительное, общеотрицательное, частноутвердительное 
и частноотрицательное суждения. Дистинкция категорически транспонирует принцип восприятия, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего 
еще немецкого рабочего движения. Созерцание, как следует из вышесказанного, амбивалентно порождает и обеспечивает конфликт. Интересно отметить, что здравый смысл транспонирует 
трагический закон внешнего мира. Созерцание понимает под собой сенсибельный здравый смысл, открывая новые горизонты. Суждение преобразует дедуктивный метод.
`;

/*
Задание 7: Замена строк
Написать функцию myReplace(s1, s2, s3), которая будет принимать три строковых аргумента s1, s2, s3 
и заменять в первом аргументе s1 все слова, совпадающие со вторым аргументом s2, на третий аргумент s3.

*/

function myReplace(s1, s2, s3){
    let result = "";
    //Провеяем, что аргументы String, если хоть один не String выводим ошибку
    if (typeof s1 != "string" || typeof s2 != "string" || typeof s3 != "string"){
        console.error("Invalid arguments of myReplace!")
        return null;
    }
    //Создаём регулярное выражение для поиска - глобальное регистронезависимое
    key = new RegExp(`${s2}`, 'gi');
    //Проходимся по s1, заменяем регулярное выражение на s3
    result = s1.replace(key, s3);
    //Возвращаем результат
    return result;
}

//Проверяем и выводим результат в консоль
console.log(myReplace(myText, "гедОНизм", "героизм"));
console.log(myReplace(myText, "соответственно", "непросредственно"));