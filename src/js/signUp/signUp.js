//radio 变色
$(".radioGroup >div >input").each(function() {
        $(this).bind("click", function() {
            $("span").siblings('.radioColor').removeClass('radioColor');
            $(this).next().addClass('radioColor');

            $("div.radioGroup").attr("isTrue",true);

            isTrue();
        });
    });

    //输入框 变色
    $(".signUp >form >input").bind('input propertychange',function(){
        $(this).css("color","#212224");

        if($(this).val().length !== 0 ){
            $(this).attr("isTrue",true)
        }else {
            $(this).attr("isTrue",false)
        }

        isTrue();
    });

    //submit按钮
    $(function(){
        $("#submitBtn").click(function(){
            $('#back').addClass('display-block');
            $('#popup').addClass('display-block');
        });
    });

    //监听按钮是否可用
    function isTrue() {
        var u_name = $('input[name="user_name"]').attr("isTrue");
        var u_telePhone = $('input[name="user_telephone"]').attr("isTrue");
        var radio = $("div.radioGroup").attr("isTrue");
        if(u_name === 'true'
            && radio === 'true'
            && u_telePhone === 'true')
        {
            $("#submitBtn").css("opacity",".8");
            $("#submitBtn").disabled = false;
        }else{
            $("#submitBtn").css("opacity",".2");
            $("#submitBtn").disabled = true;
        }
    }