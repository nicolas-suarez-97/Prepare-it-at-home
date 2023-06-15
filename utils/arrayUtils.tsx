const getRandomArray = (array: any[]) => {
  const arrayCopy = array.slice();
  let randomArray: any = []

  while (arrayCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    randomArray.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return randomArray;
}

export {
  getRandomArray,
}