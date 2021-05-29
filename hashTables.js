const hash = (string, max) => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  return hash % max;
};

let hashTable = function () {
  const storage = [];
  const storageLimit = 4;

    this.print= function () {
        console.log(storage)
    }

    this.add = function(key, value){
        let index = hash(key, storageLimit)

        if(storage[index] === undefined){
            storage[index] = [[key, value]]
        }else
    }

};
