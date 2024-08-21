'use strict';
const checkButton = document.querySelector('.check');
const checkEmail = document.querySelector('#InputEmail1');
const personalInfor = document.querySelectorAll('.personal-infor');
const btnView1 = document.querySelector('.btn-view-1');
const btnView2 = document.querySelector('.btn-view-2');
const btnView3 = document.querySelector('.btn-view-3');
const btnView4 = document.querySelector('.btn-view-4');
const btnView5 = document.querySelector('.btn-view-5');
const btnView6 = document.querySelector('.btn-view-6');

function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

checkButton.addEventListener('click', function () {
  console.log(checkEmail.value);
  if (validateEmail(checkEmail.value)) {
    /*  document.querySelector('.personal-infor1').classList.add('hidden');
    document.querySelector('.personal-infor').classList.remove('hidden'); */
    for (let i = 0; i < personalInfor.length; i++) {
      personalInfor[i].classList.toggle('hidden');
    }
  } else {
    document.querySelector('#emailHelp').textContent =
      'Email không hợp lệ, vui lòng nhập lại.';
  }
});

//Tạo nút cho phần thông tin chi tiết

function viewmore(btn, infor) {
  document.querySelector(`.viewmore-${infor}`).classList.remove('hidden');
  btn.textContent = 'VIEW LESS';
}

function viewless(btn, infor) {
  document.querySelector(`.viewmore-${infor}`).classList.add('hidden');
  btn.textContent = 'VIEW MORE';
}

btnView1.addEventListener('click', function () {
  if (btnView1.textContent === 'VIEW MORE') {
    viewmore(btnView1, 'exp');
  } else {
    viewless(btnView1, 'exp');
  }
});

btnView2.addEventListener('click', function () {
  if (btnView2.textContent === 'VIEW MORE') {
    viewmore(btnView2, 'edu');
  } else {
    viewless(btnView2, 'edu');
  }
});

btnView3.addEventListener('click', function () {
  if (btnView3.textContent === 'VIEW MORE') {
    viewmore(btnView3, 'act');
  } else {
    viewless(btnView3, 'act');
  }
});

btnView4.addEventListener('click', function () {
  if (btnView4.textContent === 'VIEW MORE') {
    viewmore(btnView4, 'hob');
  } else {
    viewless(btnView4, 'hob');
  }
});

btnView5.addEventListener('click', function () {
  if (btnView5.textContent === 'VIEW MORE') {
    viewmore(btnView5, 'lan');
  } else {
    viewless(btnView5, 'lan');
  }
});

btnView6.addEventListener('click', function () {
  if (btnView6.textContent === 'VIEW MORE') {
    viewmore(btnView6, 'ski');
  } else {
    viewless(btnView6, 'ski');
  }
});
