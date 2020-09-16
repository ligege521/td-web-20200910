/*
*
*  引入lib库文件和LESS文件
*  必须要引入,过滤器会过滤lib文件夹里面的JS文件,做一个简单的复制
*  复制到相应的文件夹
*  引入的less会对less进行编译存放到css文件夹
* */
import '../less/style.less';

/** The animate() method */
import '../../util/fx';
/** Animated show, hide, toggle, and fade*() methods. */
import '../../util/fx_methods';

// 引入的包根据实际情况而定
import LoadViewController from './app/LoadViewController';
// import TD from './app/module/TD';
import IndexViewController from './app/IndexViewController';
import MediaSprite from '../module/MediaSprite';
import VideoTwoViewController from './app/VideoTwoViewController';
import DonateViewController from './DonateViewController';
import ShareViewController from './app/ShareViewController';
import ShareImgViewController from './ShareImgViewController';

// 页面级对象池
var pagePool = {
    loadView: null,
    indexView: null,
    videoTwoView: null,
    DonateView: null,
    shareView: null,
    shareImgView: null
};

// 向页面插入第一个视频
let media = new MediaSprite({
    wrap: '.m-video',
    type: 'video',
    src: '../media/vh.mp4',
    classname: 'video sizcont abcter',
    ifLoadAni: true,
    timeline: {
        'first': {
            begin: 47.0,
            end: 49.0
        },
        'second': {
            begin: 10.0,
            end: 15.0
        }
    }
});

// 第二个视频
let mediaTwo = new MediaSprite({
    wrap: '.m-video-two',
    type: 'video',
    src: '../media/vl.mp4',
    classname: 'video-two sizcover abcter',
    timeline: {
        'first': {
            begin: 0.0,
            end: 49.0
        }
    }
});

window.onload = function () {
    // load页面
    var loadPageBack = function () {
        pagePool.loadView = pagePool.loadView || new LoadViewController();
        pagePool.indexView = pagePool.indexView || new IndexViewController();
        pagePool.videoTwoView = pagePool.videoTwoView || new VideoTwoViewController();
        pagePool.donateView = pagePool.donateView || new DonateViewController();
        pagePool.shareView = pagePool.shareView || new ShareViewController();
        pagePool.shareImgView = pagePool.shareImgView || new ShareImgViewController();
        var loadView = pagePool.loadView;
        var videoView = pagePool.videoTwoView;
        var shareView = pagePool.shareView;
        var shareImgView = pagePool.shareImgView;
        // var donateView = pagePool.donateView;
        loadView.show();
        // 点击开启童话
        console.log('aaa');
        $('.m-loading')[0].addEventListener('click', function (){
            loadView.hide();
            $('.btn-skip').css('display', 'block');
            media.play();
        });

        // 点击跳过
        $('.btn-skip')[0].addEventListener('click', function () {
            media.gotoAndPlay('first', '', false);
            this.style.display = 'none';
        });
        // 第一个视频播放结束
        media.dom.addEventListener('ended', function () {
            if (this.parentNode) {
                this.parentNode.style.display = 'none';
            } else {
                this.style.display = 'none';
            }
            mediaTwo.play();
        });
        // 童话成真
        $('.btn-want-donate')[0].addEventListener('click', function () {
            console.log(videoView.this);
            // $('.donate-warp').css('z-index', '2');
            videoView.this.css({
                'opacity': '0',
                'visibility': 'hidden',
                'display': 'none'
            });
            $('.money-warp').removeClass('money-top');
        });
        // 取消
        $('.btn-close')[0].addEventListener('click', function () {
            // console.log('点击了取消');
            videoView.this.css({
                'opacity': '1',
                'visibility': 'visible',
                'display': 'block'
            });
            $('.money-warp').addClass('money-top');
        });
        // 捐款页
        $('.btn-donate')[0].addEventListener('click', function () {
            var donateView = pagePool.donateView;
            donateView.hide();
        });

        // 分享页
        $('.btn-save')[0].addEventListener('click', shareView.saveClick);

        // 分享图片页
        $('.m-share-img')[0].addEventListener('click', shareImgView.clickHide);
        // loadView.onhide = indexPageBack;
        // loadView.load();
    };
    // var indexPageBack = function () {
    //     var indexView = pagePool.indexView;
    //     indexView.show();
    //     // indexView.onhide = gamePageBack;
    // };

    loadPageBack();
};
