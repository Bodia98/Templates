var time = 3, cc = 1;
$(window).scroll(function () {
    $('#counter').each(function () {
        var
            cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if(cPos < topWindow + 200){
            if (cc < 2){
                $('.number').addClass('viz');
                $('.number').each(function () {
                    var
                        i = 1,
                        istep = 1,  // створюємо змінну для покрокового збільшення цифр
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this), inter;
                    if (num.toString().length > 3) { // Якщо кількість цифр більше 3
                        istep = 8; // то крок прокрутки буде дорівнювати, наприклад, 8
                    }
                    inter = setInterval(function () {
                        if (i <= num) {
                            that.html(i);
                        } else {
                            cc += 2;
                            that.html(num); /*! Примусово встановлюємо кінцеве значення, тим самим позбавляючи від похибки розрахунку */
                            clearInterval(inter);
                        }
                        i += istep; // збільшуємо на заданий крок змінну
                    }, step * istep); // множимо для прискорення збільшення великих чисел
                });
            }
        }
    });
});

























