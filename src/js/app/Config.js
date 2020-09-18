import Preload from './module/Preload.js';

var Config = {};

// ajax请求链接
Config.requireUrl = '';

// 图片路径前缀
// 如kf文件里图片不使用require时 img地址：Config.imgPath
Config.imgPath = process.env.NODE_ENV === 'handover' ? process.env.PATH : process.env.PATH + 'img/';

// 默认分享语
Config.defShare = {
    // title: '分享标题',
    // desc: '分享描述',
    // link: location.href,
    // // 分享配图
    // img: require('../../img/share.jpg'),
    // // 项目名，数据查询时候用
    // proj: 'streetgame',
    // // 填写公众号绑定的appid
    // appid: '', // 例如: wx12380ea254191f1b
    // cnzz: '' // 例如: 1259179479
};

Config.Preload = Preload;

// 预加载的图片
Config.pageImgs = {
    imgs: [
        {
            name: 'loadingBg',
            url: require('../../img/loading/bg.png')
        },
        {
            name: 'endBg',
            url: require('../../img/end/bg.png')
        },
        {
            name: 'shareBg',
            url: require('../../img/share/bg.png')
        },
        {
            name: 'donateBg',
            url: require('../../img/donate/bg.png')
        },
        {
            name: 'donate',
            url: require('../../img/donate/donate.png')
        },
        {
            name: 'shareImgBg',
            url: require('../../img/share/shareImg/bg.png')
        },
        {
            name: 'shareImg1',
            url: require('../../img/share/shareImg/share_img_1.jpg')
        },
        {
            name: 'shareImg2',
            url: require('../../img/share/shareImg/share_img_2.jpg')
        },
        {
            name: 'shareImg3',
            url: require('../../img/share/shareImg/share_img_3.jpg')
        },
        {
            name: 'shareImg4',
            url: require('../../img/share/shareImg/share_img_4.jpg')
        },
        {
            name: 'shareImg5',
            url: require('../../img/share/shareImg/share_img_5.jpg')
        }
    ],
    sprites: [
        /*
        {
            el: $('.m-game .kf-game-video'),
            pathPrefix: Config.imgPath,
            postfix: 'jpg'
        }
        */
    ],
    keyimgs: [
        /*
        {
            el: $('.m-game .kf-game-video'),
            pathPrefix: Config.imgPath,
            postfix: 'jpg'
        }
        */
    ]
};

module.exports = Config;
