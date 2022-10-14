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

console.log(form);

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  await fetch('calculator.php', {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
    .then(resp => console.log(resp.json()))
    .catch(err => console.log(err));
}

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const data = new FormData(form);
//   const dataValues = Object.fromEntries(data.entries());

//   console.log(dataValues);
//   const scorePhys = parseInt(dataValues['phys']);
//   const scoreInf = parseInt(dataValues['inf']);
//   const scoreChem = parseInt(dataValues['chem']);

//   const egeSum = parseInt(dataValues['russ']) + parseInt(dataValues['math']);
//   let egeSumPhys = egeSum + scorePhys;
//   let egeSumInf = egeSum + scoreInf;
//   let egeSumChem = egeSum + scoreInf;

//   if (scorePhys) {
//     const objScore = [{
//       score: scorePhys,
//     }];
//     console.log(JSON.stringify(objScore));
//     sendRequest(objScore);
//   }
// }

// async function sendRequest(data) {
//   await fetch('calculator.php', {
//     method: 'post',
//     body: JSON.stringify(data),
//   })
//     .then(response => response.json())
//     .then(data => console.log(data));
// }
