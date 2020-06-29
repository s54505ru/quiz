let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 10;
let sco = 0;
let flag = true;
//タイマー処理
setInterval(() => {
    if(cnt > 0){
        cnt--;
        res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    }else{
        res.stylr.color = "red";
        res.textContent = "スコア：" + sco +"｜終了";
        que.textContent = "時間切れ！";
        flag = false;
    }
}, 1000);
let num = 0;
let max = 5;
let name = new Array(max);
name = ["Toyota", "Mazda","Honda","Nissan","Mitsubishi"]
let seikai = new Array(max);
seikai = ["×", "○", "×", "○", "×"];
//○をクリックした時
maru.addEventListener("click",() => {
    if(flag){
        console.log("maru");
        if(seikai[num] == "○"){
            console.log("正解");
            sco++;
            res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
        }else{
            console.log("不正解");
        }
        num++;
        if(num < max){
            que.textContent = "問題" + (num + 1) + " " + name[num];
            logo.src = "img/logo" + num + ".png";
        }else{
            que.textContent= "問題の回答終了！";
            if(sco == max){
                que.textContent = "全問正解！おめでとう！"
                logo.src = "img/clear.png";
            }
        }
    }
});
//×をクリックした時
batsu.addEventListener("click",() => {
    if(flag){
        console.log("batsu");
        if(seikai[num] == "×"){
            console.log("正解");
        }else{
            console.log("不正解");
        }
        num++;
        if(num < max){
            que.textContent = "問題" + (num + 1) + " " + name[num];
            logo.src = "img/logo" + num + ".png";
        }else{
            que.textContent= "問題の回答終了！";
            if(sco == max){
                que.textContent = "全問正解！おめでとう！"
                logo.src = "img/clear.png";
            }
        }
    }
});