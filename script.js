const fiveMinutes = 300000;
const rescueBonus = () => {
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const bonusBtn = document.querySelector('[aria-label="Resgatar Bônus"]');

  if (bonusBtn) {
    console.log(`Pegou o bônus às ${time}`);
    return bonusBtn.click();
  }
  console.log(`Bônus indisponível no momento, ${time}`);
};

setInterval(() => {
  rescueBonus();
}, fiveMinutes);
