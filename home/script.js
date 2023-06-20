setInterval(function () {
    var nowtime = new Date();
    var h = nowtime.getHours();//得到小时数
    var m = nowtime.getMinutes();//得到分钟数
    var s = nowtime.getSeconds();//得到秒数
    // 判断是否小于10,是则在前添加0 
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}, 1000);

//添加滚动事件监听器
window.addEventListener('scroll', function () {
    var ul = document.querySelector('ul');
    if (window.scrollY >= 200) {
        ul.style.background = 'rgba(255,255,255,0.2)';// 修改
        ul.style.top = '12px';
        ul.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    } else {
        ul.style.background = ''; // 恢复默认
        ul.style.top = '';
        ul.style.boxShadow = '';
        ul.style.boxShadow = ' ';
    }
});

var videoIndex = 0;
var videos = ["image/bgv/1.mp4", "image/bgv/2.webm", "image/bgv/3.mp4", "image/bgv/4.mp4"]; // 视频文件的路径数组
function nextVideo() {
    var videoPlayer = document.getElementById("videoPlayer");
    videoIndex++; // 切换到下一个视频
    if (videoIndex >= videos.length) {
        videoIndex = 0; // 如果已经到达数组的末尾，切换回第一个视频
    }
    videoPlayer.src = videos[videoIndex]; // 更新视频的路径
}