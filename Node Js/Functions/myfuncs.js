export const mathsCal = (number1, number2 ,number3,number4) => {

    let num = number1 + number2 * 5;

    if(number3) {
        num += number3 - 2;
    }

    if (number4) {
        num *= number4
    }

    return num;

}