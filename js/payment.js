function payWithPaystack(){
  var handler = PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY',
    email: 'customer@email.com',
    amount: 2000 * 100, // amount in kobo
    currency: 'NGN',
    callback: function(response){
      alert('Payment successful. Ref: ' + response.reference);
      window.location.href = "tracking.html";
    }
  });
  handler.openIframe();
}
