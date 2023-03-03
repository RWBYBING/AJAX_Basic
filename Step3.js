//第三步：设置响应HTTP请求状态变化的函数且设置获取服务器返回数据的语句

//设置当XMLHttpRequest对象状态改变时调用的函数，注意函数名后面不要添加小括号
xmlHttpRequest.onreadystatechange = getData;
 
//定义函数
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState==4){
        if(xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300){//设置获取数据的语句
            document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
            //docunment.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
        }
    }
}
