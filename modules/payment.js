paypal.Buttons({
    createOrder: (data, actions) => {
      return actions.order.create({
        
        purchase_units: [{
          amount: {
            value: '100.00'
          } 
        }]
      });
    },
    onApprove: (data, actions) => {
      return actions.order.capture().then((details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
        console.log(details);
        if(details.status==="complete"){  
        window.location.href = "../index.html";
        }
      });
    },
    onError: (err) => {
      console.error('An error occurred:', err);
      const properties = JSON.parse(localStorage.getItem('properties'));
      properties.pop();
      localStorage.setItem("properties", JSON.stringify(properties));
      alert('Payment could not be completed. Please try again.');
      window.location.href = "../index.html";
    }
  }).render('#paypal-button-container');
