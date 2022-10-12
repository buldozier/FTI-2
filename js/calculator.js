const inputs = document.querySelectorAll('.calculator__subject input');
console.log(document.getElementsByName('ege_score[inf]'));
console.log(inputs);

inputs.forEach(el => {
  el.addEventListener('change', function () {
    switch (this.getAttribute('placeholder')) {
      case '40 - 100':
        setValidValue(this, 40);
        break;
      case '39 - 100':
        setValidValue(this, 39);
        break;
      case '44 - 100':
        setValidValue(this, 44);
        break;
    }
  });
	el.addEventListener('keyup', function() {
		switch (this.getAttribute('placeholder')) {
      case '40 - 100':
        toggleInvalidValue(this, 40);
        break;
      case '39 - 100':
        toggleInvalidValue(this, 39);
        break;
      case '44 - 100':
        toggleInvalidValue(this, 44);
        break;
    }
	})
});

const setValidValue = function (element, minValue) {
  if (element.value < minValue) {
    element.value = minValue;
		element.classList.remove('calculator__subjects__invalid');
  }

  if (element.value > 100) {
    element.value = 100;
		element.classList.remove('calculator__subjects__invalid');
  }
};

const toggleInvalidValue = function (element, minValue) {
  if (element.value < minValue || element.value > 100) {
    element.classList.add('calculator__subjects__invalid');
  } else {
    element.classList.remove('calculator__subjects__invalid');
  }
};
