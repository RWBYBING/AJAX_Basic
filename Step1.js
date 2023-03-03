//第一步:创建XMLHttpRequest对象（异步调用对象）

var xmlHttpRequest;  //定义一个变量,用于存放XMLHttpRequest对象
createXMLHttpRequst();   //调用创建对象的方法
//创建XMLHttpRequest对象的方法 
function createXMLHttpRequest(){                                                 
    if(window.ActiveXObject) {//判断是否是IE浏览器
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");//创建IE的XMLHttpRequest对象
    }else if(window.XMLHttpRequest){//判断是否是Netscape等其他支持XMLHttpRequest组件的浏览器
        xmlHttpRequest = new XMLHttpRequest();//创建其他浏览器上的XMLHttpRequest对象
    }
}
