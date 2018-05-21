window.onload = function(){
    document.getElementById('btn').onclick = function(){
        var theP = document.getElementsByTagName('p')[0];
        theP.innerHTML = "你好呀！欢迎来到百度前端技术学院！";
        theP.style.color = "yellow";
        this.style.fontSize = "20px";
    }
}