//const throttle = require('lodash.throttle');
// const _ = require('lodash');
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const add = _.add(5,6);
console.log(add);    
const myFn = () => {
    console.log('test');
}

const myNewFn = _.throttle(() => {
    console.log('test');
}, 300);


const onPlay = function(data) {
    const currentTime = player.getCurrentTime().then(function(currentTime) { 
    //console.log(currentTime);
    const currentTimeString = currentTime.toString();
    // console.log(currentTimeString);
    localStorage.setItem("videoplayer-current-time", currentTimeString);
    const savedTime = localStorage.getItem("videoplayer-current-time");
     
    // console.log(savedTime);
        // duration = the duration of the video in seconds
    }).catch(function(error) {
        // an error occurred
    });

   // data is an object containing properties specific to that event
};
    
//player.on('play', onPlay);
player.on('timeupdate', _.throttle(onPlay, 5000))

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});








    //  player.ready().then(() => {
    //   player.getDuration().then()((data) => console.log(data));
    // }).catch((err) => console.log(err));
  