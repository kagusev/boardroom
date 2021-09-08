/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

const Skateboard = class {
  constructor(
    //Define Parameters:
    type,
    brand,
    model,

    condition,

    owner,
    status,
    estValue,
    dimLength,
    dimWidth,
    dimWheelbase,
    dimNose,
    dimTail
  ) {
    //Define properties:
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.condition = condition;
    this.owner = owner;
    this.status = status; //trying to use different method vs surfboards
    this.estValue = estValue;
    //dims
    this.dimLength = dimLength;
    this.dimWidth = dimWidth;
    this.dimWheelbase = dimWheelbase;
    this.dimNose = dimNose;
    this.dimTail = dimTail;
  }
  //Methods go here
  changeStatus(boardStatus) {
    this.status = boardStatus; //use char
  }
};
export default Skateboard;

/*
const skateboard = {

  
    // this is method  where 'desiredPrice' is parameter
    toggleValue: function (desiredPrice) {
      this.estValue = desiredPrice; // this is function statement
    },
  
    //this is method
    changeStatus: function (changeOfmind) {
      this.status = changeOfmind;
    },
  }; */
