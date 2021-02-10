const { default: SlippiGame } = require('@slippi/slippi-js');

const game = new SlippiGame("test.slp");

// // Get game settings – stage, characters, etc
// const settings = game.getSettings();
// console.log(settings);

// // Get metadata - start time, platform played on, etc
// const metadata = game.getMetadata();
// console.log(metadata);

// // Get computed stats - openings / kill, conversions, etc
// const stats = game.getStats();
// console.log(stats);

// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
const frames = game.getFrames();
console.log("player 1")
console.log(frames[0].players[0]); // Print frame when timer starts counting down

console.log("player 2")
console.log(frames[0].players[1]); // Print frame when timer starts counting down