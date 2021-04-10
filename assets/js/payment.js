let price = $('ebookPrice').value;

paypal.Buttons({
    style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'pill',
        label: 'paypal'
    },
    createOrder: async function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: ebookPrice.value
                }
            }]
        });
    },
    onApprove: async function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('Payment was successful!');
            setTimeout(() => {
                $('.paymentCard').submit();
            }, 200);
        });
    }
}).render('#paypal-button-container'); // Display payment options on your web page
