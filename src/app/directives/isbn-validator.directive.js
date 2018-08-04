export default function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      let getIsbn = (str) => str.replace(/[\s-]/gi, '');

      let calculateIsbn = (isbn) => {
        const count = 10;
        const coef = 11;
        let sum = 0;

        for(let i=0; i<isbn.length-1; i++) {
          let ch = isbn[i];
          sum += ch * (count - i)
        }

        return coef - sum % coef;
      };

      ctrl.$validators.invanlidIsbn = (modelVal) => {
        if (!modelVal) {
          return true;
        }

        let isbnNum = getIsbn(modelVal);
        if (isbnNum.length > 10) {
          return false;
        }
        let calculated = calculateIsbn(isbnNum);
        return calculated == isbnNum.slice(-1);
      }
    }
  }
}