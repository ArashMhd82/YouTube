const screen = document.getElementById('videoScreen');
const videoListScreen = document.getElementById('mainPageVideoContainer');
screen.style.transition = '0.5s';
screen.style.height = '0px';

let screen_height ;

if (window.innerWidth < 1024){
    screen_height = 'calc(100% - 160px)';
}else if (window.innerWidth >= 1024){
    screen_height = 'calc(100% - 80px)';
}else{
    console.log("side Bar Error!")
}
let touchCount = 0
function playVideo(){
    touchCount ++
    if(touchCount % 2 == 1){
        screen.style.height = screen_height;
        videoListScreen.style.display = 'none';
    }else{
        videoListScreen.style.display = 'flex';
        screen.style.height = '0px';
    }
}