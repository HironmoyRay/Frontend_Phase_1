const takeOrder = (customer, cb1) => {
  console.log(`Taking Order for ${customer}`);
  cb1(customer);
};

const processingOrder = (customer, cb2) => {
  console.log(`Processing order for ${customer}`);
  setTimeout(() => {
    console.log(`Order Cooked for ${customer}`);
    cb2(customer);
  }, 3000);
};

const deliverOrder = (customer) => {
  console.log(`Order delivered to ${customer}`);
};

takeOrder("Hironmoy", (customer) => {
  processingOrder(customer, (customer) => {
    deliverOrder(customer);
  });
});
