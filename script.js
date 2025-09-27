
let ans = "";
function append(param){
    ans += param;
    document.getElementById("output").value = ans;
}

function clearOutput(){
    ans = "";
    document.getElementById("output").value = ans;
}

function removeLast(){
   let s =  document.getElementById("output");
   s.value = s.value.slice(0,-1);
}
function evaluateAns(){
      try {
        if(ans === "") return;
        let answer = eval(ans);
        document.getElementById("output").value = answer;
        ans = answer.toString();
    } catch (e) {
        document.getElementById("output").value = "Error";
        ans = "";
    }
}