class Board {
  static describe() {
    return {
      width: 14,
      height: 14,
      specials: [
        // start
        {x: 7, y: 7, type: "start", text: "S"},
        // x2
        {x: 3, y: 7, type: "x2", text: "x2"},
        {x: 7, y: 3, type: "x2", text: "x2"},
        {x: 11, y: 7, type: "x2", text: "x2"},
        {x: 7, y: 11, type: "x2", text: "x2"},
        {x: 10, y: 4, type: "x2", text: "x2"},
        {x: 4, y: 10, type: "x2", text: "x2"},
        {x: 4, y: 4, type: "x2", text: "x2"},
        {x: 10, y: 10, type: "x2", text: "x2"},
        // x3
        {x: 1, y: 4, type: "x3", text: "x3"},
        {x: 4, y: 1, type: "x3", text: "x3"},
        {x: 13, y: 10, type: "x3", text: "x3"},
        {x: 10, y: 13, type: "x3", text: "x3"},
        {x: 13, y: 4, type: "x3", text: "x3"},
        {x: 4, y: 13, type: "x3", text: "x3"},
        {x: 10, y: 1, type: "x3", text: "x3"},
        {x: 1, y: 10, type: "x3", text: "x3"},
        // replay
        {x: 7, y: 0, type: "replay", text: "R"},
        {x: 0, y: 7, type: "replay", text: "R"},
        {x: 7, y: 14, type: "replay", text: "R"},
        {x: 14, y: 7, type: "replay", text: "R"}
      ]
    }
  }
}

module.exports = Board;
