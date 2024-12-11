const getRandomNumber = (value: number) => {
  if ( !value ) return 0;
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  const randomVal = array[0] / (0xffffffff + 1);

  return randomVal * value;
};

export default getRandomNumber;
