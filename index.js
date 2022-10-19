let list;
function runDiv(data) {
  if (data.length > 0) {
      for (let i = 0; list.length; i++) {
      $(".cardContainer").append(
        `<div class="card" style="backGround:no-repeat ${data[i].color} url(./images/${data[i].img}) 90% -5% ">
        <div>
        <div class="haed">
        <div class="h2">${data[i].title}</div>
        <div>...</div>
        <h3>${data[i].timeframes.daily.current}hrs<h3>
        </div>
        </div>
        </div>`
      );
    }
  }
}
const fetchDataD = (runDiv) => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      runDiv(data);
    });
};
const fetchDataW = (runDiv) => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      runDiv(data);
    });
};
const fetchDataM = (runDiv) => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      runDiv(data);
    });
};

fetchDataD(runDiv);

$(".info li").click(function (e) {
  $(this).addClass("active").siblings().removeClass("active");
  console.log(list);
});
