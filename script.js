const rescueBonus = () => {
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`; // Armazenando a hora que a função foi execultada em uma variável
  const bonusBtn = document.querySelector('[aria-label="Resgatar Bônus"]'); // capturando o elemento do botão

  if (bonusBtn) {
    // validando se o botão está disponível
    console.log(`Pegou o bônus às ${time}`); // imprimindo no console que pegou o bônus e o horário
    return bonusBtn.click(); // retornando o click no botão
  }
  console.log(`Bônus indisponível no momento, ${time}`); // Caso o botão não esteja disponível, vai imprimir essa mensagem no console junto com o horário que isso aconteceu!
};

setInterval(() => {
  // esse método faz com que um bloco de código seja executado com uma certa frequencia
  rescueBonus(); // bloco de código executado
}, 600000); // tempo em milisegundos, no caso, 600000 significa 10 minutos
