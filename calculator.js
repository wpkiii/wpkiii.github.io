
	const xvalues = "X - Values";
	const operands = "Operands";
	const yvalues = "Y - Values"
	const result = "Result"

	let continueorstop = true;

	document.write("<table border = '1' bordercolor =   black width = 100%  bgcolor = red>");
	document.write("<tr> <th>" + xvalues + "</th><th>" + operands + "</th><th>" + yvalues + "</th><th>" + result + "</th></tr>");

	while (continueorstop == true) {

		let result;
		var xinput = parseInt(prompt("What is your 'X' Value: ", "integer"));
		var operator = prompt("What is your operator: ", "integer");
		var yinput = parseInt(prompt("What is your 'Y' Value: ", "int"));



		if (operator === "+") {
			result = xinput + yinput;
		} else if (operator === "-") {
			result = xinput - yinput;
		} else if (operator === "*") {
			result = xinput * yinput;
		} else if (operator === "/") {
			result = xinput / yinput;
		} else if (operator === "%") {
			result = xinput % yinput;
		} else {
			result = "Invalid operator";
		}

		let row = "<tr>";
		row += ("<td>" + xinput + "</td>");
		row += ("<td>" + operator + "</td>");
		row += ("<td>" + yinput + "</td>");
		row += ("<td>" + result + "</td>");
		row += "</tr>";

		document.write(row);
		continueorstop = confirm("Continue?");
	}

	document.write(" </table>");

const min = "Min" ;
const max = "Max" ;
const average = "Avg";
const total = "Sum";



let nexttable = confirm("Do you want the next table?");
ocument.write("<table border = '1' bordercolor =   black width = 100%  bgcolor = red>");
document.write("<tr> <th>" + Min + "</th><th>" + Max + "</th><th>" + Average + "</th><th>" + Total + "</th></tr>");
if(nexttable == true){
	let row = "<tr>";
	row += ("<td>" + findMin(result) + "</td>");
	row += ("<td>" + findMax(result) + "</td>");
	row += ("<td>" + average(result) + "</td>");
	row += ("<td>" + add(result) + "</td>");
	row += "</tr>";
		document.write(row);
}
else {
	document.write("You chose cancel...");
}

			document.write(" </table>");
