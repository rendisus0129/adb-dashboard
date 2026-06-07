const adb = [

{
nama:"ADB DJAMIL",
rayon:"RAYON A",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1ujfNqB6_tzoWpUZbix1rAqMXyxrLKX9RJ_Kk2DHM5C8/edit"
},

{
nama:"ADB EGY",
rayon:"RAYON A",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1uBgRqOy43sJ0SYbdvA-RyuC7j4ATPM9XjclkVa8CE7Y/edit"
},

{
nama:"ADB SOPIAN HADI",
rayon:"RAYON A",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1E7X9fKFzxCb2_DOo0ptmlINPrbG4i2Y04B9dsZ9QH3c/edit"
},

{
nama:"ADB DIMAS",
rayon:"RAYON A",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1AjG19Q98nxNgsXiDpyL3jsKMNORljmCNMDY7QVBlIso/edit"
},


{
nama:"ADB AEF",
rayon:"RAYON B",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1DBnPh15T0ki87S2Wh5f3Zu-qSVc7XrLdAe8fSNYgzoE/edit"
},

{
nama:"ADB DIKI",
rayon:"RAYON B",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1j01Uw23LaU8_gqHLmiP4fX2w_1w-_hwBxuQT8MUtYo4/edit"
},

{
nama:"ADB TEGUH",
rayon:"RAYON B",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1PYS-cJR27tY3F6pWAl_w5Ej0aQ4RZ0BQTuxoJj-rEvg/edit"
},

{
nama:"ADB SETIADI",
rayon:"RAYON B",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1xfzMDOqwqlIjDWkXTkOB2QDE6h77gjeYMr7IqC4bmlA/edit"
},


{
nama:"ADB DENI",
rayon:"RAYON C",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1e1GgN8yPUiCBA7ITrOmTzOV00YXwiYKQFowUpabxSMs/edit"
},

{
nama:"ADB ANWAR",
rayon:"RAYON C",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1_Sc9I9_QMt2UDVH0W8lStwTnyYZeZPrjfM53SqE-2q0/edit"
},

{
nama:"ADB RIKI",
rayon:"RAYON C",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/191RdvbivyMELQHlf9ucfeeahxIGx7oz8i5Qvk01uNws/edit"
},


{
nama:"ADB HARVI",
rayon:"RAYON D",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1fGEkt4StwG32hFMgtSiVW8FLmmLzcmGtwzpFeEOhSKc/edit"
},

{
nama:"ADB ANDRI",
rayon:"RAYON D",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1uVrwim4npMTcc_zWFZSpr5GOhMcbvgqiapWnLCt-o2g/edit"
},


{
nama:"ADB ASEP",
rayon:"RAYON KANVAS",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1BwyQZTWYoWEBKAjH8CGZsoEzOScxpFaH8VMhxr8xMxg/edit"
},

{
nama:"ADB SUJANA",
rayon:"RAYON KANVAS",
foto:"foto/profil_icon.jpg",
link:"https://docs.google.com/spreadsheets/d/1q59kksy-sJlrD0TRmalZV8GpbPnbsQf1wI-YYqsH7L8/edit"
}

];




const atss = [

{
nama:"ATSS ABDUL",
rayon:"RAYON A",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS HASAN",
rayon:"RAYON A",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS EPUL",
rayon:"RAYON B",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS BAUDIN",
rayon:"RAYON B",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS TOFA",
rayon:"RAYON C",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS NENDY",
rayon:"RAYON C",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS OPAN",
rayon:"RAYON D",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS YOGI",
rayon:"RAYON D",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS GALUH",
rayon:"RAYON E",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS SAMSUL",
rayon:"RAYON E",
foto:"foto/profil_icon.jpg",
link:"#"
},

{
nama:"ATSS ERDI",
rayon:"RAYON E",
foto:"foto/profil_icon.jpg",
link:"#"
}

];



function render(data,id){

let html="";

data.forEach(x=>{

html+=`

<div class="card">


<img 
class="foto-sales"
src="${x.foto}"
onerror="this.src='foto/default.jpg'"
>


<h3>${x.nama}</h3>


<p>${x.rayon}</p>


<a href="${x.link}" target="_blank">

Lihat Aktivitas

</a>


</div>

`;

});


document.getElementById(id).innerHTML=html;

}



render(adb,"adbList");

render(atss,"atssList");



function show(id){

document.querySelectorAll(".page")
.forEach(x=>x.classList.add("hide"));


document.getElementById(id)
.classList.remove("hide");

}
