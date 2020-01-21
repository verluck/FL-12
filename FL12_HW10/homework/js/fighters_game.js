function Fighter({ name, damage, hp, strength, agility }) {
  let _hp = hp;
  const fullHp = 100;
  const percentage = 100;
  let wins = 0;
  let loses = 0;
  this.getName = () => name;
  this.getDamage = () => damage;
  this.getStrength = () => strength;
  this.getAgility = () => agility;
  this.getHealth = () => _hp;
  this.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loses}`);
  };
  this.heal = function(amount = 0) {
    _hp + amount <= fullHp ? _hp += amount : _hp = fullHp;
  };
  this.dealDamage = function(amount = 0) {
    _hp - amount >= 0 ? _hp -= amount : _hp = 0;
  };
  this.attack = function(target) {
    const dmg = this.getDamage();
    const probabilityOfSuccess =
      Math.floor(Math.random() * percentage) + 1 - (target.getStrength() + target.getAgility());
    if (probabilityOfSuccess > 0) {
      target.dealDamage(dmg);
      console.log(
        `${this.getName()} makes ${this.getDamage()} damage to ${target.getName()}`
      );
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  };
  this.addWin = () => void ++wins;
  this.addLoss = () => void ++loses;
}
function battle(firstFighter, secondFighter) {
  if (!firstFighter.getHealth()) {
    console.log(`${firstFighter.getName()} is dead and can't fight`);
  } else if (!secondFighter.getHealth()) {
    console.log(`${secondFighter.getName()} is dead and can't fight`);
  } else {
    while (secondFighter.getHealth() > 0) {
      firstFighter.attack(secondFighter);
      if (secondFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} has won!`);
        firstFighter.addWin();
        secondFighter.addLoss();
      } else {
        [firstFighter, secondFighter] = [secondFighter, firstFighter];
      }
    }
  }
}