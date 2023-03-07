$(document).ready(function(){
    $('#messageboard_form').submit(function(event){
        //防止表单默认提交
        event.preventDefault();

        //获取时间
        var now = new Date().toLocaleString();

        //获取表单数据
        var formData = {
            Name: $('#name').val(),
            Email: $('#email').val(),
            Content: $('#comment').val(),
            ReleaseTime: now
        };
        console.log(formData);
        console.log(JSON.stringify(formData));

        //发送AJAX请求
        $.ajax({
            url: 'http://localhost:30003/Message/Test2',
            method: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response){
                console.log(response);
            }
        })
    })
})