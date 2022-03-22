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
    totalNavList = navList.length,//bisa langsung disimpan pada kondisi tanpa harus disimpan divariable
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;//bisa langsung disimpan pada kondisi tanpa harus disimpan divariable

    for(let i=0;i<navList.length;i++){
        //memilih tag a pada navlist
        const a = navList[i].querySelector("a");
        //ketika di klik jalankan fungsi
        a.addEventListener("click", function(){

            for(let i=0;i<allSection.length;i++){
                allSection[i].classList.remove("back-section");
            }

            //sebelum itu jalankan perulangan untuk menghapus semua kelas active pada list
            for(let j=0;j<navList.length;j++){

                if(navList[j].querySelector("a").classList.contains("active")){

                    allSection[j].classList.add("back-section");

                }

                //menghapus kelas active pada list
                navList[j].querySelector("a").classList.remove("active");
            }
            //tambahkan kelas active pada tag yang diklik
            this.classList.add("active");
            //panggil function 
            showSection(this);
            
        });
        //ulangi perulangan hingga akhir
    }
function showSection(element) {
    //function dari vidio tutorial
    /*
    
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
    
    */

    
    for(let i=0;i<allSection.length;i++){
        allSection[i].classList.remove("active");
    }

    //fungction dipersingkat
    const target = element.getAttribute("href");
    document.querySelector(target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}