
  if(appreciate != undefined){
    $("#alipay-img").attr("src",appreciate.qcode.alipay);
    $("#wepay-img").attr("src",appreciate.qcode.wepay);
  }

  $("div#appreciate[class='reward-button']").click(function(){
    $("span.money-code").toggle("quick")
  })
