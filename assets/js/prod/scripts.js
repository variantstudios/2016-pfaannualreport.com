$(document).ready(function(){function t(t){var e=$(window).scrollTop(),a=e+$(window).height(),i=$(t).offset().top,n=i+$(t).height();return i<=a&&n>=e}Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq");var e=!1;$(window).scroll(function(){if(t("#staff")){if(e)return;e=!0,jQuery.fn.fadeDelay=function(){return delay=0,this.each(function(){$(this).delay(delay).fadeIn(550),delay+=50})},$("#staff path").fadeDelay()}else e=!1}),$(function(){var t=$("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),e=$("figure");t.each(function(){$(this).attr("data-aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$(window).resize(function(){var a=e.width();t.each(function(){var t=$(this);t.width(a).height(a*t.attr("data-aspectRatio"))})}).resize()}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top-120},1e3),!1}})})});