function clock(){
    let hours =document.getElementById("hours");
    let minites = document.getElementById("minites");
    let seconds = document.getElementById("seconds");
    let period = document.getElementById("period");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? "PM"  : "AM";
    
    // 13 na bajy hours jab 12 se bara ho to  ya 12 k = ho to ose
    // 12 se - kar do 
    if (h > 12){
        h = h - 12
    }

    // h m s k jab 10 se chota ho tu 0 add kar do warna chalna do

    h = ( h < 10) ? "0" + h : h;
    m = ( m < 10) ? "0" + m : m;
    s = ( s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minites.innerHTML = m;
    seconds.innerHTML =s;
    period.innerHTML = ampm;

};
setInterval(clock,1000);