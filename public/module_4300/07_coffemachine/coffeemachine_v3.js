class coffeeMachine {
  #waterTank;
  #beanTank;
  #onOffSwitch;
  #addWaterButton;
  #addBeansButton;

  #waterLvl = 0;
  #beanLvl = 0;

  static MIN_WATER_LVL = 50;
  static MIN_BEANS_LVL = 25;
  static MAX_WATER_LVL = 300;
  static MAX_BEAN_LVL = 200;

  static LIST = [];

  #machineHasPower = false;
  #machineIsOn = false;
  #machineMakesCoffee = false;

  constructor(waterTank, beanTank, onOffSwitch, addWaterButton, addBeansButton) {
    this.#waterTank = waterTank;
    this.#beanTank = beanTank;
    this.#onOffSwitch = onOffSwitch;
    this.#addWaterButton = addWaterButton;
    this.#addBeansButton = addBeansButton;


    this.#onOffSwitch.addEventListener('click', e => this.turnMachineOnOff());

    this.#addWaterButton.addEventListener('click', e => this.addWater());

    this.#addBeansButton.addEventListener('click', e => this.addBeans());

    this.updateBeanLvl();
    this.updateWaterLvl();

    coffeeMachine.LIST.push(this);
  }

  isWaterLvlOk() {
    return this.#waterLvl >= coffeeMachine.MIN_WATER_LVL && coffeeMachine.#waterLvl <= coffeeMachine.MAX_WATER_LVL;
  }

  isBeanLvlOk() {
    return this.#beanLvl >= coffeeMachine.MIN_BEANS_LVL && coffeeMachine.#beanLvl <= coffeeMachine.MAX_BEAN_LVL;
  }

  isMakingCoffee() {
    return this.#machineMakesCoffee;
  }

  plugMachineInOut() {
    if (!this.#machineHasPower) {
      this.#machineHasPower = true;
      this.#onOffSwitch.classList.replace('nopower', 'off');
    } else {
      this.#machineMakesCoffee = false;
      this.#machineIsOn = false;
      this.#machineHasPower = false;
      this.#onOffSwitch.classList.replace('off', 'nopower');
      this.#onOffSwitch.classList.replace('on', 'nopower');
    }
  }

  turnMachineOnOff() {
    if (this.#machineHasPower && this.#machineIsOn) {
      this.#machineIsOn = false;
      this.#onOffSwitch.classList.replace('on', 'off');
    } else if (this.#machineHasPower && !this.#machineIsOn) {
      this.#machineIsOn = true;
      this.#onOffSwitch.classList.replace('off', 'on');
    } else {
      alert('machine has no power to turn on');
    }
    console.table(this);
  }

  addWater() {
    if (this.#waterLvl <= coffeeMachine.MAX_WATER_LVL - 50) {
      this.#waterLvl += 50;
    } else {
      this.#waterLvl = coffeeMachine.MAX_WATER_LVL;
    }
    this.updateWaterLvl();

    // console.table(this);
  }

  useWater() {
    if (this.isWaterLvlOk()) {
      this.#waterLvl -= 50;
    } else {
      console.log('fill in more water');
    }
    this.updateWaterLvl();
  }

  addBeans() {
    if (this.#beanLvl <= coffeeMachine.MAX_BEAN_LVL - 50) {
      this.#beanLvl += 50;
    } else {
      this.#beanLvl = coffeeMachine.MAX_BEAN_LVL;
    }
    this.updateBeanLvl();
    // console.table(this);
  }

  useBeans() {
    if (this.isBeanLvlOk()) {
      this.#beanLvl -= 25;
    } else {
      console.log('put more beans in machine');
    }
    this.updateBeanLvl();
  }

  makeCoffee() {
    if (!this.isMakingCoffee()) {
      this.#machineMakesCoffee = true;
      console.log('Im making cofefe!');
      this.useWater();
      this.useBeans();
      console.log('cofefe done!');
      this.#machineMakesCoffee = false;
    } else {
      console.log('Machine is already making Cofefe!');
    }
  }

  calcTankLvlPercent(tankLvl, maxTankLvl) {
    let result = (100 * tankLvl) / maxTankLvl;
    console.log(result);
    return result;
  }

  updateWaterLvl() {
    this.#waterTank.style.background = `linear-gradient(to top, #0b6789 0%, #0b6789 ${this.calcTankLvlPercent(this.#waterLvl, coffeeMachine.MAX_WATER_LVL)}%, transparent ${this.calcTankLvlPercent(this.#waterLvl, coffeeMachine.MAX_WATER_LVL)}%, transparent 100%)`;
  }

  updateBeanLvl() {
    this.#beanTank.style.background = `linear-gradient(to top, saddlebrown 0%, saddlebrown ${this.calcTankLvlPercent(this.#beanLvl, coffeeMachine.MAX_BEAN_LVL)}%, transparent ${this.calcTankLvlPercent(this.#beanLvl, coffeeMachine.MAX_BEAN_LVL)}%, transparent 100%)`;
  }

}

new coffeeMachine(
  document.querySelector('#water-tank'),
  document.querySelector('#bean-tank'),
  document.querySelector('#on-off-switch'),
  document.querySelector('#add-water'),
  document.querySelector('#add-beans')
);

coffeeMachine.LIST[0].plugMachineInOut();

console.table(coffeeMachine.LIST[0]);

// console.table(coffeeMachines[0]);