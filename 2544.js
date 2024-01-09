let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerNumber = document.getElementById("customerNumber").value;
  if (customerNumber) {
    queue.push(customerNumber);
    document.getElementById("customerNumber").value = ""; // Clear the input
    updateQueueDisplay();
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    alert("ถึงคิวคุณแล้ว: " + queue.shift());
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "<h3>Queue</h3>";
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p><span>${index + 1}. ${customer}</span></p>`;
  });
}
document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    const nextCustomer = queue.shift();
    alert(
      `ถึงคิวคุณแล้ว: ${nextCustomer}\nYour table is ready! Please proceed to the restaurant.`
    );
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});


