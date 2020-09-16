// 加载页对象
var ShareViewController = function () {
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
