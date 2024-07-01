let body=document.querySelector("body");
let btns=document.querySelectorAll(".faqBtn");
let btn1=document.getElementById("faq1")
let btn2=document.getElementById("faq2")
let btn3=document.getElementById("faq3")
let btn4=document.getElementById("faq4")
let btn5=document.getElementById("faq5")
let btn6=document.getElementById("faq6")
let faqBox1=document.getElementById("faqBox1");
let faqBox2=document.getElementById("faqBox2");
let faqBox3=document.getElementById("faqBox3");
let faqBox4=document.getElementById("faqBox4");
let faqBox5=document.getElementById("faqBox5");
let faqBox6=document.getElementById("faqBox6");
btn1.addEventListener("click",()=>{
    div();
    faqBox1.append(ans);
    ans.innerHTML="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
})
let div=()=>{
let ans=document.createElement("div");
ans.classList.add("ans");
}