$(document).ready(function(){
$('.add').click(function(){


    $('#myCart tr:last').show();

    let item = $(this).siblings('.item').text();
    let price = $(this).siblings('.price').text();
    let qty = $(this).siblings('.qty').val();
    let total = price*qty;


    // to check if item is in the table
    if ($("td:contains('" + item+ "')").length > 0) {
      let lastQty = $("td:contains('"+ item +"')").next().text();
      let accumQty = parseInt(lastQty) + parseInt(qty);

      $("td:contains('" + item +"')").siblings('.qty2').text(accumQty);
      total = price * accumQty;

      $("td:contains('" + item + "')").siblings('.total').text(total);

      let sum = 0;
      $('.total').each(function(){
        let val = parseInt($(this).text());
        sum += val;
      let doler = parseInt(sum);


      });

      $('.subtotal').text(sum);

    }
    else {

      $('#myCart tr:last').before(
        "<tr>"+
        "<td>"+ item +"</td>"+
        "<td class = 'qty2'>"+ qty +"</td>"+
        "<td class='right price2'><span class = 'currency'>$</span>" +
        price+"</td>" +
        "<td class='right total'>"+total+"</td>"+
        "</tr>"
      );
      let sum = 0;
      $('.total').each(function(){
        let val = parseInt($(this).text());
        sum+=val;
        let dolers = parseInt(sum);
  });
      $('.subtotal').text(sum);
    }
    $(this).siblings('.qty').val(1);
  });

});
