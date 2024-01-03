/**
* 生成车牌号
*/
function generateCarPlateNumber() {
    // 定义车牌号的字符集
    const letters = "京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙";
    const numbers = "0123456789";

    // 生成车牌号的前两位字母
    const firstTwoLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
        letters.charAt(Math.floor(Math.random() * letters.length));

    // 生成车牌号的后四位数字
    let lastFourNumbers = "";
    for (let i = 0; i < 4; i++) {
        lastFourNumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // 返回生成的车牌号
    $("#licensePlateNumber").val(firstTwoLetters + lastFourNumbers);
}

function validateCarPlateNumber(carPlateNumber) {
    // 定义车牌号的字符集
    const letters = "京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙";
    const numbers = "0123456789";

    // 检查长度
    if (carPlateNumber.length !== 7) {
        toastr.warning('车牌号不符合规则!');
        return false;
    }

    // 检查字母部分
    if (!carPlateNumber.match(/^[A-Z]{2}$/)) {
        toastr.warning('车牌号不符合规则!');
        return false;
    }

    // 检查数字部分
    if (!carPlateNumber.match(/^[0-9]{4}$/)) {
        toastr.warning('车牌号不符合规则!');
        return false;
    }

    // 检查字母部分的值
    const firstLetter = carPlateNumber[0];
    const secondLetter = carPlateNumber[1];
    if (letters.indexOf(firstLetter) === -1 || letters.indexOf(secondLetter) === -1) {
        toastr.warning('车牌号不符合规则!');
        return false;
    }
    toastr.info('验证通过!');
    return true;
}
