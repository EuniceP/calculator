"use strict";
window.onload = function () {
	var calculator = document.getElementById('calculator');
	// console.log(calculator);
	var button = document.getElementsByClassName('button');
	var output = document.getElementById('output').firstChild;
	var operator = '';
	var operand1='';
	var operand2='';
	var number='';
	var operator ='';
	var self = this;

	for (var i=0; i<button.length; i++) {
		button[i].addEventListener('click', function(event) {
	
		var clickedvalue = this.firstChild.innerHTML;
	//console.log(operand1,operand2,operator);
		switch (clickedvalue) {
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
			case '.':
				output.innerHTML += clickedvalue;
				break;
			case 'C':
				self.clear();
				break;	
			case '=':
				operand2 = output.innerHTML;
				output.innerHTML = self.compute(operator, operand1, operand2);
				break;
			default: //operator pressed
				operator = clickedvalue;
				operand1 = output.innerHTML;
				output.innerHTML = '';
			}
			
			});
	}

	this.compute = function (operator,operand1,operand2) {
		var operand1_num = Number(operand1);
		var operand2_num = Number(operand2);
		var result;
		console.log("in compute " + operand1 + ' ' + operand2+ ' ' +operator);
		switch (operator) {
			case '+':
				result = operand1_num + operand2_num;
				break;
			case '-':
				result = operand1_num - operand2_num;
				break;
			case '*':
				result = operand1_num * operand2_num;
				break;
			case '/':
				result = operand1_num / operand2_num;
				break;
			default:
				result = '';

		}
		output.innerHTML = result.toString();
		return result.toString();
	}

	this.clear = function() {
		operand1 = '';
		operand2 = '';
		operator = '';
		number = '';
		output.innerHTML = '';
	}
}