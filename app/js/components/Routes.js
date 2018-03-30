import Home from './home/Home';
import Payment from './/payment/Payment';
import Address from './address/Address';
import Invoice from './invoice/Invoice';

const routes = [
  { path: '/', component: Home },
  { path: '/payment', component: Payment },
  { path: '/address', component: Address },
  { path: '/invoice', component: Invoice },
];

export default routes;
