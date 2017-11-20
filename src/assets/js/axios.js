import axios from 'axios';

function generatorUrl(url, data) {
    if (JSON.stringify(data) == '{}') return url;
    let queryArr = [];
    for(let i in data) {
        queryArr.push(`${i}=${data[i]}`)
    }
  console.log('------ generatorUrl -----');
  console.log(`${url}?${queryArr.join('&')}`);
    return `${url}?${queryArr.join('&')}`
}

function ajax(options) {
    const method = options.method || 'get';
    const data = options.data || {};
    const url = method == 'get' ? generatorUrl(options.url, data) : options.url;
    const httpObj = {
        url,
        method,
        baseURL: 'http://appian.me.meckodo.com/',
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        data,
    }

    console.log('------ httpObj ----');
    console.log(httpObj);

    return axios(httpObj).then(function(resData) {
        console.log('------ axioscb ---- response ----');
        return resData;
    }, function (resErr) {
        console.log('------ axioscb ---- resErr ----');
        return resErr;
    });
}

export function get(url, options) {
    return ajax({
        url: url,
        data: options.data || {},
        headers: options.headers || {},
    })
}

export function post(url, options, type) {
    type = type || 'form';
    const contentType = {
        'form': 'application/x-www-form-urlencoded',
        'data': 'application/form-data',
        'json': 'application/json'
    };
    const headers = Object.assign({
        'Content-Type': contentType[type]
    }, options.headers || {});

    const data = options.data || {};

    return ajax({
        url: url,
        method: 'post',
        data: type == 'json' ? JSON.stringify(data) : data,
        headers: headers || {},
    })
}
