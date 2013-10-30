var restify = function (el) {
    var item = document.getElementById('item'),
        content = document.getElementById('content');

    var conf = {
        method: el.innerText,
        url: '/item/' + item.value,
        data: content.value
    };
    
    ajax(conf, alert, alert);
};

var ajax = function (config, callback, fallback) {
    var xhr = new XMLHttpRequest(),
        data;

    xhr.onload = function () {
        if (this.status === 200 || this.status === 304) {
            callback && callback(this.responseText);
        } else {
            fallback && fallback(this.status);
        }
    };

    xhr.open(config.method, config.url, true);

    if (config.method === 'POST' || config.method === 'PUT') {
        data = config.data;
    }

    xhr.send(data);
};
