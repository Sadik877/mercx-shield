document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const order = {
    pickup: document.getElementById('pickup').value,
    dropoff: document.getElementById('dropoff').value,
    status: 'pending'
  };
  localStorage.setItem('order', JSON.stringify(order));
  alert('Order created successfully!');
});

