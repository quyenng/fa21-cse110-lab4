
function run() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time);
}
var t = setInterval(run,1000);