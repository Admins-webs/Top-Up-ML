function generateTransactionId() {
  return 'ML' + Date.now() + Math.floor(Math.random() * 1000);
}

function submitOrder() {
  const playerId = document.getElementById('playerId').value;
  const serverId = document.getElementById('serverId').value;
  const diamond = document.getElementById('diamond').value;
  const payment = document.getElementById('payment').value;

  if (!playerId || !serverId) {
    alert('ID dan Server wajib diisi!');
    return;
  }

  const transactionId = generateTransactionId();
  const order = {
    id: transactionId,
    playerId,
    serverId,
    diamond,
    payment,
    status: 'Diproses'
  };

  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  alert('Pesanan berhasil dibuat! ID Transaksi: ' + transactionId);
}

function checkStatus() {
  const searchId = document.getElementById('searchId').value;
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders.find(o => o.id === searchId);

  const resultDiv = document.getElementById('result');
  if (order) {
    resultDiv.innerHTML = `
      <p><strong>ID Transaksi:</strong> ${order.id}</p>
      <p><strong>Player ID:</strong> ${order.playerId}</p>
      <p><strong>Server:</strong> ${order.serverId}</p>
      <p><strong>Diamond:</strong> ${order.diamond}</p>
      <p><strong>Pembayaran:</strong> ${order.payment}</p>
      <p><strong>Status:</strong> ${order.status}</p>
    `;
  } else {
    resultDiv.innerHTML = '<p class="text-red-500">Pesanan tidak ditemukan!</p>';
  }
}
