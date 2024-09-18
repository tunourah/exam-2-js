// const url = "http://api.aladhan.com/v1/calendar/2024/9?latitude=51.75865125&longitude=-1.25387785&method=4";

// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data);


// }
// )
 
async function getData(){
    let res=await fetch("http://api.aladhan.com/v1/calendar/2024/9?latitude=51.508515&longitude=-0.1254872&method=4http://api.aladhan.com/v1/calendar/2024?latitude=51.508515&longitude=-0.1254872&method=2")
    let data= await res.json()
    let alldata=data.data[0]
    let time=alldata.timings
    let d=data.data[0].date.readable
    let day=data.data[0].date.gregorian.weekday.en
    let hijri=data.data[0].date.hijri.date
    console.log(hijri);
   

}
getData()