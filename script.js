const viewcount=(number)=>{
    let numberString=number.toString();
    
    if (numberString.length<4) {
        return numberString;
    }
    else if (numberString.length>3 && numberString.length<7) {
        return numberString.slice(0,3)+"k";
    }
    else{
        return numberString[0]+"."+numberString[1]+"M";
    }
    
}

const card=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelector('.number').innerHTML=`${number}`;
    document.querySelector('.thumbail').innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelector('.name').innerHTML=`${name}`;
    document.querySelector('.duration').innerHTML=`${duration}`;
    document.querySelector('.chanel').innerHTML=`${chanel}`;
    document.querySelector('.view').innerHTML=`${viewcount(view)} views`;
    document.querySelector('.time').innerHTML=`${time}`;

}
var ImGlink="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw ";
var topic="Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1 ";
card(1,ImGlink,topic,"31:20","CodeWithHarry",713000,"2 months ago");

const card2=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelectorAll('.number')[1].innerHTML=`${number}`;
    document.querySelectorAll('.thumbail')[1].innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelectorAll('.name')[1].innerHTML=`${name}`;
    document.querySelectorAll('.duration')[1].innerHTML=`${duration}`;
    document.querySelectorAll('.chanel')[1].innerHTML=`${chanel}`;
    document.querySelectorAll('.view')[1].innerHTML=`${viewcount(view)} views`;
    document.querySelectorAll('.time')[1].innerHTML=`${time}`;

}
card2(2,"https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ","Your First HTML Website | Sigma Web Development Course - Tutorial #2","28:31","CodeWithHarry",380000,"2 months ago");

const card3=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelectorAll('.number')[number-1].innerHTML=`${number}`;
    document.querySelectorAll('.thumbail')[number-1].innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelectorAll('.name')[number-1].innerHTML=`${name}`;
    document.querySelectorAll('.duration')[number-1].innerHTML=`${duration}`;
    document.querySelectorAll('.chanel')[number-1].innerHTML=`${chanel}`;
    document.querySelectorAll('.view')[number-1].innerHTML=`${viewcount(view)} views`;
    document.querySelectorAll('.time')[number-1].innerHTML=`${time}`;

}
card3(3,"https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q","Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3","11:12","CodeWithHarry",231000,"2 months ago");
const card6=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelectorAll('.number')[number-1].innerHTML=`${number}`;
    document.querySelectorAll('.thumbail')[number-1].innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelectorAll('.name')[number-1].innerHTML=`${name}`;
    document.querySelectorAll('.duration')[number-1].innerHTML=`${duration}`;
    document.querySelectorAll('.chanel')[number-1].innerHTML=`${chanel}`;
    document.querySelectorAll('.view')[number-1].innerHTML=`${viewcount(view)} views`;
    document.querySelectorAll('.time')[number-1].innerHTML=`${time}`;

}
card6(6,"https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM_F4-vsYQsOsqeCE9k-VMI2gpbA"," SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6","13:28","CodeWithHarry",161000,"2 months ago");
const card4=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelectorAll('.number')[number-1].innerHTML=`${number}`;
    document.querySelectorAll('.thumbail')[number-1].innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelectorAll('.name')[number-1].innerHTML=`${name}`;
    document.querySelectorAll('.duration')[number-1].innerHTML=`${duration}`;
    document.querySelectorAll('.chanel')[number-1].innerHTML=`${chanel}`;
    document.querySelectorAll('.view')[number-1].innerHTML=`${viewcount(view)} views`;
    document.querySelectorAll('.time')[number-1].innerHTML=`${time}`;

}
card4(4,"https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXT49aypaXDTfq5Y813UJXZZcVXA"," Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4","19:34","CodeWithHarry",196000,"2 months ago");
const card5=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelectorAll('.number')[number-1].innerHTML=`${number}`;
    document.querySelectorAll('.thumbail')[number-1].innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelectorAll('.name')[number-1].innerHTML=`${name}`;
    document.querySelectorAll('.duration')[number-1].innerHTML=`${duration}`;
    document.querySelectorAll('.chanel')[number-1].innerHTML=`${chanel}`;
    document.querySelectorAll('.view')[number-1].innerHTML=`${viewcount(view)} views`;
    document.querySelectorAll('.time')[number-1].innerHTML=`${time}`;

}
card5(5,"https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCImJKujntN4XOIJVBfI5R8dzszzg","Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5","18:20","CodeWithHarry",380000,"2 months ago");
const card7=(number,thumbail,name,duration,chanel,view,time)=>{
    document.querySelectorAll('.number')[number-1].innerHTML=`${number}`;
    document.querySelectorAll('.thumbail')[number-1].innerHTML=`<img src=${thumbail} alt="">`;
    document.querySelectorAll('.name')[number-1].innerHTML=`${name}`;
    document.querySelectorAll('.duration')[number-1].innerHTML=`${duration}`;
    document.querySelectorAll('.chanel')[number-1].innerHTML=`${chanel}`;
    document.querySelectorAll('.view')[number-1].innerHTML=`${viewcount(view)} views`;
    document.querySelectorAll('.time')[number-1].innerHTML=`${time}`;

}
card7(7,"https://i.ytimg.com/vi/tLBlhp0SA_0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9K_ywdz0qNuk4J_A5cblBCf2L_Q","Your First HTML Website | Sigma Web Development Course - Tutorial #2","14:53","CodeWithHarry",137000,"2 months ago");