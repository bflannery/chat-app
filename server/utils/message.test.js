var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', function () {
  it('should generate correct message object', () => {
    var from = 'brian'
    var text = 'hello there'
    const message = generateMessage(from, text)
    expect(message.from).toEqual(from)
    expect(message.text).toEqual(text)
    expect(message.createdAt).toBeTruthy()
  });
});
  describe('generateLocationMessage', function () {
    it('should generate correct location object', () => {
      var from = 'brian'
      var lat = 1
      var long = 1
      var expectedUrl = `https://www.google.com/maps?q=${lat},${long}`
      const locationMessage = generateLocationMessage(from, lat, long)
      expect(locationMessage.from).toEqual(from)
      expect(locationMessage.url).toEqual(expectedUrl)
      expect(locationMessage.createdAt).toBeTruthy()
    });
});
