(function () {
    "use strict";

    window.App.videos = [
        {
            title: 'Big Buck Bunny',
            url: 'http://fs.to/get/dl/6jw62sxqdzrlo1ct1x3tvoyjq.0.521872670.2185543202.1432977047/The+Equalizer.2014.BluRay.1080p.mkv',
            type: 'vod'
        },
        {
            title: 'Elephants Dream',
            url: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
            type: 'vod'
        },
        {
            title: 'Europa plus',
            url: 'http://europaplus.cdnvideo.ru/europaplus-live/eptv_main.sdp/playlist.m3u8',
            type: 'hls'
        },
        {
            title: 'PIK TV',
            url: 'http://phone.pik-tv.com/live/mp4:piktv3pik3tv/playlist.m3u8',
            type: 'hls'
        },
        {
            title: 'Redbull',
            url: 'http://live.iphone.redbull.de.edgesuite.net/webtvHD.m3u8',
            type: 'hls'
        }

        /* //example drm
         ,{
         title: 'Armageddon',
         url: 'http://example.com/armageddon.wvm',
         type: 'vod',
         drm: {
             type: 'widevine',
             url: 'http://example.com/GetEMMs.cgi',
             streamID: '123',//optional
             deviceType: 'tv',//optional
             portalID: 'portalname',//optional
             storeFront: 'storeFront'//optional
         }
         }
         */
    ];
})();