
const navele = document.querySelectorAll(".navele");
navele.forEach(function(ele){
  ele.addEventListener("click",function (){
    document.querySelector(".active").classList.remove("active");
    ele.classList.add("active");
  });
});

const sp = document.querySelectorAll(".sp");
sp.forEach(function(span){
  span.addEventListener("click",function (){
    document.querySelector(".active2").classList.remove("active2");
    span.classList.add("active2");
  });
});



const heart1 = document.querySelector(".heart1");
heart1.addEventListener("click",function(){
  heart1.classList.toggle("fa-solid")
})
const heart2 = document.querySelector(".heart2");
heart2.addEventListener("click",function(){
  heart2.classList.toggle("fa-solid")
})
const bookmark1 = document.querySelector(".bookmark1");
bookmark1.addEventListener("click",function(){
  bookmark1.classList.toggle("fa-solid")
})
const bookmark2 = document.querySelector(".bookmark2");
bookmark2.addEventListener("click",function(){
  bookmark2.classList.toggle("fa-solid")
})
const make=document.querySelector(".make")
const post=document.querySelector(".tr")
post.addEventListener("click",function(){
    make.classList.add("bg-active2")
    
})
const cross=document.querySelector(".fa-xmark")
cross.addEventListener("click",function(){
  make.classList.remove("bg-active2")
})

const cp=document.querySelector("#cp")
cp.addEventListener("click",function(){
  alert("This feature will be added soon.")
})





const plus=document.querySelector("#search_bar")
plus.addEventListener("click", function(){
  alert("This feature will be added soon.")
})

const m1=document.querySelector("#morep1")
const m2=document.querySelector(".more")
m1.addEventListener("click", function(){
  m2.classList.add("bg-active")
})

const m3=document.querySelector("#morep2")
const m4=document.querySelector(".more")
m3.addEventListener("click",function()
{
  m4.classList.add("bg-active")
})

const cancel=document.querySelector("#choose6");
cancel.addEventListener("click",function()
{
  m2.classList.remove("bg-active");
})

const follow1=document.querySelector("#sf1")
follow1.addEventListener("click",function (){
  if(follow1.innerHTML==="follow")
  {
    follow1.innerHTML="unfollow"
    alert("You started following virat.kohli")
  }
  else
  {
    follow1.innerHTML="follow"
    alert("You unfollowed virat.kohli")
  }

})
  
const follow2=document.querySelector("#sf2")
follow2.addEventListener("click",function (){
  if(follow2.innerHTML==="follow")
  {
    follow2.innerHTML="unfollow"
    alert("You started following carlitosalcarazz")
  }
  else
  {
    follow2.innerHTML="follow"
    alert("You unfollowed carlitosalcarazz")
  }

})
  
const follow3=document.querySelector("#sf3")
follow3.addEventListener("click",function (){
  if(follow3.innerHTML==="follow")
  {
    follow3.innerHTML="unfollow"
    alert("You started following narendramodi")
  }
  else
  {
    follow3.innerHTML="follow"
    alert("You unfollowed narendramodi")
  }

})
  
const follow4=document.querySelector("#sf4")
follow4.addEventListener("click",function (){
  if(follow4.innerHTML==="follow")
  {
    follow4.innerHTML="unfollow"
    alert("You started following alanwalkermusic")
  }
  else
  {
    follow4.innerHTML="follow"
    alert("You unfollowed alanwalkermusic")
  }

})
  
const follow5=document.querySelector("#sf5")
follow5.addEventListener("click",function (){
  if(follow5.innerHTML==="follow")
  {
    follow5.innerHTML="unfollow"
    alert("You started following chetri_sunil11")
  }
  else
  {
    follow5.innerHTML="follow"
    alert("You unfollowed chetri_sunil11")
  }

})


