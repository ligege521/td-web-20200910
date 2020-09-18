// 加载页对象
var ShareViewController = function () {
    var nameArr = ['毛滢', '杨绪娇', '刘祖杨', '汤雁', '张粤普'];
    // 公共变量
    var _that = this;

    // 私有变量
    var _private = {};

    _private.pageEl = $('.m-share');
    _private.clickEl = $('.btn-save')[0];

    _private.isInit = false;

    // 初始化，包括整体页面
    _private.init = function () {
        if (_private.isInit === true) {
            return;
        }

        // var indexBox = _private.pageEl.find('.index-box');

        _private.isInit = true;
    };

    // this
    _that.this = _private.pageEl[0];

    // 随机插入内容图片
    var ranImg = Math.ceil(Math.random() * 5);
    $('.name').text(nameArr[ranImg - 1]);
    var imgUrl = require(`../../img/share/contentImg/${ranImg}.jpg`);
    $('.p-img').css('background-image', `url(${imgUrl})`);

    // 返回分享图片的数字
    _that.ranName = ranImg;

    // 保存车票点击
    _that.saveClick = function (e) {
        if (this === _private.clickEl || e.target === _private.clickEl) {
            $('.m-share-img').show();
        }
    };

    // 显示
    _that.show = function () {
        _private.pageEl.show();
    };

    // 隐藏
    _that.hide = function () {
        _that.onhide && _that.onhide();
        _private.pageEl.hide();
    };

    _private.init();
};

module.exports = ShareViewController;
