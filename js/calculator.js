// Validation
const inputs = document.querySelectorAll('.calculator__subject input');

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
  // el.addEventListener('keyup', function () {
  //   switch (this.getAttribute('placeholder')) {
  //     case '40 - 100':
  //       toggleInvalidValue(this, 40);

  //       break;
  //     case '39 - 100':
  //       toggleInvalidValue(this, 39);
  //       break;
  //     case '44 - 100':
  //       toggleInvalidValue(this, 44);
  //       break;
  //   }
  // });
});

const setValidValue = function (element, minValue) {
  if (element.value < minValue && element.value !== '') {
    element.value = minValue;
    element.classList.remove('calculator__subjects__invalid');
  }

  if (element.value > 100) {
    element.value = 100;
    element.classList.remove('calculator__subjects__invalid');
  }
};

// const toggleInvalidValue = function (element, minValue) {
//   if (element.value !== '' && element.value < minValue || element.value > 100) {
//     element.classList.add('calculator__subjects__invalid');
//   } else {
//     element.classList.remove('calculator__subjects__invalid');
//   }
// };

// Results

const form = document.querySelector('.calculator__form');

class CreateResponseObject {
  constructor(Array) {
    creteElement('response__object', respForm);
    const respObjAll = document.querySelectorAll('.response__object');
    const respObjAllLastElement = respObjAll.length - 1;
    const respObj = respObjAll[respObjAllLastElement];

    creteElement('resp__code', respObj, Array[0]);
    creteElement('resp__name', respObj, Array[2]);
    creteElement('resp__score', respObj, Array[3]);
    creteElement('resp__places', respObj, Array[4]);

    function creteElement(className, addToElement, content) {
      const div = document.createElement('div');
      div.classList.add(className);
      if (content) {
        div.innerHTML = content;
      }
      addToElement.append(div);
    }
  }
}

form.addEventListener('submit', handleFormSubmit);

const respForm = document.querySelector('.response__form');

async function handleFormSubmit(event) {
  event.preventDefault();
  const respObjAll = document.querySelectorAll('.response__object');
  respObjAll.forEach(el => {
    el.remove();
  });

  const scoreRuss = document.querySelector('input[name="russ"]');
  const scoreMath = document.querySelector('input[name="math"]');
  const scorePhys = document.querySelector('input[name="phys"]');
  const scoreInf = document.querySelector('input[name="inf"]');
  const scoreChem = document.querySelector('input[name="chem"]');
  const egeSum = Number(scoreRuss.value) + Number(scoreMath.value);

  const egeScores = {
    egeSumPhys: selectTestForSearching(scorePhys),
    egeSumInf: selectTestForSearching(scoreInf),
    egeSumChem: selectTestForSearching(scoreChem),
  };

  await fetch('calculator.php?' + new URLSearchParams(egeScores), {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
    .then(resp => {
      return resp.json();
    })
    .then(re => {
      const objPhys = {};
      const objInf = {};
      const objChem = {};

      createTestObject(re, objPhys, '0');
      createTestObject(re, objInf, '1');
      createTestObject(re, objChem, '2');

      const responseObject = Object.assign(objPhys, objInf, objChem);

      for (let element in responseObject) {
        new CreateResponseObject(responseObject[element]);
      }
    })
    .catch(err => console.error(err));

  function selectTestForSearching(testScore) {
    return testScore.value ? egeSum + Number(testScore.value) : 0;
  }
}

function createTestObject(re, nameObj, countRe) {
  re[countRe].forEach(el => {
    nameObj[el.shift()] = el;
  });
}
