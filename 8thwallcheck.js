/* Copyright (c) 2018 8th Wall, Inc. All Rights Reserved */ ! function() {
    var s = document.currentScript || [].find.call(document.scripts, function(e) { return /xrweb(\?.*)?$/.test(e.src) }),
        appKey = s.getAttribute("appKey") || s.src.replace(/.*app[kK]ey=([a-zA-Z0-9]+).*/, "$1");
    if (!appKey) { var msg = "Missing 8th Wall appKey"; throw console.error(msg, s), new Error(msg) }
    var useAsync = "false" !== s.getAttribute("async"),
        getScript = useAsync ? addScript : xhrEval,
        signed = { version: "11.1.5.519", expires: 1562682712890, url: "https://cdn.8thwall.com/xr-11.1.5.519.js?Expires=1562682713&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uOHRod2FsbC5jb20veHItMTEuMS41LjUxOS5qcyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTU2MjY4MjcxM319fV19&Signature=DReg6LqEvbl6JV~c7j4-yc2UvLN90BLitHBOUzWa10vH-FhSBUFC171el3ex4vGrJf8a5XR9gqmpeBFdavMfZSTKhQoVwZQ2hx24qgZB18XM~mT90ewn0cBCR~XTIdFd7TMVlX~QpnAmLo5GLcMaPT6UNJWbhnPotAYB3~j2vHGhS8WyhRQoFpMR-T4Lq7E5UAxJUn2yZ9Hvo338V1Q163Dgxzdy1ETUjLtXXQsotm0slx1g~KRoOMIBKVQQuUrkWTzk56jlGhl~UPdjMYzGn5JoKQJRVbYUvFkTHxvlpRO8RXMweqmvlqxRwEV85NxKqvMUjKUh~vk~O3ZxxhB1Fw__&Key-Pair-Id=APKAJ3CN4K2PGGAKTVOQ" };
    return void(signed ? getSignedScript(signed) : getScript(s.src + "?appKey=" + appKey));

    function addScript(e) { var t = document.createElement("SCRIPT");
        t.src = e, t.setAttribute("async", "true"), document.head.appendChild(t) }

    function parseCookie(e) { var t = document.cookie.split(";").map(function(e) { return e.trim() }).find(function(t) { return t.substr(0, e.length) === e }); return t && t.length ? JSON.parse(t.substring(e.length + 1)) : {} }

    function getSignedScript(e) { var t = parseCookie("engine");
        (!t.expires || e.version !== t.version || t.expires < Date.now()) && (t = e, document.cookie = "engine=" + JSON.stringify(t) + "; expires=" + new Date(t.expires).toUTCString() + "; path=/"), getScript(t.url) }

    function xhrEval(src) {
        var xhr = new XMLHttpRequest;
        xhr.onload = function() { eval(xhr.responseText) }, xhr.open("GET", src, !1), // Synchronous XMLHttpRequest on the main thread
            xhr.withCredentials = !/.*Expires.*/.test(src), xhr.send(null)
    }
}();
//# sourceURL=xrweb.js