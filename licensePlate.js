/**
* 生成车牌号
*/
function generateCarPlateNumber() {
    // 定义车牌号的各个部分
    const province = ["京", "津", "沪", "渝", "冀", "晋", "蒙", "辽", "吉", "黑", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "桂", "琼", "川", "贵", "云", "藏", "陕", "甘", "青", "宁", "新"][Math.floor(Math.random() * 31)];
    const city = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"][Math.floor(Math.random() * 26)];
    const number = Math.floor(Math.random() * 10000) + 1000;
    // 返回生成的车牌号
    $("#licensePlateNumber").val(`${province}${city}${number}${"X"}`);
    toastr.info('已复制到剪贴板!');
    copyToClipboard(`${province}${city}${number}${"X"}`);
}

function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}