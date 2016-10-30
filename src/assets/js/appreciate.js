
  if(appreciate != undefined){
    $("#alipay-img").attr("src",appreciate.qcode.alipay);
    $("#wepay-img").attr("src",appreciate.qcode.wepay);
  }

  $("#appreciate").click(function(){
    $("span.money-code").toggle("quick")
  })
