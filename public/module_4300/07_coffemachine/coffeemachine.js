let water = 0;
let beans = 0;
let minWater = 100;
let minBeans = 100;

let hasMachinePower = false;
let isMachineOn = false;
let hasEnoughWater = false;
let hasEnoughBeans = false;


if (hasMachinePower) {
  console.log('has power');

  if (isMachineOn) {
    console.log('machine is on');
    console.log('water lvl is: ' + water + '\n' + 'bean lvl is: ' + beans);

    if (water > minWater) {
      hasEnoughWater = true;
      console.log('there is enough water in machine');
    } else {
      alert('fill in more water');
    }

    if (beans > minBeans) {
      hasEnoughBeans = true;
      console.log('there are enough beans in machine');
    } else {
      alert('put more beans in machine');
    }

    if (hasEnoughWater && hasEnoughBeans) {
      console.log('choos program ...');
      console.log('make cofefe!');
    }

  } else {
    alert('turn machine on');
  }

} else {
  alert('no Power');
}