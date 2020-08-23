class coffeeMachine {
  #waterTank;
  #beanTank;
  #onOffSwitch;
  #addWaterButton;
  #addBeansButton;
  #display;
  #powerPlug;

  #waterLvl = 0;
  #beanLvl = 0;
  #displayText = '';
  #isPowerPlugDown = false;
  #powerPlugOffset = [0, 0];

  static MIN_WATER_LVL = 50;
  static MIN_BEANS_LVL = 25;
  static MAX_WATER_LVL = 300;
  static MAX_BEAN_LVL = 200;

  static LIST = [];

  #machineHasPower = false;
  #machineIsOn = false;
  #machineMakesCoffee = false;

  constructor(waterTank, beanTank, onOffSwitch, addWaterButton, addBeansButton, displayInner, powerPlug) {
    this.#waterTank = waterTank;
    this.#beanTank = beanTank;
    this.#onOffSwitch = onOffSwitch;
    this.#addWaterButton = addWaterButton;
    this.#addBeansButton = addBeansButton;
    this.#display = displayInner;
    this.#powerPlug = powerPlug;

    this.#onOffSwitch.addEventListener('click', e => this.turnMachineOnOff(e));
    this.#addWaterButton.addEventListener('click', e => this.addWater(e));
    this.#addBeansButton.addEventListener('click', e => this.addBeans(e));
    this.#display.addEventListener('click', e => this.#makeCoffee(e));

    this.#powerPlug.addEventListener('mousedown', e => this.setDownPowerPlug(e));
    this.#powerPlug.addEventListener('mouseup', e => this.pickUpPowerPlug(e));
    this.#powerPlug.addEventListener('mousemove', e => this.movePowerPlug(e));

    this.#updateBeanLvl();
    this.#updateWaterLvl();

    coffeeMachine.LIST.push(this);
  }

  turnMachineOnOff() {
    if (this.#machineHasPower && this.#machineIsOn) {
      this.#machineIsOn = false;
      this.#onOffSwitch.classList.replace('on', 'off');
      this.#setDisplayText('');
    } else if (this.#machineHasPower && !this.#machineIsOn) {
      this.#machineIsOn = true;
      this.#onOffSwitch.classList.replace('off', 'on');
      this.#addTextToDisplay('machine is starting...\n');
    } else {
      alert('machine has no power to turn on');
    }
  }

  #isWaterLvlOk() {
        return this.#waterLvl >= coffeeMachine.MIN_WATER_LVL;
  }

  #isBeanLvlOk() {
    return this.#beanLvl >= coffeeMachine.MIN_BEANS_LVL;
  }

  addWater() {
    if (this.#waterLvl <= coffeeMachine.MAX_WATER_LVL - 50) {
      this.#waterLvl += 50;
    } else {
      this.#waterLvl = coffeeMachine.MAX_WATER_LVL;
    }
    this.#updateWaterLvl();

    // console.table(this);
  }

  #useWater() {
    this.#waterLvl -= 50;
    this.#updateWaterLvl();
  }

  addBeans() {
    if (this.#beanLvl <= coffeeMachine.MAX_BEAN_LVL - 50) {
      this.#beanLvl += 50;
    } else {
      this.#beanLvl = coffeeMachine.MAX_BEAN_LVL;
    }
    this.#updateBeanLvl();
    // console.table(this);
  }

  #useBeans() {
    this.#beanLvl -= 25;
    this.#updateBeanLvl();
  }

  #makeCoffee() {

    if (!this.#isWaterLvlOk() && this.#machineHasPower && this.#machineIsOn) {
      this.#addTextToDisplay('fill in more water \n');
    }

    if (!this.#isBeanLvlOk() && this.#machineHasPower && this.#machineIsOn) {
      this.#addTextToDisplay('fill in more beans \n');
    }

    if (this.#isWaterLvlOk() && this.#isBeanLvlOk() && !this.#machineMakesCoffee && this.#machineHasPower && this.#machineIsOn) {
      this.#machineMakesCoffee = true;
      this.#addTextToDisplay('Me is doing cofefe!\n');
      document.querySelector('#coffee-cup').hidden = false;
      this.#useWater();
      this.#useBeans();
      this.#addTextToDisplay('Cofefe is done!\n');
      this.#machineMakesCoffee = false;
    } else if (this.#machineMakesCoffee) {
      this.#addTextToDisplay('Can\'t do more then one Cofefe\n');
    }


  }

  #calcTankLvlPercent(tankLvl, maxTankLvl) {
    return (100 * tankLvl) / maxTankLvl;
  }

  #updateWaterLvl() {
    this.#waterTank.style.background = `linear-gradient(to top, #0b6789 0%, #0b6789 ${this.#calcTankLvlPercent(this.#waterLvl, coffeeMachine.MAX_WATER_LVL)}%, transparent ${this.#calcTankLvlPercent(this.#waterLvl, coffeeMachine.MAX_WATER_LVL)}%, transparent 100%)`;
  }

  #updateBeanLvl() {
    this.#beanTank.style.background = `linear-gradient(to top, saddlebrown 0%, saddlebrown ${this.#calcTankLvlPercent(this.#beanLvl, coffeeMachine.MAX_BEAN_LVL)}%, transparent ${this.#calcTankLvlPercent(this.#beanLvl, coffeeMachine.MAX_BEAN_LVL)}%, transparent 100%)`;
  }

  #addTextToDisplay(text) {
    this.#displayText += text;
    this.#setDisplayText(this.#displayText);
  }

  #setDisplayText(text) {

    let lines = text.split('\n');

    if (lines.length >= 11) {
      lines.splice(0,1);
      text = lines.join('\n');
    }
    console.log(text);
    this.#displayText = text;
    this.#display.querySelector('.inner').innerText = this.#displayText;
  }

  setDownPowerPlug(e) {
    this.#isPowerPlugDown = true;
    this.#powerPlugOffset = [
      this.#powerPlug.offsetLeft - e.clientX,
      this.#powerPlug.offsetTop - e.clientY
    ];
  }

  pickUpPowerPlug() {
    this.#isPowerPlugDown = false;
  }

  movePowerPlug(e) {
    if (this.#isPowerPlugDown) {
      this.#powerPlug.style.left = (e.clientX + this.#powerPlugOffset[0]) + 'px';
      this.#powerPlug.style.top = (e.clientY + this.#powerPlugOffset[1]) + 'px';

      this.#powerPlug.hidden = true;
      let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
      this.#powerPlug.hidden = false;

      if (!elemBelow) {
        return;
      }

      let droppablePlace = document.querySelector('#power-output');

      if (elemBelow === droppablePlace) {
        this.#enterDroppable(droppablePlace);
      } else {
        this.#leaveDroppable(droppablePlace);
      }
    }
  }

  #leaveDroppable(e) {
    this.#machineHasPower = false;
    this.#onOffSwitch.classList.replace('off', 'nopower');
    this.#onOffSwitch.classList.replace('on', 'nopower');
  }

  #enterDroppable(e) {
    this.#machineHasPower = true;
    this.#onOffSwitch.classList.replace('nopower', 'off');
  }

}

new coffeeMachine(
  document.querySelector('#water-tank'),
  document.querySelector('#bean-tank'),
  document.querySelector('#on-off-switch'),
  document.querySelector('#add-water'),
  document.querySelector('#add-beans'),
  document.querySelector('#display'),
  document.querySelector('#power-plug')
);


// console.table(coffeeMachines[0]);