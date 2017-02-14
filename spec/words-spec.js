//Including the Implementation file(words.js)
var words = require('../words');

describe("words()", function() {
  it("counts one word", function() {
    var expectedCounts = { word: 1 };
    var response = words.words("word");
    expect(response).toEqual(expectedCounts);
  });

  it("counts one of each", function() {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    var response = words.words("one of each");
    expect(response).toEqual(expectedCounts);
  });

  it("counts multiple occurrences", function() {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    var response = words.words("one fish two fish red fish blue fish");
    expect(response).toEqual(expectedCounts);
  });

  it("includes punctuation", function() {
    var expectedCounts = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
    var response = words.words("car : carpet as java : javascript!!&@$%^&");
    expect(response).toEqual(expectedCounts);
  });

  it("includes numbers", function() {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    var response = words.words("testing 1 2 testing");
    expect(response).toEqual(expectedCounts);
  });

  it("respects case", function() {
    var expectedCounts = { go: 1, Go:1, GO:1 };
    var response = words.words("go Go GO");
    expect(response).toEqual(expectedCounts);
  });

  it("counts properly international characters", function() {
    var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
    var response = words.words("¡Hola! ¿Qué tal? Привет!");
    expect(response).toEqual(expectedCounts);
  });

  it("counts multiline", function() {
    var expectedCounts = { hello: 1, world: 1 };
    var response = words.words("hello\nworld");
    expect(response).toEqual(expectedCounts);
  });

  it("counts tabs", function() {
    var expectedCounts = { hello: 1, world: 1 };
    var response = words.words("hello\tworld");
    expect(response).toEqual(expectedCounts);
  });

  it("counts multiple spaces as one", function() {
    var expectedCounts = { hello: 1, world: 1 };
    var response = words.words("hello world");
    expect(response).toEqual(expectedCounts);
  });

  it("handles properties that exist on Object's prototype", function() {
    var expectedCounts = { reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  "ok?": 1};
    var response = words.words("reserved words like prototype and toString ok?");
    expect(response).toEqual(expectedCounts);
  });
});