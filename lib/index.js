// eslint-disable-next-line import/prefer-default-export
const print = (str) => {
  if(typeof str === 'string') {
    console.log(str);
  }
};

module.exports = print;
