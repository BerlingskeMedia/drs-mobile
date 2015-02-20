var appConfig={texts:{},emediate:{G1:{cu:"0",w:"930",h:"180"},G2:{cu:"0",w:"930",h:"180"}},footer:{copyright:"2014 Berlingske Media A/S",policies:[{text:"Ophavsret og vilkår",link:"http://www.berlingskemedia.dk/ophavsret-og-vilkaar/"},{text:"Cookie-og Privatlivspolitik",link:"http://www.berlingskemedia.dk/cookie-og-privatlivspolitik/"},{text:"Generelle handelsbetingelser",link:"http://www.berlingskemedia.dk/generelle-handelsbetingelser/"}],socials:[{icon:"facebook",account:"https://www.facebook.com/stiftstidende"},{icon:"twitter",account:"https://twitter.com/stiftendk"},{icon:"instagram",account:"http://instagram.com/stiftendk"}]}},app=angular.module("mStiftenDkApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).constant("BACKEND_ADDRESS",window.location.protocol+"//"+window.location.host+"/api/v1/").constant("config",appConfig);app.config(["$routeProvider","$locationProvider","$httpProvider",function(t,e){t.when("/",{templateUrl:"app/pages/frontPage/frontPageTemplate.html",controller:"FrontpageController"}).when("/:tag/:id",{templateUrl:"app/pages/articlePage/articleTemplate.html",controller:"ArticleController"}).when("/404",{templateUrl:"app/pages/404Page/404PageTemplate.html",controller:"fourofourController"}).otherwise({redirectTo:"/"}),e.html5Mode(!0).hashPrefix("!")}]),app.factory("ContentItems",["$resource","BACKEND_ADDRESS",function(t,e){return t(e+"contentitems/:id/:action")}]),app.factory("ForsideContent",["$resource","BACKEND_ADDRESS",function(t){return t("http://stiften.dk/mecommobile/nodequeue/1011/15?output_type=json&mmfd_version=2.0&show_related=true&show_external=true&show_external_sources=true&image_size=866x487-c")}]),app.directive("stiftenHeader",function(){return{restrict:"AEC",templateUrl:"app/directives/header/headerTemplate.html",scope:!1,controller:["$scope","$rootScope",function(t,e){t.showToplist=0,t.showMenu=0,t.socials=appConfig.footer.socials,t.menuState=0,t.toplistState=0,t.lockbg=0,t.leftmnclk=function(){0==t.menuState||"diactive"==t.menuState?(t.menuState="active",t.toplistState="diactive",t.lockbg="bglocker"):(t.menuState="diactive",t.lockbg="")},t.rightmnclk=function(){0==t.toplistState||"diactive"==t.toplistState?(t.toplistState="active",t.menuState="diactive",t.lockbg="bglocker"):(t.toplistState="diactive",t.lockbg="")},t.status="first-time-view",angular.element(window).bind("scroll",function(){window.pageYOffset>0?(t.status="invisible",e.scrollstatus="scrolled"):(t.status="visible",e.scrollstatus="unscrolled"),t.$apply()}),t.closeMenus=function(){("active"==t.menuState||"active"==t.toplistState)&&(t.toplistState="diactive",t.menuState="diactive",t.lockbg="")}}]}}),app.directive("stiftenImageArticleList",function(){return{restrict:"AEC",templateUrl:"app/directives/articlelist/imageArticleListTemplate.html",scope:!0,controller:["$scope","$attrs","$rootScope","ForsideContent","$location",function(t,e,i,a,o){if(e.content="frontpageFeatured"){var n=a.get();n.$promise.then(function(){t.articles=n.items[0]})}if(e.content="otherFrontpageArticles"){var n=a.get();n.$promise.then(function(){t.articles=n.items,t.articles.shift()})}t.showArticle=function(t){o.path("/path/"+t)}}]}}),app.directive("stiftenFooter",function(){return{restrict:"AEC",templateUrl:"app/directives/footer/footerTemplate.html",$scope:!1,controller:["$scope","config",function(t,e){t.copyright=e.footer.copyright,t.policies=e.footer.policies,t.socials=e.footer.socials}]}}),app.directive("stiftenListmenu",["$routeParams",function(){return{restrict:"AE",scope:!0,templateUrl:"app/directives/menu/menuTemplate.html",controller:["$scope",function(){}]}}]),app.controller("ArticleController",["$routeParams","$scope","TagContentItem","ContentItems","$location","config","$sce","$window","$rootScope",function(t,e,i,a,o,n,r,s,l){{var c=this,p=null,d=encodeURIComponent(o.absUrl()),u=($(".article-heading-wrapper .main-article-image"),$(".article-container")[0]);u.offsetWidth}e.votingBarShow="",e.swiping="",e.facebookUrl="https://www.facebook.com/sharer.php?u="+d,e.twitterUrl="http://twitter.com/share?url="+o.absUrl()+"&hashtags=stiftendk",e.votingText=n.texts.articleVoteText,e.votingTextUp=n.texts.votingTextUp,e.votingTextDown=n.texts.votingTextDown,e.tag=t.tag;var m=i.get({tag:t.tag,id:t.id},function(t){t.items[0].body||t.items[0].title||c.next(),e.template=t.items[0].tags[0].template,e.author=t.items[0].author,m.items[0].body=r.trustAsHtml(m.items[0].body),m.items[0].published*=1e3,e.contentitem=m.items[0],p=document.getElementById(e.contentitem.nodeId)},function(){o.path("/404")});e.next=function(){window.scrollTo(0,20),o.path(m&&m.navigation&&m.navigation.next?m.navigation.next.ref:m?"/"+t.tag+"/finish":"/404")},"scrolled"===l.scrollstatus?window.scrollTo(0,20):window.scrollTo(0,0)}]),app.directive("articleDirective",["$routeParams","$window","ContentItems","$timeout",function(t,e,i,a){return{restrict:"A",scope:!1,link:function(o,n){var r=!1,s=!1,l=n[0].offsetWidth,c=window.scrollY,p=-1e3,d=$(".social-box"),u=$(d).find(".button"),m=($(".sticky-social-box"),o.$watch("contentitem",function(t){t&&(o.loaded=!0,S(t),m())})),g=function(t,e,i,a,o){var n={},r=h();null!==e&&(n.MsTransform=e,n.MozTransform=e,n.WebkitTransform=e,n.transform=e),n["-webkit-transform-origin"]=r,n["-ms-transform-origin"]=r,n["transform-origin"]=r,null!==a&&(n.MsTranstion=a,n.MozTransition=a,n.WebkitTransition=a,n.transition=a),n.opacity=o?o:1,angular.element(t).css(n)},f=function(){return c||(c=window.scrollY),c},h=function(){return"center "+(window.screen.availHeight+f())+"px"},v=function(){o.$apply(function(){o.pageHeight=angular.element(window).height(),o.pageLeft=angular.element(".main").offset().left,o.tagBgHeight="300px"})},k=function(t){var i=20,a=0,n=function(e){var n=Math.abs(e.deltaX)-i,r=(1-Math.abs(e.deltaX)/(l/2)*.4).toFixed(2);e.deltaX<0?(n=-n,o.$apply(function(){o.voteDirection="downvote"})):o.$apply(function(){o.voteDirection="upvote"}),a="rotate("+n/10+"deg) translate3d(0,0,0)",c||(c=window.scrollY);var s=!0;Math.abs(e.deltaX)>i&&g(t,a,s,"none",r)},p=function(e){if(o.votingBarShow="show",o.$apply(),Math.abs(e.deltaX)>l/3&&!r){var i=e.deltaX;i>0?o.upvote():o.downvote()}else o.swiping="",o.voteDirection="",o.$apply(),g(t,"",null,"all .3s",1)},d=function(){s||(r=!1)},u={dragLockToAxis:!0,dragBlockHorizontal:!0},m=function(i){var a,o=new Hammer(i,u);o.on("panleft panright swipeleft swiperight",function(t){r||n(t)}).on("panend",function(t){p(t)}),e.addEventListener("touchstart",function(){s=!0,r=!1},!1),e.addEventListener("touchend",function(){s=!1},!1),e.onscroll=function(){r=!0,c=!1,g(t,"",null,"all .3s",1),clearTimeout(a),a=setTimeout(d,10),w()}};m(t)},w=function(){return o.votingBarShow="show",$(d).length>1?void d.splice(0,1):($(d).offset().top-$(document).scrollTop()<45&&!$(u[0]).hasClass("mobile-static")&&y(),void($(document).scrollTop()<p&&b()))};o.upvote=function(){g(n,"",null,"",""),o.vote="upvoted",i.save({id:t.id,action:"upvote"},null),o.next()},o.downvote=function(){g(n,"",null,"",""),o.vote="downvoted",i.save({id:t.id,action:"downvote"},null),o.next()};var b=function(){o.sticky=!1,$.each($(u),function(t,e){$(e).removeClass("mobile-static")}),p=-1e3},y=function(){o.sticky=!0,$.each($(u),function(t,e){$(e).addClass("mobile-static")}),p=$(document).scrollTop()};setTimeout(function(){o.votingBarShow="show",o.$apply()},1e4);var x=function(){var t=$(".bodytext")[0];n.find("iframe").each(function(){this.width="100%",this.height=.65*t.clientWidth})};e.onresize=function(){v(),x(),o.$apply()};var S=function(t){a(function(){v(),x(),Modernizr.touch?k(n[0]):e.onscroll=function(){w()},T(t)},0)},T=function(t){$.each($("video"),function(e,i){var a={primary:"html5",controlbar:"over",file:$(i).attr("src"),image:$(i).attr("poster"),width:"100%",height:.55*$(".bodytext").width(),advertising:{client:"vast",schedule:{preroll:{tag:A($(i).attr("src"),t.title,t.tags[0].name,"p"),offset:"pre"},postroll:{tag:A($(i).attr("src"),t.title,t.tags[0].name,"po"),offset:"post"}},skipoffset:"4"},playlist:$(i).attr("data-playlist")+"?mobile=false",related:{dimensions:"120x70",file:$(i).attr("data-related")+"?mobile=false",onclick:"play",heading:"Relaterede Videoer"},gemius_stream_tracking:{id:"d7LlPwL5ETHGAZ1Uhj.SP7eP73wwyBtydZ52gInthsX.W7",hitcollector:"pro.hit.gemius.pl"},streamsense:{loggingEnabled:!1}},o=jwplayer(i).setup(a);o.config=a,JW6SS.setupUdm("http://int.sitestat.com/berlingske/stiften/s?"),JW6SS.observeAll()})},A=function(t,e,i,a){var o={rt:"vast_2.0",pf:"html5",cv:"h5_1.0.12.15.1",t:i,s:"stiften.dk",cf:"short_form",ci:t+"-"+e,vwt:"610",vht:"407",tt:a,st:"0:0,3,4,10,20:1,91,100",rnd:Math.ceil(1e14*Math.random())},n="http://dk-berlingske.videoplaza.tv/proxy/distributor/v2?";return n+$.param(o)}}}}]),app.controller("FrontpageController",["$rootScope",function(){}]),app.controller("fourofourController",["$routeParams","$scope","$location","config","ContentItems",function(t,e,i,a,o){var n={extendfirstitems:"no",extendtemplates:"yes",filter:"tiles"};n.pagesize=10,n.sortby="published",e.articles=o.get(n)}]),app.directive("cookieinformer",function(){return{restrict:"AEC",templateUrl:"app/directives/cookieinformer/cookieInformerTemplate.html",$scope:!1,controller:["$scope","$cookies",function(t,e){e.informed&&(t.statusClass="done"),t.closeInformer=function(){t.statusClass="done",document.cookie="informed=true; expires=Fri, 3 Aug 2200 00:00:00 UTC; path=/"}}]}}),app.directive("biteSrcset",function(){return{restrict:"A",priority:99,scope:{bitesrc:"=biteSrcset"},link:function(t,e,i){var a="",o=t.$watch("bitesrc",function(t){if(t)if("undefined"!=typeof t.images){a+=t.images.desktop.url+" 1x,",t.images.desktop2x&&(a+=t.images.desktop2x.url+" 2x,"),t.images["desktop@2x"]&&(a+=t.images["desktop@2x"].url+" 2x,");for(var e in t.images)a+=t.images[e].url+" "+t.images[e].width+"w,";i.$set("srcset",a),i.$set("src",t.images.desktop2x.url),o()}else t.image&&"string"==typeof t.image&&i.$set("src",t.image)})}}}),app.directive("berlEmediate",function(){return{restrict:"AEC",templateUrl:"app/directives/emediate/emediateTemplate.html",scope:!0,controller:["$scope","$window","$location","config","$attrs",function(t,e,i,a,o){var n=o.cu;t.cu=n,this.ready=!1,this.stackBanners=!1,t.emediate=function(){if(!this.ready){var e=i.url(),r=o.tag,s=n+"-"+r+e.replace(/\//g,"-");t.id=s,t.status="unstick","undefined"!=typeof EAS_load_fif&&angular.element(document.getElementById("#"+s))[0]&&a.emediate[n].cu&&"0"!=a.emediate[n].cu&&(EAS_load_fif(s,"./assets/html/EAS_fif.html","http://ad1.emediate.dk/eas?cu="+a.emediate[n].cu+";cre=mu;js=y;pageviewid=;target=_blank",a.emediate[n].w,a.emediate[n].h),this.ready=!0),this.stackBanners||"I1"!=n&&"I2"!=n||(this.stackBanners=!0,angular.element(window).bind("scroll",function(){var i="#B1-"+r+e.replace(/\//g,"-"),a=angular.element(document.getElementById(i)).height();0!=a&&(t.status=window.pageYOffset>a?"stick":"unstick",t.$apply())}))}}}]}}),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/pages/404Page/404PageTemplate.html",'<div tag-manager=""></div><div class="content"><div class="general-background not-found-page"><div class="bodytext"><h1>OOOPS!</h1><h4>DET ER VI KEDE AF...</h4><h4>MEN DET DU LEDER EFTER FINDES IKKE...</h4><div class="fourofour-image"></div></div><div class="tag-finish" ng-repeat="article in articles.items" ng-style="{\'background-color\': article.tags[0].template.backgroundColor, \'width\': \'90%\', \'margin\': \'5px auto 0px auto\'}"><a ng-href="/{{::article.tags[0].slug}}/{{::article.slug}}"><div class="tag-finish tag-name" ng-style="{\'color\': article.tags[0].template.textColorSecondary}"><p>{{::article.name | uppercase}}</p></div></a></div></div><footer stiften-footer="" class="footer article-footer container"></footer></div>')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/pages/articlePage/articleTemplate.html",'<div class="article-container" ng-show="loaded"><div class="article general-background tag-{{::tag}}" ng-show="loaded" ng-class="vote" id="node-{{::contentitem.nodeId}}" article-directive=""><div class="article-heading-wrapper"><div class="article-tag-bg-container"><div class="article-tag-bg" ng-style="{\'background-color\': template.backgroundColor}"></div><div class="article-title-wrapper" style="visibility:hidden;"><h2 class="tag">#{{::tag}}</h2><h1 class="title">{{::contentitem.title}}</h1></div></div><div class="article-title-wrapper"><h2 class="tag">#{{::tag}}</h2><h1 class="title">{{::contentitem.title}}</h1></div><div class="image-container"><img class="main-article-image" berl-srcset="contentitem.image" sizes="(max-width: 600px) calc(100vw - 50px), (max-width: 940px) calc(100vw - 280px), (min-width: 940px) 640px"><div class="photo-author" ng-show="contentitem.image.photographer">Foto: {{::contentitem.image.photographer}}</div></div></div><div class="voting-box" ng-class="votingBarShow"><a class="downvote button" ng-click="downvote()"><i class="icon-thumb-down"></i>{{::votingTextDown}}</a> <a class="upvote button" ng-click="upvote()"><i class="icon-heart"></i>{{::votingTextUp}}</a><div class="voting-text">{{::votingText}}</div></div><div class="social-box"><div ng-hide="sticky"><a class="button icon-facebook" ng-href="{{::facebookUrl}}"></a><a class="button icon-twitter" ng-href="{{::twitterUrl}}"></a></div></div><div class="bodytext"><div class="publisheddate">{{::contentitem.published| date:" d \'.\' MMMM yyyy \',\' HH:MM "}}</div><div ng-bind-html="contentitem.summary" class="summary"></div><div ng-bind-html="contentitem.body" class="body"></div><a class="facebookcontainer" href="https://www.facebook.com/stiftendk" target="_blank">Følg os på <i class="icon-facebook"></i></a><div class="author-box" ng-if="author.profileName"><div class="authorFirstBox"><p class="name"><i>Af</i> &nbsp; <b><a href="mailto:{{::author.profileEmail}}">{{::author.profileName | limitTo: 30}}</a></b></p><p><a class="button icon-facebook" ng-href="{{::author.facebookProfile.id}}" ng-if="author.facebookProfile.id"></a> <a class="button icon-twitter" ng-href="{{::author.twitterProfile.id}}" ng-if="author.twitterProfile.id"></a> <a class="button icon-instagram" ng-href="{{::author.instragramProfile.id}}" ng-if="author.instragramProfile.id"></a></p></div></div></div></div><div class="sticky-social-box" ng-show="sticky"><a class="button icon-facebook" ng-href="{{::facebookUrl}}"></a> <a class="button icon-twitter" ng-href="{{::twitterUrl}}"></a></div></div><footer stiften-footer="" class="footer article-footer container"></footer>')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/pages/frontPage/frontPageTemplate.html",'<div class="page-content"><berl-emediate cu="G2" tag="forside"></berl-emediate><div stiften-image-article-list="" content="frontpage-featured"></div><div stiften-image-article-list="" content="other-frontpage-articles"></div></div>')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/directives/articlelist/imageArticleListTemplate.html",'<article ng-repeat="article in articles" class="image-article-list-article"><a href="" ng-click="showArticle(article[0].value)"><div class="meta-wrapper"><div class="label">{{ article.category }}</div><time class="publish-date">{{ article.pubDate | date:"dd MMM h:mm"}}</time></div><img ng-src="{{ article[1].attributes.url }}"><h2>{{ article.title }}</h2></a></article>{{1288323623006 | date:"MM/dd/yyyy \'at\' h:mma"}}')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/directives/cookieinformer/cookieInformerTemplate.html",'berl<div id="cookieInformerBooklet" class="{{statusClass}}"><div class="warning-icon"></div><div class="berl-logo-icon icon-berl-logo"></div><p>Websitet anvender cookies til at huske dine indstillinger, statistik og at målrette annoncer.&nbsp;<a href="http://www.berlingskemedia.dk/cookie-og-privatlivspolitik-0" target="_blank">Læs&nbsp;mere</a></p><button class="cookie-button" ng-click="closeInformer()">OK</button></div>')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/directives/emediate/emediateTemplate.html",'<div id="{{::id}}" style="margin:0px; border:0px; padding:0px; height: 0" ng-class="[status]"></div>{{emediate()}}')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/directives/footer/footerTemplate.html",'<a href="/"><span class="icon icon-stiften-background"></span> <span class="stiften-logo-colorer"></span></a> <span class="copyright">Copyright&nbsp;&copy;&nbsp;{{::copyright}}</span><div class="disclaimer"><p>stiften.dk er en selvstændig enhed under Berlingske Media - Pilestræde 34 - 1147 København K - Danmark - Tlf. 33757533 - CVR 29207313</p><p>Chefredaktør: Flemming Fjeldgaard - Redaktør: Mette Gert - Digital redaktør: Kevin Walsh.</p></div><span class="policy-links"><a ng-repeat="policy in policies" ng-href="{{policy.link}}" target="_blank" ng-class="{\'last\':$last}">{{::policy.text}} <span class="separator">|</span></a></span> <span class="social-networks"><a ng-repeat="social in socials" ng-href="{{social.account}}" target="_blank"><span class="icon icon-{{social.icon}}"></span></a></span>')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/directives/header/headerTemplate.html",'<div class="main-header"><div class="main-stiften-logo"></div><div class="right-menu" ng-click="toggleMenu()"></div><nav stiften-menu="" class="tag-menu container" ng-class="[menuState, overflow, status]" ng-style="stylePosition"></nav></div>')}])}(),function(t){try{t=angular.module("mStiftenDkApp")}catch(e){t=angular.module("mStiftenDkApp",[])}t.run(["$templateCache",function(t){t.put("app/directives/menu/menuTemplate.html","")}])}();