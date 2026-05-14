function acceptOrder() {
  let order = JSON.parse(localStorage.getItem('order'));
  order.status = 'accepted';
  localStorage.setItem('order', JSON.stringify(order));
  alert('Order accepted!');
}

function rejectOrder() {
  let order = JSON.parse(localStorage.getItem('order'));
  order.status = 'pending';
  alert('Order rejected!');
}

