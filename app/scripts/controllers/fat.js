'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('FatCtrl', function ($scope) {
    $scope.text = 'This is the about view.';
    $scope.BMI = function() {
      return '22';  
    };
  });
/*
function checkNumber(value, field, text) {
  var OK = true;

  if (field.value == "") {
    alert("\nFeltet '" + text + "' skal være udfyldt.");
    OK = false;
  }
  else if (value + "" != field.value) {
    if (parseFloat(field.value) + "" == field.value)
      alert("\nKun hele tal - ikke decimaler.");
    else
      alert("\nSkriv kun tal - ikke bogstaver, mellemrum eller andre karakterer.");
      OK = false;
    }
  else if (value < 1) {
    alert("\nTallene skal være større end nul.")
    OK = false;
  }

  if (!OK) {
    field.focus();
    field.select();
  }
  else
    field.value = value;

  return OK;
}

function Calculate(form) {
  OK = true;

  a = parseInt(form.age.value);
  h = parseInt(form.height.value);
  w = parseInt(form.weight.value);

  OK = checkNumber(a, form.age, "Alder");
  if (OK) OK = checkNumber(h, form.height, "Højde");
  if (OK) OK = checkNumber(w, form.weight, "Vægt");

  if (OK){
    h = h / 100;
    BMI = BMI(w, h);

    if (man)
      fm = 0.988 * BMI + 0.242 * w + 0.094 * a -30.18;
    else
      fm = 0.988 * BMI + 0.344 * w + 0.094 * a -30.18;

    fp =  fm / w * 100;

    if (BMI<10) window.alert("Jeg er ret sikker på, at du har tastet de forkerte værdier ind. BMI er sandsynligvis mere end mindst 15, og dit BMI er under 10. Det betyder, at resten af udregningerne også er forkerte!")

	  form.BMI.value = Math.round(BMI * 100) / 100;
	  form.fedtmasse.value = Math.round(fm * 100) / 100;
	  form.fedtprocent.value = Math.round(fp * 100) / 100;

  }
}

function Fatmass(BMI, age, weight, sex) {
  if (sex)
    return 0.988 * BMI + 0.242 * weight + 0.094 * age - 30.18;
  else
    return 0.988 * BMI + 0.344 * weight + 0.094 * age - 30.18; 
}

function Fatpercent(fm, weight) {
  return fm / weight * 100;
}

function BMI(w, h) {
  return w / (h * h);
}

function Reset(form) {
  man = true;
  form.age.value = "";
  form.height.value = "";
  form.weight.value = "";
}
*/