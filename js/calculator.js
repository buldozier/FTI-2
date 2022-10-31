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
});

const setValidValue = function (element, minValue) {
  if (element.value < minValue && element.value !== '') {
    element.classList.add('calculator__subjects__invalid');
  } else {
    element.classList.remove('calculator__subjects__invalid');
  }

  if (element.value > 100) {
    element.value = 100;
    element.classList.remove('calculator__subjects__invalid');
  }
};

// Results

const form = document.querySelector('.calculator__form');

class ResponseObject {
  constructor(Array) {
    const respForm = document.querySelector('.response__form');

    createElement('response__object', respForm);

    const respObjAll = document.querySelectorAll('.response__object');
    const respObjAllLastElement = respObjAll.length - 1;
    const respObj = respObjAll[respObjAllLastElement];

    createElement('resp__code', respObj, Array[0]);
    createElement('resp__name', respObj, Array[2]);
    createElement('resp__score', respObj, Array[3]);
    createElement('resp__places', respObj, Array[4]);
    createElement('resp__tests', respObj);

    const respTestsAll = document.querySelectorAll('.resp__tests');
    const respTestsAllLastElement = respTestsAll.length - 1;
    const respTests = respTestsAll[respTestsAllLastElement];

    createElement('resp__test', respTests, 'М', 'math');
    createElement('resp__test', respTests, 'РЯ', 'russian');
    createElement('resp__test', respTests, 'Ф', 'physics');

    if (Array[6] === '1') {
      createElement('resp__test', respTests, 'ИКТ', 'informatics');
    }

    if (Array[7] === '1') {
      createElement('resp__test', respTests, 'Х', 'chemistry');
    }
  }
}

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

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

  if (egeScores.egeSumPhys != 0 || egeScores.egeSumInf != 0 || egeScores.egeSumChem != 0) {
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

        removeAdvise();
        // const respObjAll = document.querySelectorAll('.response__object');
        // respObjAll.forEach(el => {
        //   el.remove();
        // });

        console.log(responseObject);

        if (Object.keys(responseObject).length !== 0) {
          createResponseMarkup();
          const isRespInner = document.querySelector('.response__form');
          const isResponseHeader = document.querySelector('.response__header');

          if (!!isRespInner && !isResponseHeader) {
            createResponseHeader(isRespInner);
          }

          for (let element in responseObject) {
            new ResponseObject(responseObject[element]);
          }
        } else {
          createAdvise('Образовательные программы не найдены. В 2021 году проходной балл на все специальности был выше введенного');
        }
      })
      .catch(err => console.error(err));
  } else {
    removeAdvise();
    createAdvise('Необходимо ввести балл хотя бы для одного из экзаменов по выбору');

  }

  function selectTestForSearching(testScore) {
    return testScore.value ? egeSum + Number(testScore.value) : 0;
  }
}

function removeAdvise() {
  const respInner = document.querySelector('.response__inner');
  const isRespRejected = document.querySelector('.response__rejected');

  if (!!isRespRejected) {
    isRespRejected.remove();
  }

  if (!!respInner) {
    respInner.remove();
  }
}

function createAdvise(adviseText) {
  const calcSubject = document.querySelector('.calculator__subjects');

  createElement('response__rejected', calcSubject, adviseText);
}

function createResponseMarkup() {
  createElement('response__inner', form);
  const respInner = document.querySelector('.response__inner');
  createElement('response__form', respInner);
}

function createResponseHeader(isRespInner) {
  createElement('response__header', isRespInner);
  const responseHeader = document.querySelector('.response__header');
  createElement('header__code', responseHeader, 'Код');
  createElement('header__name', responseHeader, 'Название направления');
  createElement('header__score', responseHeader, 'Проходной балл 2021');
  createElement('header__places', responseHeader, 'Бюджетных мест');
  createElement('header__tests', responseHeader, 'Вступительные испытания');
}

function createElement(className, addToElement, content, secondClassName) {
  const div = document.createElement('div');

  div.classList.add(className);

  if (secondClassName) {
    div.classList.add(secondClassName);
  }

  if (content) {
    div.innerHTML = content;
  }

  addToElement.append(div);
}

function createTestObject(re, nameObj, countRe) {
  re[countRe].forEach(el => {
    nameObj[el.shift()] = el;
  });
}
