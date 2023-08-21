function display(content){
    result.value += content
}
function resetResult(){
    result.value=""
}

function exprEval(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value="Invalid expression"
    }
}
function removeLast(){
    result.value = result.value.slice(0,-1)
}