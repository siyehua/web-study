let a = 10;

function count() {
    a++;
    console.log('send message', a);
    postMessage(a)
    setTimeout(count, 500)
}

count()