// ==UserScript==
// @name         海文超强二次搜索插件(加密滞后版)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  在选中文字旁边显示浮动工具条进行二次搜索，代码加密滞后
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      example.com
// ==/UserScript==

(function() {
    'use strict';

    // 动态加载远程脚本
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://example.com/HaiwenSecondSearch.js',  // 替换为你的远程脚本URL
        onload: function(response) {
            const script = document.createElement('script');
            script.textContent = response.responseText;
            document.body.appendChild(script);
        },
        onerror: function() {
            console.error('Failed to load remote script');
        }
    });
})();
