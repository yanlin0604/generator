/**
* 生成车架号
*/
function generateVin() {
    // 生产国代码
    var countryCode = "L";

    // 汽车制造商代码
    var manufacturerCode = randomString(4, "0123456789ABCDEFGHJKLMNPRSTUVWXYZ");

    // 汽车类型代码
    var vehicleTypeCode = randomNumber(0, 16);

    // 车辆特征
    var vds = randomString(6, "0123456789ABCDEFGHJKLMNPRSTUVWXYZ");

    // 校验位
    var checksum = calculateChecksum(vds);

    // 车型年款
    var modelYear = randomNumber(2000, 2024);

    // 装配厂
    var assemblyPlant = randomNumber(1, 99);

    // 顺序号
    var sequenceNumber = randomNumber(1, 999999);

    // 生成车架号
    var vin = countryCode + manufacturerCode + vehicleTypeCode + vds + checksum + modelYear + assemblyPlant + sequenceNumber;
    $("#vin").val(vin);
}

// 计算校验位
function calculateChecksum(vds) {
    var weightTable = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var checksum = 0;
    for (var i = 0; i < vds.length; i++) {
        checksum += weightTable[i] * vds.charCodeAt(i);
    }
    checksum %= 11;
    return checksum === 10 ? 0 : checksum;
}

// 生成随机数字
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成随机字符
function randomCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// 生成随机字符串
function randomString(length, charSet) {
    var randomString = "";
    for (var i = 0; i < length; i++) {
        randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return randomString;
}

function validateVin(vin) {
    // 校验车架号长度
    if (vin.length !== 17) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验生产国代码
    if (vin[0] !== "L") {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验制造商代码
    var manufacturerCode = vin.slice(1, 5);
    if (!manufacturerCode.match(/^[0-9A-HJ-NPR-Z]{4}$/)) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验车辆类型代码
    var vehicleTypeCode = vin.slice(5, 7);
    if (!vehicleTypeCode.match(/^[0-9]{2}$/)) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验车辆特征
    var vds = vin.slice(7, 13);
    if (!vds.match(/^[0-9A-HJ-NPR-Z]{6}$/)) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验校验位
    var checksum = vin.slice(13, 14);
    var calculatedChecksum = calculateChecksum(vds);
    if (checksum !== calculatedChecksum) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验车型年款
    var modelYear = vin.slice(14, 17);
    if (!modelYear.match(/^[0-9]{4}$/)) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验装配厂
    var assemblyPlant = vin.slice(17, 18);
    if (!assemblyPlant.match(/^[0-9]{1}$/)) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 校验顺序号
    var sequenceNumber = vin.slice(18, 25);
    if (!sequenceNumber.match(/^[0-9]{7}$/)) {
        toastr.warning('车架号不符合规则!');
        return false;
    }

    // 所有校验都通过
    toastr.info('验证通过!');
    return true;
}
