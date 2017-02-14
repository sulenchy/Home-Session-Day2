var reverseString = require('../reverseString');

describe("Produce the reverse order of a word: ", function() {
  describe("Case for an empty string", function() {

    it("should return null for empty string", function() {
      var response = reverseString.reverseString('');
      expect(response).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      var response = reverseString.reverseString('anna');
      expect(response).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      var response = reverseString.reverseString('NaN');
      expect(response).toEqual(true);
    });

    it("should return true for `civic`", function() {
      var response = reverseString.reverseString('civic');
      expect(response).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      var response = reverseString.reverseString('books');
      expect(response).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      var response = reverseString.reverseString('solomon');
      expect(response).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      var response = reverseString.reverseString('misc');
      expect(response).toEqual('csim');
    });

  });

});