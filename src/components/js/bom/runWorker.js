let worker = new Worker('./bomWorker.js');
worker.onmessage = function (event) {
    console.log("get message", event.data)
}
setTimeout(function () {
    worker.terminate()
}, 3000)
