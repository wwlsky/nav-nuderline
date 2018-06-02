/*!
 * nav-nuderline.js
 * https://github.com/wwlsky/nav-nuderline/
 * @license MIT licensed
 * @author: 502832965@qq.com
 * 
 * 使用方法:
 * new NavUnderline('.nav');
 * 或
 * NavUnderline('.nav');
 * 带参数：
 * new NavUnderline('.nav', {
 *  duration:   '.5s',      // 过渡时间
 *  timing:     'ease',     // 速度曲线 linear,ease,ease-in,ease-out,ease-in-out
 *  textColor:  '#333',     // 导航栏文字颜色
 *  lineColor:  '#333'      // 下划线颜色
 * });
*/
(function () {
    'use strict';

    var _global,
        NavUnderline = function (target, options) {

        if (Object.prototype.toString.call(target) !== '[object String]') {
            throw new Error('缺少target');
        }
        if (!(this instanceof NavUnderline)) {
            return new NavUnderline(target, options);
        }

        /**
        * 合并参数
        * @param {String} duration  [过渡时间]
        * @param {String} timing    [速度曲线 linear,ease,ease-in,ease-out,ease-in-out]
        * @param {String} textColor [导航栏文字颜色]
        * @param {String} lineColor [下划线颜色]
        */
        this.options = this.extend({
            duration: '.5s',
            timing: 'ease',
            textColor: '#333',
            lineColor: '#333'
        }, options);

        this.nav = document.querySelector(target);
        this.item = this.nav.querySelectorAll('li');

        // 初始化
        this.init(this);
    }
    NavUnderline.prototype = {
        init: function (self) {
            self.nav.insertAdjacentHTML('beforeend', '<li class="underline"></li>');
            self.nav.style.cssText = 'position: relative; display: inline-block; list-style: none;';
            Array.prototype.forEach.call(self.item, function (element) {
                if (element.className !== 'underline') {
                    element.querySelectorAll('a')[0].style.cssText = 'text-decoration: none; color: ' + self.options.textColor + ';';
                    element.style.cssText = 'display: inline-block; margin-right: 40px;';
                }
            });
            self.nav.querySelector('.underline').style.cssText = 'position: absolute;' +
                'top: 30px;' +
                'left: ' + self.item[0].offsetLeft + 'px;' +
                'width: 32px;' +
                'height: 2px;' +
                'background: ' + self.options.lineColor + ';' +
                'transform: translate(0, 0)' +
                '-webkit-transition: all ' + self.options.duration + ' ' + self.options.timing + ';' +
                '-moz-transition: all ' + self.options.duration + ' ' + self.options.timing + ';' +
                '-ms-transition: all ' + self.options.duration + ' ' + self.options.timing + ';' +
                '-o-transition: all ' + self.options.duration + ' ' + self.options.timing + ';' +
                'transition: all ' + self.options.duration + ' ' + self.options.timing + ';';
            self.event(self);
        }
        , extend: function (obj, options) {
            for (var op in options) {
                obj[op] = options[op];
            }
            return obj;
        }
        , event: function (self) {
            var underline = self.nav.querySelector('.underline');
            self.nav.addEventListener('mouseover', function (event) {
                var target = event.target;
                if (target.nodeName == 'LI' || target.nodeName == 'A') {
                    underline.style.left = target.offsetLeft + 'px';
                    underline.style.width = target.offsetWidth + 'px';
                }
            }, false);
            /* document.addEventListener('resize', function () {
                underline.style.left = self.nav.querySelectorAll('li')[0].offsetLeft + 'px';
                underline.style.width = self.item[0].offsetWidth + 'px';
            }, false); */
        }
    }

    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = NavUnderline;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return NavUnderline; });
    } else {
        !('NavUnderline' in _global) && (_global.NavUnderline = NavUnderline);
    }

})();