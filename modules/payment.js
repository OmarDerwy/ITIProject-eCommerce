paypal.Buttons({
    createOrder: (data, actions) => {
      return actions.order.create({
        
        purchase_units: [{
          amount: {
            value: '200.00'
          }
        }]
      });
    },
    onApprove: (data, actions) => {
      return actions.order.capture().then((details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
        console.log(details);
      });
    },
    onError: (err) => {
      console.error('An error occurred:', err);
      alert('Payment could not be completed. Please try again.');
    }
  }).render('#paypal-button-container');
console.log("payment.js");