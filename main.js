
const clendr = document.getElementById("clendr");
const day1 = document.getElementById("day");
const fajr = document.getElementById("fajr");
const dhuhr = document.getElementById("dhuhr");
const asr = document.getElementById("asr");
const maghrib = document.getElementById("maghrib");
const ashah = document.getElementById("ashah");

async function getdate(){
    let res=await fetch("http://api.aladhan.com/v1/calendar/2024/9?latitude=51.508515&longitude=-0.1254872&method=4http://api.aladhan.com/v1/calendar/2024?latitude=51.508515&longitude=-0.1254872&method=2")
    let data= await res.json()
    let alldata=data.data[0]
    let time=alldata.timings
    let d=data.data[0].date.readable
    let day=data.data[0].date.gregorian.weekday.en
    let hijri=data.data[0].date.hijri.date
    clendr.textContent= " التاريخ "+d +" -- "+ hijri;
    
    day1.textContent= "اليوم" +" "+day;
    fajr.textContent= "الفجر"+" "+time.Fajr;
    dhuhr.textContent= "الظهر"+" "+time.Dhuhr;
    asr.textContent= "العصر"+" "+time.Asr;
    maghrib.textContent= "المغرب"+" "+time.Maghrib;
    ashah.textContent= "العشاء"+" "+time.Isha;




}
getdate()






















// get user name from session storage

fetch("https://66e7e6b3b17821a9d9da6ff8.mockapi.io/login")
  .then((response) => response.json())
  .then((users) => {
    let user = users.find(
      (user) => user.id === sessionStorage.getItem("userId")
    );
    document.getElementById("username").textContent = "اهلا " + user.name;
    document.getElementById("username").add("text-success");
    document.getElementById("username").add("font-weight-bold");
  });

 
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let lon = document.getElementById("lon");
let lat = document.getElementById("lat");
let humidity = document.getElementById("humidity");

async function getwither() {
 
  let res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=dd5556c2a6951da94bb51e47913bb77a"
  );
  let data = await res.json();
  console.log(data);

city.textContent = "المدينة : " + data.name;
temp.textContent = "درجة الحرارة: " + data.main.temp;
lon.textContent = "خطوط الطول: " + data.coord.lon;
lat.textContent = "خطوط العرض : " + data.coord.lat;
humidity.textContent = "الرطوبة  : " + data.main.humidity;

//   let row = document.createElement("div");
//   row.classList.add("row");
//   container.append(row);
//   let list = document.createElement("div");
//   list.classList.add("text-center");
//   list.classList.add("col-12");

//   list.innerHTML =`
//   <div class="card container p-2 m-3" dir="rtl" >
//   <h1 class="text-end">المدينة : ${data.name}</h1>
//   <hr>
//   <h2 class="text-end">درجة الحرارة: ${data.main.temp}</h2>
//   <hr>
//   <h2 class="text-end">خطوط الطول: ${data.coord.lon}</h2>
//   <hr>
//   <h2 class="text-end">خطوط العرض : ${data.coord.lat}</h2>
//   <hr>
//   <h2 class="text-end">الرطوبة  : ${data.main.humidity}</h2>
//     </div>
//   `;
//   container.append(list);

//   console.log(list);
}
getwither();


 