let textBoxVal = $('#textbox').val()
//let type = event.target.value

 function convertCurrency(event) {
   if ('type' in event.target && event.target.type === 'button') {
     console.log($('#textbox').val() * 1.22);
     if (event.target.value === "USD") {
     	$.get('http://data.fixer.io/api/latest?access_key=c8d9f0010c1c5709b7f9b38afd79f1a3&format=1', (response) => {
  		$('#output_amount').append('<p>' + ($('#textbox').val() * response.rates.USD) + " US Dollars")
  		});
     
     } else if (event.target.value === "GBP") {
     	$.get('http://data.fixer.io/api/latest?access_key=c8d9f0010c1c5709b7f9b38afd79f1a3&format=1', (response) => {
  		$('#output_amount').append('<p>' + ($('#textbox').val() * response.rates.GBP) + " British Pounds");
  		});

     } else if (event.target.value === "CNY") {
     	$.get('http://data.fixer.io/api/latest?access_key=c8d9f0010c1c5709b7f9b38afd79f1a3&format=1', (response) => {
  		$('#output_amount').append('<p>' + ($('#textbox').val() * response.rates.CNY) + " Chinese Yen")
  		});
     } else if (event.target.value === "JPY") {
     	$.get('http://data.fixer.io/api/latest?access_key=c8d9f0010c1c5709b7f9b38afd79f1a3&format=1', (response) => {
  		$('#output_amount').append('<p>' + ($('#textbox').val() * response.rates.JPY) + " Japanese Yen")
  		});
     }
   }
 }

 document.body.addEventListener('click', convertCurrency);

console.log($('#textbox').html())

