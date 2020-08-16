let coffeeMachine = {
  waterLvl: 0,
  beanLvl: 0,

  // its mutable...
  MIN_WATER_LVL: 50,
  MIN_BEANS_LVL: 25,
  MAX_WATER_LVL: 300,
  MAX_BEAN_LVL: 200,

  machineHasPower: false,
  machineIsOn: false,
  machineMakesCoffee: false,

  isWaterLvlOk: function() {
    return this.waterLvl >= this.MIN_WATER_LVL && this.waterLvl <= this.MAX_WATER_LVL;
  },
  isBeanLvlOk: function() {
    return this.beanLvl >= this.MIN_BEANS_LVL && this.beanLvl <= this.MAX_BEAN_LVL;
  },
  isMakingCoffee: function() {
    return this.machineMakesCoffee;
  },

  plugMachineInOut: function() {
    if (!this.machineHasPower) {
      this.machineHasPower = true;
    } else {
      this.machineMakesCoffee = false;
      this.machineIsOn = false;
      this.machineHasPower = false;
    }
  },
  turnMachineOnOff: function() {
    if (this.machineHasPower) {
      this.machineIsOn = !this.machineIsOn;
    } else {
      alert('machine has no power');
    }
  },
  addWater: function() {
    if (this.waterLvl <= this.MAX_WATER_LVL - 100) {
      this.waterLvl += 100;
    } else {
      this.waterLvl = this.MAX_WATER_LVL;
    }
  },
  useWater: function() {
    if (this.isWaterLvlOk()) {
      this.waterLvl -= 50;
    } else {
      alert('fill in more water');
    }
  },
  addBeans: function() {
    if (this.beanLvl <= this.MAX_BEAN_LVL - 100) {
      this.beanLvl += 100;
    } else {
      this.beanLvl = this.MAX_BEAN_LVL;
    }
  },
  useBeans: function() {
    if (this.isBeanLvlOk()) {
      this.beanLvl -= 25;
    } else {
      alert('put more beans in machine');
    }
  },
  makeCoffee: function() {
    if (!this.isMakingCoffee()) {
      this.machineMakesCoffee = true;
      console.log('Im making cofefe!');
      this.useWater();
      this.useBeans();
      console.log('cofefe done!');
      this.machineMakesCoffee = false;
    } else {
      console.log('Machine is already making Cofefe!');
    }
  }
};

coffeeMachine.plugMachineInOut();
coffeeMachine.turnMachineOnOff();
coffeeMachine.addBeans();
console.table(coffeeMachine);
coffeeMachine.addWater();
console.table(coffeeMachine);
coffeeMachine.makeCoffee();
coffeeMachine.addWater();
coffeeMachine.makeCoffee();


console.table(coffeeMachine);