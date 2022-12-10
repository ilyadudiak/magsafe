

let magsafe = document.querySelector(".magsafe");

let m = document.querySelector(".mlet");

let title = document.querySelector(".title");

let arrow = document.querySelector(".arrow");

setTimeout(()=> magsafe.classList.add("stopanimation"), 2000);
setTimeout(()=> m.classList.add("m_animation"), 2200);
setTimeout(()=> title.classList.add("title__animation"), 3200);
setTimeout(()=> title.style.display = "inline", 3200);
setTimeout(()=> arrow.classList.add("start-arrow-animation"), 4200);

