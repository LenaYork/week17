let date = new Date(); //сейчас как пример
// let now = new Date(); //сейчас

function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    if (diff < 1000 ) {
        console.log("меньше минуты");
    } else if (diff < 60000) {
        let s = countSeconds(diff);
        console.log(`${s} сек. назад`);
    } else if (diff < 3600000 ) {
        let m = countMinutes(diff);
        console.log(`${m} мин. назад`);
    } else {
        let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        console.log(`${date.getDate()}.${month}.${date.getFullYear()} ${date.getHours()}:${minutes}`)

    }
    
}

function countMinutes(diff) {
    let hours = Math.round(diff / 3600000) // часы
    let hoursLeft = diff % 3600000; // остаток от часов
    let minutes = Math.round(hoursLeft / 60000) // минуты
    return minutes;
}

function countSeconds(diff) {
    let hours = Math.round(diff / 3600000) // часы
    let hoursLeft = diff % 3600000; // остаток от часов
    let minutes = Math.round(hoursLeft / 60000) // минуты
    let minutesLeft = hoursLeft % 60000 //остаток от минут
    let seconds = Math.round(minutesLeft / 1000); //секунды
    return seconds;
}

formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000));
formatDate(new Date(new Date - 86400* 4 * 1000));