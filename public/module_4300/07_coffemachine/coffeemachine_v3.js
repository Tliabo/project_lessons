class coffeeMachine {
  #waterLvl = 0;
  #beanLvl = 0;

  static MIN_WATER_LVL = 50;
  static MIN_BEANS_LVL = 25;
  static MAX_WATER_LVL = 300;
  static MAX_BEAN_LVL = 200;

  #machineHasPower = false;
  #machineIsOn = false;
  #machineMakesCoffee = false;

  isWaterLvlOk() {
    return this.#waterLvl >= this.MIN_WATER_LVL && this.#waterLvl <= this.MAX_WATER_LVL;
  }

  isBeanLvlOk() {
    return this.#beanLvl >= this.MIN_BEANS_LVL && this.#beanLvl <= this.MAX_BEAN_LVL;
  }

  isMakingCoffee() {
    return this.#machineMakesCoffee;
  }

  plugMachineInOut() {
    if (!this.#machineHasPower) {
      this.#machineHasPower = true;
    } else {
      this.#machineMakesCoffee = false;
      this.#machineIsOn = false;
      this.#machineHasPower = false;
    }
  }

  turnMachineOnOff() {
    if (this.#machineHasPower) {
      this.#machineIsOn = !this.#machineIsOn;
    } else {
      alert('machine has no power');
    }
  }

  addWater() {
    if (this.#waterLvl <= this.MAX_WATER_LVL - 100) {
      this.#waterLvl += 100;
    } else {
      this.#waterLvl = this.MAX_WATER_LVL;
    }
  }

  useWater() {
    if (this.isWaterLvlOk()) {
      this.#waterLvl -= 50;
    } else {
      alert('fill in more water');
    }
  }

  addBeans() {
    if (this.#beanLvl <= this.MAX_BEAN_LVL - 100) {
      this.#beanLvl += 100;
    } else {
      this.#beanLvl = this.MAX_BEAN_LVL;
    }
  }

  useBeans() {
    if (this.isBeanLvlOk()) {
      this.#beanLvl -= 25;
    } else {
      alert('put more beans in machine');
    }
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

}

let coffeeMachine1 = new coffeeMachine();

coffeeMachine1.plugMachineInOut();
coffeeMachine1.turnMachineOnOff();
coffeeMachine1.addBeans();
coffeeMachine1.addWater();
coffeeMachine1.makeCoffee();
coffeeMachine1.addWater();
coffeeMachine1.makeCoffee();


coffeeMachine1.table();

// console.table(coffeeMachine1);