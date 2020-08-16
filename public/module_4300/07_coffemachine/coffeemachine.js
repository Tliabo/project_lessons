let water = 0;
let beans = 0;
const minWater = 100;
const minBeans = 100;
const maxWater = 500;
const maxBeans = 500;

let hasMachinePower = true;
let isMachineOn = false;
let hasEnoughWater = false;
let hasEnoughBeans = false;


if (isMachineOn) {
  console.log('machine is now on');
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

} else if (!hasMachinePower) {
  alert('has no power');
} else {
  console.log('turn machine on');
}
