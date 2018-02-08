const SHA256  = require('sha256');

class Block {
  constructor(index,timestamp,data,prev_hash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prev_hash = prev_hash;
    this.hash = this.calculateSelfHash();
  }
   calculateSelfHash() {
    return SHA256(this.index + this.timestamp + this.data + this.prev_hash);
  }
}

class Blockchain{
  constructor(){
    this.chain = [this.getGenesisBlock()];
  }
   getGenesisBlock() {
    return new Block(0,Date.now() , 'Genesis Block' , '0');
  }
   addBlock(block) {
    block.prev_hash = this.chain[this.chain.length - 1].hash;
    block.hash = block.calculateSelfHash();
    this.chain.push(block);
  }
  displayChain(){
    for (var i = 0; i < this.chain.length; i++) {
      console.log(this.chain[i]);
    }
  }
}
