 <!-- [ PopUp Recent Commnets ] -->
    <script>/*<![CDATA[*/var limCmt=30,lengthName=25,lengthContent=100,adminUri="https://www.blogger.com/profile/6791464872151300408",blogUri="https://kamnopislam.blogspot.com",noAvatar="https://imgur.com/vpFKnLD.png",comments=[],countNewCmt=0,commentBtn=document.querySelector(".popup-cmt"),closeLabel=document.querySelector(".cmt-close");function innerTotalComments(t){var e=parseInt(t.feed.openSearch$totalResults.$t),n=parseInt(localStorage.getItem("seen"));n=n||0,document.querySelector(".more-cmt").innerHTML=`See all <b>${e}</b> comment`,document.querySelector(".more-cmt").title=`See all ${e} comment`,e>n?document.querySelector(".popup-cmt").dataset.text=e-n:e<n&&localStorage.setItem("seen",e),countNewCmt=e-n}function innerComment(t){var e="<ul class='cmt-ul'>";for(let n=0;n<t;n++){var l=comments[n];e+=`<li class="cmt-li ${countNewCmt>0?"new-cmt":""}"><a class="cmt-content" href=${l.link} rel="nofollow" title="${l.fullContent}"><div class="cmt-info"><img class="cmt-avatar" src=${l.avatar} /></div><div class="cmt"><p>${l.content}</p><span class="cmt-time">${l.time} </span> <span class="cmt-author">${l.rep?'<i class="fas fa-reply"></i>':'<i class="fas fa-pen"></i>'} ${l.author}</span></div></a></li>`,countNewCmt--}e+="</ul>",document.querySelector(".cmt-list").innerHTML=e}function rcComments(t){var e=limCmt>t.feed.entry.length?t.feed.entry.length:limCmt;for(let n=0;n<e;n++){var l=t.feed.entry[n],r=l.author[0].name.$t;r=r.length<lengthName?r:r.substring(0,lengthName)+"&#133;";var o=l.content.$t;o=(o=o.replace(/(<([^>]+)>)/g," ")).length<lengthContent?o:o.substring(0,lengthContent)+"&#133";var c=new Date(l.published.$t),m=Math.floor((new Date-c)/1e3),a=m<60?m+" gi\xe2y ago":m<3600?Math.floor(m/60)+" minute ago":m<86400?Math.floor(m/3600)+" hours ago":m<604800?Math.floor(m/86400)+" days ago":Math.floor(m/604800)+" week ago",s={author:r,avatar:"https://img1.blogblog.com/img/b16-rounded.gif"==l.author[0].gd$image.src?noAvatar:"https://img1.blogblog.com/img/blank.gif"==l.author[0].gd$image.src?noAvatar:l.author[0].gd$image.src,content:o,fullContent:l.content.$t.replace(/(<([^>]+)>)/g," "),time:a,link:l.link[2].href,rep:4==l.link.length};comments.push(s)}innerTotalComments(t),innerComment(e)}document.write(`<script type="text/javascript" src="${blogUri}/feeds/comments/default?alt=json-in-script&max-results=${limCmt}&callback=rcComments"><\/script>`),commentBtn&&commentBtn.addEventListener("click",function(){var t=parseInt(commentBtn.dataset.text),e=parseInt(localStorage.getItem("seen"));e=e||0,t&&(localStorage.setItem("seen",t+e),delete commentBtn.dataset.text)}),closeLabel&&closeLabel.addEventListener("click",()=>{var t=document.querySelectorAll(".new-cmt");t&&t.length>0&&t.forEach(t=>{t.classList.remove("new-cmt")})}); /*]]>*/</script>
