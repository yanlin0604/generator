/**
* 生成发动机号
*/
function generateEngineNumber() {
    // 生成发动机号的首字母
    const prefix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const prefixIndex = Math.floor(Math.random() * prefix.length);
    const prefixChar = prefix[prefixIndex];

    // 生成发动机号的后七位数字
    const suffix = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    ];
    const suffixArray = [];
    for (let i = 0; i < 7; i++) {
        suffixArray.push(suffix[Math.floor(Math.random() * suffix.length)]);
    }
    const suffixStr = suffixArray.join('');

    $("#engineNumber").val(`${prefixChar}${suffixStr}`);
}

function validateEngineNumber(engineNumber) {
    // 检查发动机号的长度
    if (engineNumber.length != 8) {
        toastr.warning('发动机号格式不正确!');
        return false;
    }

    // 检查发动机号的首字母
    if (!engineNumber[0].match(/^[A-Z]$/)) {
        toastr.warning('发动机号格式不正确!');
        return false;
    }

    // 检查发动机号的后七位数字
    if (!engineNumber[1].match(/^[0-9]$/)) {
        toastr.warning('发动机号格式不正确!');
        return false;
    }

    // 检查发动机号的校验码
    let checkCode = engineNumber[7];
    const weight = [8, 7, 6, 5, 4, 3, 2, 1];
    const sum = weight.reduce((acc, weight, index) => acc + (engineNumber[index] * weight), 0);
    const mod = sum % 11;
    if (mod === 10) {
        checkCode = 'X';
    } else {
        checkCode = mod.toString();
    }
    if (checkCode !== engineNumber[7]) {
        toastr.warning('发动机号格式不正确!');
        return false;
    }

    // 校验通过
    toastr.info('验证通过!');
    return true;
}