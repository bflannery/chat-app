var expect = require('expect');

var { generateMessage } = require('./message')

describe('generateMessage', function () {
  it('should generate correct message object', () => {
    var from = 'brian'
    var text = 'hello there'
    const message = generateMessage(from, text)
    console.log({message})
    expect(message.from).toEqual(from)
    expect(message.text).toEqual(text)
    expect(message.createdAt).toBeTruthy()
  });
});
