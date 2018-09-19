/* Структура html такая data-max - Число максимальное, т.е. лимит
<div class="progress_bar" data-max="100000">
   <div class="fill" style="width: 0;"></div>
</div>
--------------------
// Css такой
.progress_bar {
    width: 100%;
    height: 30px;
    background: #5c5e85;
    position: relative;
    border-radius: 20px;
}
.progress_bar .fill {
    position: absolute;
    background: rgb(36, 199, 253);
    background: -moz-linear-gradient(90deg, rgb(36, 199, 253) 50%, rgb(36, 124, 253) 100%);
    background: -webkit-linear-gradient(90deg, rgb(36, 199, 253) 50%, rgb(36, 124, 253) 100%);
    background: -o-linear-gradient(90deg, rgb(36, 199, 253) 50%, rgb(36, 124, 253) 100%);
    background: -ms-linear-gradient(90deg, rgb(36, 199, 253) 50%, rgb(36, 124, 253) 100%);
    background: linear-gradient(180deg, rgb(36, 199, 253) 50%, rgb(36, 124, 253) 100%);
    left: 0;
    height: 30px;
    transition: 0.3s;
    border-radius: 20px;
    z-index: 10;
    text-align: right;
    padding-right: 10px;
    padding-left: 7px;
    padding-top: 6px;
    color: #fff;
    font-size: 20px;
}
*/

//Соственно в параметр now передаете текущее значение
//Заполнение идет с помощью свойства width

function progress(now) {
    var max = $('.progress_bar').data('max'),
        result = 0;
    if(now === 0){
        $('.progress_bar .fill').css('width','0')
    }
    if(now < max){
        result = (now*100)/max;
        $('.progress_bar .fill').css('width', result+'%');
        $('.progress_bar .fill').html(now+'$');
    }
    if(now === max){
        $('.progress_bar .fill').css('background','#27ae61').css('width', '100%');
        $('.progress_bar .fill').html(now+'$');
    }

}



/*  
const progress = (now, element) => {
    const max = +element.dataset.max,
        bar = element.querySelector('.fill'),
        doneColor = '#27ae61'

    const fill = style => {
        bar.style = { ...bar.style, ...style }
        bar.textContent = now + '$'
    }

    now < max ? fill({ width: now + '%'}) : fill({ width: now + '%', background: doneColor })
}
*/
