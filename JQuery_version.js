$(document).ready(function(){
    $('#messageboard_form').submit(function(event){
        //防止表单默认提交
        event.preventDefault();

        //获取表单数据
        var formData = $(this).serialize();
        console.log(formData);

        //发送AJAX请求
        $.ajax({
            url: 'http://localhost:30003/Message/Test',
            type: 'GET',
            success: function(response){
                console.log(response);
                console.log("1");
            }
        })
    })
})