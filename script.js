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
    this.blockchain = [this.getGenesisBlock()];
  }
   getGenesisBlock() {
    return new Block(0,Date.now() , 'Genesis Block' , '0');
  }
   addBlock(block) {
    block.prev_hash = this.blockchain[this.blockchain.length - 1].hash;
    block.hash = block.calculateSelfHash();
    this.blockchain.push(block);
  }
  displayChain(){
    for (var i = 0; i < this.blockchain.length; i++) {
      console.log(this.blockchain[i]);
    }
  }
}

let bchain = new Blockchain();
bchain.addBlock(new Block(1,Date.now(),'a-b:500'));
bchain.addBlock(new Block(2,Date.now(),'b-c:200'));
bchain.displayChain();
