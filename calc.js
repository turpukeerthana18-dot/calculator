var a=0,b=0,op=0
function display(a){
    document.getElementById("input").value+=a
}
function operator(o){
    a=Number(document.getElementById("input").value);
    op=o;
    document.getElementById("input").value="";
}
function equal(){
    b=Number(document.getElementById("input").value);
    switch(op){
        case '+': c= a+b; 
                  document.getElementById("input").value=c;
                    break;
        case '-': c= a-b;
                  document.getElementById("input").value=c;
                    break;
        case '*': c= a*b;
                  document.getElementById("input").value=c;
                    break;
        case '/': c= a/b;
                  document.getElementById("input").value=c;
                    break;
    }
}