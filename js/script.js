// ============================ typing animation =======================
let typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Front End Developer","Grapich Designer","Haha hihi"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ========================= aside ===========================
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

    for(let i=0;i<totalNavList;i++){
        //memilih tag a pada navlist
        const a = navList[i].querySelector("a");
        //ketika di klik jalankan fungsi
        a.addEventListener("click", function(){
            //sebelum itu jalankan perulangan untuk menghapus semua kelas active pada list
            for(let j=0;j<totalNavList;j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            //tambahkan kelas active pada tag yang diklik
            this.classList.add("active");
            
        });
        //ulangi perulangan hingga akhir
    }
