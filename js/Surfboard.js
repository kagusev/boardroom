/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Surfboard {
  constructor(
    //Define Parameters:
    type,
    brand,
    model,
    material,
    condition,
    inflatable,
    finsNumber,
    finSystem,
    owner,
    isKeeper,
    estValue,
    dimLength,
    dimWidth,
    dimThickness,
    dimVolume,
    dimNose,
    dimTail
  ) {
    //Define properties:
    this.type = type;
    this.brand = brand;
    this.model = model;

    this.material = material;
    this.condition = condition;
    this.inflatable = inflatable;
    this.finsNumber = finsNumber;
    this.finSystem = finSystem;
    this.owner = owner;
    this.isKeeper = isKeeper;
    this.estValue = estValue;
    //dims
    this.dimLength = dimLength;
    this.dimWidth = dimWidth;
    this.dimWThickness = dimThickness;
    this.dimVolume = dimVolume;
    this.dimNose = dimNose;
    this.dimTail = dimTail;
  }
  //Methods go here

  toggleStatus(boardStatus) {
    this.isKeeper = boardStatus; //use boolean
  }
  updateValue(estValue) {
    this.estValue = estValue;
  }
}

export default Surfboard;
