export default {
  getQuote(ctx) {
    return ctx.$http.get('http://www.json-generator.com/api/json/get/ctZdiqObqW?indent=2');
  }
}
