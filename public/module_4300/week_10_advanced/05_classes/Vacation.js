// classes

class Vacation {

  constructor(destination, duration) {
    this.destination = destination;
    this.duration = duration;
  }

  print() {
    console.log(`${this.destination} will take ${this.duration} days`);
  }

  sayHello() {
    console.log('Hello, I am Classy the class');
  }

}

const firstTrip = new Vacation('Santiago, Chile', 7)
const secondTrip = new Vacation('Zurich, Bern', 1)

firstTrip.print()
secondTrip.print()

firstTrip.sayHello()

// we can also extend classes
// the subclass will inherit the properties of the superclass (vacation)

class Expedition extends Vacation {
  constructor(destination, duration, gear) {
    super(destination, duration);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`Bring your ${this.gear}`);
  }
}

const newTrip = new Expedition('Mt. Everest', 9, 'sunblocker');

newTrip.print();
