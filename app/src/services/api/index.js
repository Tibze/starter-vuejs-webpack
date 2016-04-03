import config from '../../config';

export default {
  getQuote(vm) {
    return vm.$http.get(config.BASE_URL_API+"getBooking");
  }
}
