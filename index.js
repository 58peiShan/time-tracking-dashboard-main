let list;
function runDiv(data, time) {
  if (data.length > 0) {
    for (let i = 0; list.length; i++) {
      if (time == "weekly") {
        d='Week';
        t = `${data[i].timeframes.weekly.current}`;
        p = `${data[i].timeframes.weekly.previous}`;
      } else if (time == `monthly`) {
        d='Month';
        t = `${data[i].timeframes.monthly.current}`;
        p = `${data[i].timeframes.weekly.previous}`;
      } else {
        d='Day';
        t = `${data[i].timeframes.daily.current}`;
        p = `${data[i].timeframes.weekly.previous}`;
      }
      $(".cardContainer").append(
        `
        <div class="card re" style="backGround:no-repeat ${data[i].color} url(./images/${data[i].img}) 90% -5% ">
         <div class="haed">
          <div class="d-flex">
          <div class="h2">${data[i].title}</div>
          <div>...</div>
         </div>
         <h3>${t}hrs</h3>
         <p>Last ${d} - ${p}hrs</p>
         </div>
        `
      );
    }
  }
}
async function fetchDataD(runDiv){
  $(".re").remove();
 await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      runDiv(data, "daily");
    }).catch((e)=>console.log(e));
};
const fetchDataW = (runDiv) => {
  $(".re").remove();
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      runDiv(data, "weekly");
    });
};
const fetchDataM = (runDiv) => {
  $(".re").remove();
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      (list = data), runDiv(data, "monthly");
    });
};

fetchDataD(runDiv);

$(".info li").click(function (e) {
  $(this).addClass("active").siblings().removeClass("active");
  e.target.innerText === "Daily" && fetchDataD(runDiv);
  e.target.innerText === "Weekly" && fetchDataW(runDiv);
  e.target.innerText === "Monthly" && fetchDataM(runDiv);
  // console.log(list);
});
