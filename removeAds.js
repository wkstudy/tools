// ==UserScript==
// @name         简书去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  简书去广告
// @author        wkstudy
// @match        https://www.jianshu.com/p/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jianshu.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var id = setInterval(function() {

      var leftad = document.getElementById('duilian002') // 左边广告
      var rightad = document.getElementById('aaabbbc') // 右边广告
      var btmad = document.getElementById('close1'); // 右边底部广告1
      var note =document.getElementById('note'); // 右边底部广告2


      if(	leftad || rightad || btmad || note) {
          leftad && leftad.parentNode.parentNode.remove();
          rightad && rightad.parentNode.parentNode.remove();
          btmad && btmad.parentNode.remove();
          note && note.remove()
      } else {
          console.log('success remove ads')
          clearInterval(id)
      }

  }, 500)
  })();