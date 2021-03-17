$(function(){
 
    $('#profilecardname').text(Cookies.get('name'));
    $('#profilecarduid').text('@'+Cookies.get('uid'));

    $statslistitemcount = $('#statslistitemcount');

    $totalchars = $('#totalchars');

    $posttweetta = $('#postbolgta');

    $tweetscontainer = $('#blogscontainer');

    $posttweetta.keypress(function(e){
    if (e.keyCode == 13 && !e.shiftKey)
    {
        e.preventDefault();
        return false;
    }

});

$posttweetta.keyup(function(e){
    $totchars = $(this).val().length;
        if($totchars <= 250)
        $totalchars.text($totchars);
    else
    {
        $totalchars.text('250');
        $(this).val($(this).val().substring(0, 250));
    }
});

$('#posttweetbut').click(function(){
    if(($taval = $.trim($posttweetta.val())).length > 0)
    {
        $tweetscontainer.prepend(tweetitem($taval));
        $posttweetta.val(''); 
        $statslistitemcount.text(parseInt($statslistitemcount.text()) + 1); 
    }
});

$tweetscontainer.on('click', 'span.repost', function(){
    $tweetstatscount = $(this).children('.blogstatscount');
    $tweetstatscount.text(parseInt($tweetstatscount.text()) + 1);

    $tweetscontainer.prepend(tweetitem($tweetstatscount.closest('.blogcontainer').find('p').text()));
    $statslistitemcount.text(parseInt($statslistitemcount.text()) + 1); 
});

$tweetscontainer.on('click', 'span.like', function(){
    $tweetstatscount = $(this).children('.blogstatscount');
    if($(this).hasClass('color'))
    {
        $(this).removeClass('color');
        $tweetstatscount.text(parseInt($tweetstatscount.text()) - 1);
    }
    else
    {
        $(this).addClass('color');
        $tweetstatscount.text(parseInt($tweetstatscount.text()) + 1);
    }
});

function tweetitem($taval)
{
    return '<li class="blogcontainer">'+
                '<img class="blogprofimg" src="https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png">'+
                '<span class="blogprofname">'+Cookies.get('name')+'</span>'+
                '<span class="blogprofuid">@'+Cookies.get('uid')+'</span>'+
                '<div class="ml58px">'+
                    '<p style="margin: 0px;">'+$taval+'</p>'+
                    '<div class="mt10px">'+
                        '<span class="repost blogstats">'+
                            '<i class="fa fa-repost"></i>'+
                            '<span class="blogstatscount">0</span>'+
                        '</span>'+
                        '<span class="like blogstats">'+
                            '<i class="fa fa-heart-o"></i>'+
                            '<span class="blogstatscount">0</span>'+
                        '</span>'+
                    '</div>'+
                '</div>'+
            '</li>';
}
});