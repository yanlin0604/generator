/**
* 生成车型
*/
function getRandomCarModel() {
    // 创建一个包含汽车模型名称的数组
    const carModels = [
        "特斯拉 Model 3",
        "福特 F-150",
        "丰田凯美瑞",
        "本田思域",
        "丰田卡罗拉",
        "奔驰 C 级",
        "宝马 3 系",
        "奥迪 A4",
        "大众高尔夫",
        "日产 Sentra",
        "马自达 3",
        "斯巴鲁 Impreza",
        "起亚 Forte",
        "现代伊兰特",
        "特斯拉 Model Y",
        "雪佛兰 Bolt",
        "现代 Kona EV",
        "丰田 RAV4 Prime",
        "福特 Escape PHEV",
        "雪佛兰 Volt",
        "奔驰 S 级",
        "宝马 7 系",
        "奥迪 A8",
        "法拉利 488",
        "兰博基尼 Aventador",
        "迈凯轮 720S",
        "保时捷 911",
        "阿斯顿·马丁 DBS Superleggera",
        "法拉利 F8 Tributo",
        "兰博基尼 Huracan STO",
        "迈凯轮 765LT",
        "保时捷 911 GT3 RS",
        "阿斯顿·马丁 Vantage F1 Edition",
        "法拉利 F8 Spider",
        "兰博基尼 Huracan EVO Spyder",
        "迈凯轮 720S Spider",
        "保时捷 911 Carrera S",
        "阿斯顿·马丁 DBS Superleggera Volante",
        "法拉利 F8 Tributo Spider",
        "兰博基尼 Huracan STO Spider",
        "迈凯轮 765LT Spider",
        "保时捷 911 GT3 RS Spider",
        "阿斯顿·马丁 Vantage F1 Edition Volante",
        "特斯拉 Model Y Performance",
        "雪佛兰 Bolt EUV",
        "现代 Kona Electric",
        "丰田 RAV4 Prime Plus",
        "福特 Escape PHEV Platinum",
        "雪佛兰 Volt Premier",
        "奔驰 S 500",
        "宝马 740i",
        "奥迪 A8 L",
        "法拉利 812 Superfast",
        "兰博基尼 Aventador SVJ",
        "迈凯轮 720S Spider",
        "保时捷 911 Turbo S",
        "阿斯顿·马丁 DBS Superleggera",
        "法拉利 F8 Tributo",
        "兰博基尼 Huracan STO",
        "迈凯轮 765LT",
        "保时捷 911 GT3 RS",
        "阿斯顿·马丁 Vantage F1 Edition",
        "法拉利 F8 Spider",
        "兰博基尼 Huracan EVO Spyder",
        "迈凯轮 720S Spider",
        "保时捷 911 Carrera S",
        "阿斯顿·马丁 DBS Superleggera Volante",
        "法拉利 F8 Tributo Spider",
        "兰博基尼 Huracan STO Spider",
        "迈凯轮 765LT Spider",
        "保时捷 911 GT3 RS Spider",
        "阿斯顿·马丁 Vantage F1 Edition Volante",
        "特斯拉 Model 3 Long Range",
        "特斯拉 Model Y Long Range",
        "特斯拉 Model S Long Range",
        "特斯拉 Model X Long Range",
        "特斯拉 Model 3 Performance",
        "特斯拉 Model Y Performance",
        "特斯拉 Model S Plaid",
        "特斯拉 Model X Plaid",
        "福特 F-150 Raptor",
        "福特 F-150 Limited",
        "福特 F-150 Platinum",
        "丰田 Tundra TRD Pro",
        "丰田 Tundra Limited",
        "丰田 Tundra Platinum",
        "日产 Titan Pro-4X",
        "日产 Titan SL",
        "日产 Titan Platinum Reserve",
    ];

    // 使用 Math.random() 方法生成随机索引
    const randomIndex = Math.floor(Math.random() * carModels.length);

    // 返回随机的汽车模型名称
    $("#vehicleTypeName").val(carModels[randomIndex]);
    toastr.info('已复制到剪贴板!');
    copyToClipboard(carModels[randomIndex]);
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