// a goofy class for practice
class Bike {
  constructor(
    //parameters
    numOfTires,
    steeringWheel, // Boolean
    breaks // Boolean
  ) {
    this.numOfTires = numOfTires;
    this.steeringWheel = steeringWheel;
    this.breaks = breaks;
  }

  // add methods
  changeSteering(newSteeringWheel) {
    this.steeringWheel = newSteeringWheel;
  }

  changeBreaks(newBreaks) {
    this.breaks = newBreaks;
  }
}

export default Bike;
