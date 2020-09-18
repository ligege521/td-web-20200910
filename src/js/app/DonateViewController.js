// 加载页对象
var DonateViewController = function () {
    // 公共变量
    var _that = this;

    // 私有变量
    var _private = {};

    _private.pageEl = $('.donate-warp');

    _private.isInit = false;

    // 初始化，包括整体页面
    _private.init = function () {
        if (_private.isInit === true) {
            return;
        }

        // var indexBox = _private.pageEl.find('.index-box');

        _private.isInit = true;
    };

    _that.click = function () {

    };
    _that.this = _private.pageEl;

    // 分享页面点击选择金额
    _private.pageEl.click(function (e) {
        var clickIndex = null;
        var bgIndex = null;
        var imgUrl = null;
        if (e.target.localName === 'a') {
            $('.btn-money').each(function (index, item) {
                item.style.backgroundImage = '';
                clickIndex = (e.target === item) ? item : clickIndex;
            });
            bgIndex = $(clickIndex).text();
            imgUrl = require(`../../img/donate/${bgIndex}.png`);
            $(clickIndex).css('background-image', `url(${imgUrl})`);
            $('.hover-money').val(bgIndex);
        }
    });
    // 显示
    _that.show = function (parameter = null) {
        _private.pageEl.show();
    };

    // 隐藏
    _that.hide = function (parameter = null) {
        _that.onhide && _that.onhide();
        _private.pageEl.hide();
    };

    _private.init();
};

module.exports = DonateViewController;
