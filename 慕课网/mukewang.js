var lun=document.getElementsByClassName('all_right');
var lun_left=document.getElementsByClassName('lun-left');
var lun_right=document.getElementsByClassName('lun-right');
var LBT=document.getElementsByClassName('LBT');
var lis=lun[0].children[0].children;
var clis=lun[0].children[1].children[0].children;


    var index=0; 
    var run;
    var arr=['rgb(219, 219, 245)','rgb(247, 218, 218)','rgb(204, 195, 195)','rgb(205, 223, 190)','rgb(195, 231, 219)','rgb(178, 220, 228)'];
    function autoRun() {
        run=setInterval(function() {
            lis[index].removeAttribute('class');
            clis[index].removeAttribute('class');
            index++;
            if(index==lis.length) {
                index=0;
            }
            lis[index].setAttribute('class','show');
            clis[index].setAttribute('class','cli-show');
            LBT[0].style.backgroundImage='linear-gradient('+arr[index]+', white)';
        }, 4000);
    }
    autoRun();

    lun[0].onmouseenter=function() {
        clearInterval(run);
    }
    lun[0].onmouseleave=function() {
        autoRun();
    }

    for (var i = 0; i < lis.length; i++) {
        clis[i].onclick=(function(i) {
            return function() {
                lis[index].removeAttribute('class');
                clis[index].removeAttribute('class');
                index=i;
                lis[index].setAttribute('class','show');
                clis[index].setAttribute('class','cli-show'); 
                LBT[0].style.backgroundImage='linear-gradient('+arr[index]+', white)';
            }
        })(i)
    }

    lun_left[0].onclick=function() {
        lis[index].removeAttribute('class');
        clis[index].removeAttribute('class');
        index--;
        if(index<0) {
            index=lis.length-1;
        }
        lis[index].setAttribute('class','show');
        clis[index].setAttribute('class','cli-show'); 
        LBT[0].style.backgroundImage='linear-gradient('+arr[index]+', white)';
    }
    lun_right[0].onclick=function() {
        lis[index].removeAttribute('class');
        clis[index].removeAttribute('class');
        index++;
        if(index==lis.length) {
            index=0;
        }
        lis[index].setAttribute('class','show');
        clis[index].setAttribute('class','cli-show'); 
        LBT[0].style.backgroundImage='linear-gradient('+arr[index]+', white)';
    }





// 在HTML中写了一个h1标签，然后引入到js中
var h = document.getElementById('daojishi');

function daojiShi(storptimes) {
var newtime = new Date() //获取当前时间
var storptime = new Date(storptimes) //获取截止时间

var mistiming = storptime.getTime() - newtime.getTime() //   获取截止时间距离现在的毫秒差

var days = Math.floor(mistiming / 1000 / 60 / 60 / 24); //获取天数   
var hours = Math.floor(mistiming / 1000 / 60 / 60 % 24); // 获取小时
var minutes = Math.floor(mistiming / 1000 / 60 % 60); //获取分钟数
var seconds = Math.floor(mistiming / 1000 % 60); //获取秒数

// 判断天、时、分、秒是不是两位数，如果是直接输出，如果不是在前边加个0;    
days <10 ? days = "0"+days : days;    
hours <10 ? hours = "0"+hours : hours;
minutes <10 ? minutes = "0"+minutes : minutes;
seconds <10 ? seconds = "0"+seconds : seconds;

// 第一种连接方法
// var rels = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";   
// 第二种连接方法
var rels = `${days}天${hours}时${minutes}分${seconds}秒`

// 判断时间差是不是正数，就是截止时间是不是比现在的时间晚
var mis = mistiming > 0? rels:"请输入正确的时间"
return  mis
}  

//用计时器去实现它
setInterval(function(){
//把倒计时放在h1标签中
h.innerHTML =  daojiShi("2019,11,5")
},1000)//时间我们设置1000毫秒，也就是1秒钟


var content3=document.getElementsByClassName('content3');
var c3_lis=content3[0].children[0].children[1].children;
var divs3=content3[0].children;
// console.log(divs3);
var n=0;
for(var num=0;num<c3_lis.length;num++) {
    c3_lis[num].onclick=(function(num) {
        return function() {
            c3_lis[n].removeAttribute('id');
            divs3[n+1].removeAttribute('id');
            c3_lis[num].setAttribute('id','default');    
            divs3[num+1].setAttribute('id','default_b')
            n=num;
        }
    }(num))
}

var quest=document.getElementById('quest');
var quest_show=document.getElementsByClassName('quest_show');

// console.log(quest_show[0]);
quest.onmouseenter=function() {
    quest_show[0].style.display='block';
}
quest.onmouseleave=function() {
    quest_show[0].style.display='none';
}
    
var imgs=document.getElementsByClassName('imgs');
var strs=document.getElementsByClassName('str');

for(var i=0;i<imgs.length;i++) {
    imgs[i].onmouseover=(function(i) {
        return function() {
            imgs[i].style.display='none';
            strs[i].style.display='block';
        }
    })(i)
}
for(var a=0;a<imgs.length;a++) {
    imgs[a].onmouseout=(function(a) {
        return function() {
             imgs[a].style.display='block';
            strs[a].style.display='none';
        }
    })(a)
}

var ybc=document.getElementsByClassName('ybc');
var YCLB=document.getElementsByClassName('YCLB');
// console.log(YCLB);

    for( var i=0;i<ybc.length;i++) {
        ybc[i].onmouseenter=(function(i) {
            return function(){
                YCLB[i].style.display='block';
            }
    })(i)
}
for( var i=0;i<ybc.length;i++) {
    ybc[i].onmouseleave=(function(i) {
        return function(){
            YCLB[i].style.display='none';
        }
})(i)
}

var footerall=document.getElementsByClassName('footerall');
var footer_b=document.getElementsByClassName('footer_b');
    footer_b[0].onmouseenter=function(){
        footerall[0].style.display='block';
    }
    footer_b[0].onmouseleave=function(){
        footerall[0].style.display='none';
    }

    var cc1=document.getElementsByClassName('cc1');
    var content=document.getElementsByClassName('content2_bottom');
    console.log(cc1[2].children[0]);
    cc1[1].onclick=function() {
        cc1[0].removeAttribute('id');
        content[2].removeAttribute('id');
        cc1[1].setAttribute('id','cc2');
        content[1].setAttribute('id','con2')
        cc1[2].children[0].style.display='block';
    }


    cc1[0].onclick=function() {
        cc1[1].removeAttribute('id');
        content[1].removeAttribute('id');
        cc1[0].setAttribute('id','cc2');
        content[2].setAttribute('id','con2');
        cc1[2].children[0].style.display='none';
    }
