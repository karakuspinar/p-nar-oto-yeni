document.addEventListener("DOMContentLoaded", function(){

  const btn = document.getElementById("applyBtn");

  if(!btn){
    console.log("buton bulunamadı");
    return;
  }

  btn.addEventListener("click", function(){

    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year  = document.getElementById("year").value;

    let url = "category.html?";

    if(brand) url += "brand=" + brand + "&";
    if(model) url += "model=" + model + "&";
    if(year)  url += "year=" + year;

    window.location.href = url;

  });

});