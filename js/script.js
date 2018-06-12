var streamapi="https://wind-bow.glitch.me/twitch-api/streams/";
var channelapi="https://wind-bow.glitch.me/twitch-api/channels/";
var channels=["dhidden","orzanel","dacucelrau","last_gh0st","ebeb252","alexfitw","terrible_driving","iamanc13nt","r0byftw","kaput_dab0t","tatabufnita"];

$(document).ready(function(){
  /** * Calling allStreamCall function on every channel */
  channels.forEach(function(channel){
    allStreamCall(channel);
  });
  /** * Show all channels when clicked on All button */
$('#all').click(function(){
  var all=$('.res .row'); /* Select all divs with class row in result div */
  all.each(function(index){ /* iterate through each one and show them */
    $(this).css({'display':'block'});
  });
});

/** * Show Only online streaming channels and hide the offline ones. */
$('#online').click(function(){
  var online=$('.res .row'); /* Select all div with class row in result div*/
  online.each(function(index){
    var toggle=$(this).attr('id'); /* take id attribute of that row to check if it is online or offline. */
    if(toggle=='online'){
      $(this).css({'display':'block'}); /* show */
    }
    else if(toggle=='offline'){
      $(this).css({'display':'none'}); /* hide */
    }
  });
});

/** * Show Only offline channels */
$('#offline').click(function(){
  var offline=$('.res .row'); /* Select all div with class row in result div*/
  offline.each(function(index){
    var toggle=$(this).attr('id'); /* take id attribute of that row to check if it is online or offline. */
    if(toggle=='online'){
      $(this).css({'display':'none'}); /* hide */
    }
    else if(toggle=='offline'){
      $(this).css({'display':'block'}); /* show */
    }
  });
});
});
/* continue js/script.js */
function allStreamCall(streamchannel){
  var logo,name,game,status,statusdesc,channel_link;

  var streamchannel_url=streamapi+streamchannel+"?callback=?";
  var channel_url=channelapi+streamchannel+"?callback=?";

  /** * call streaming channels API to see if it is streaming or not and if yes then what it is streaming */
  $.getJSON(streamchannel_url,function(data){
    if(data.status=='404'){ /* if user not found */
      game=data.message;
      status="offline";
      statusdesc="";
    }
    else if(data.status=='422'){ /* if user unavailable or closed their account */
      game=data.message;
      status="offline";
      statusdesc="";
    }
    else{
      data=data.stream;
      if(data===null){ /* means user is offline */
        game="offline";
        status="offline";
        statusdesc="";
        logo="http://www.gravatar.com/avatar/3c069b221c94e08e84aafdefb3228346?s=47&d=http%3A%2F%2Fwww.techrepublic.com%2Fbundles%2Ftechrepubliccore%2Fimages%2Ficons%2Fstandard%2Ficon-user-default.png";
      }
      else{
        game=data.channel.game;
        status="online";
        statusdesc=":"+data.channel.status;
      }
    }

    /** * call channels api to get channel informations like channel display name, logo and link url etc. */
    $.getJSON(channel_url,function(data){
      name=data.display_name;
      logo=data.logo;
      channel_link=data.url;
      if(data.status=='404'){ /* if channel not found */
        name=streamchannel;
        channel_link="#";
        logo="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      }
      else if(data.status=='422'){ /* if channel unavailable or closed their account */
        name=streamchannel;
        channel_link="#";
        logo="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      }
      else if(logo===null){ /* if channel does not have a logo then show the following logo */
        logo="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      }

      /* prepare a row for the result in html */
      var result=" <div class='row' id='"+status+"'> <div class='col-md-3 col-xs-4'> <span class='logo'><img class='img img-circle' src='"+logo+"'></span> <a href='"+channel_link+"'> <span class='name text-center'>"+name+"</span> </a> </div> <div class='col-md-9 col-xs-8 text-center' id='statusdescription'> <span class='game'>"+game+"</span> <span class='status'>"+statusdesc+"</span> </div> </div>";

      if(status=='offline')
        $('.res').append(result);
      else
        $('.res').prepend(result);
    });
  });
};