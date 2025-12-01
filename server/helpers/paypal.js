const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox',
  client_id:
    'ASgoM-hpppYvJ89ohqTqhrs7NwOIKl4H89EBmf_LDYQ1Seo8ZZ6TWMmA8enZAo3WcMDrlJ2KnQh-1zDW',
  client_secret:
    'ELJg_Ew3fLGDpVQZtkSBH08UST1-VYw0eBT7BN87sJtfR9jVXsymPBbNYma8hB0A2eQUcT05cQQtf38g',
});

module.exports = paypal;
