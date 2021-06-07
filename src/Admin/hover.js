import $ from 'jquery'
    
    $(document).ready(()=>{
        $(".c-hover button").css({'color': 'transparent', 'border': 'transparent'});
        $(".c-hover button").hover(function(){
            $(this).css({'color': 'white', 'border': 'white'});
        },function(){
            $(this).css({'color': 'transparent', 'border': 'transparent'});
        });
    })