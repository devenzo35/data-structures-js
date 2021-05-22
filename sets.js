// has, add , values, size, remove, intersection, difference, union, subset

function MySet() {
  const collection = [];

  this.has = (element) => {
    if (collection.indexOf(element) !== -1) {
      return true;
    }

    return false;
  };

  this.add = (value) => {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    }
    return false;
  };

  this.values = () => {
    return collection;
  };
  this.size = () => {
    return collection.length;
  };
  this.remove = (value) => {
    delete collection[value];
  };
  this.intersection = (otherSet) => {
    const mySet = this.values();
    const intersectionSet = new MySet();

    mySet.map((value) => {
      if (otherSet.has(value)) {
        return intersectionSet.add(value);
      }
    });

    return intersectionSet;
  };
  this.difference = (otherSet) => {
    const mySet = this.values();
    const differenceSet = new MySet();

    mySet.map((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  };
  this.union = (otherSet) => {
    const mySet = this.values();
    const unionSet = new MySet();

    mySet.map((value) => {
      unionSet.add(value);
    });

    otherSet.map((value) => {
      unionSet.add(value);
    });

    return unionSet;
  };
  this.subset = (otherSet) => {
    const mySet = this.values();
    return mySet.every((value) => otherSet.has(value));
  };
}

let setA = new MySet();
let setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
