
//Globals
let combList = [];
let table = null;
let tableCounter = 0;

const tableHead = document.getElementById('table-head');
const tableBody = document.getElementById('table-body');

$(document).ready(function() {
      renderTable();
});

const renderTable = () => {
  let numRows = tableCounter;
  // reset table
  tableHead.innerHTML = '';
  tableBody.innerHTML = '';
  // set headers
  tableHead.innerHTML = `
    <tr>
		<th scope="col">Name</th>
        <th scope="col">Initative</th>
        <th scope="col">HP</th>
        <th scope="col">AC</th>
    </tr>`;
  //set table body
  for (let i = 0; i < numRows; i++) {
    const newRow = tableBody.insertRow(i);
    newRow.innerHTML = `
            <td>${combList[i].name}</td>
			<td>${combList[i].init}</td>
            <td>${combList[i].HP}</td>
            <td>${combList[i].AC}</td>`;
  }
};

document.getElementById('addNewBtn').onclick = () => {
  // re-render table
  let name = document.getElementById('stats-name').value;
  let HP = document.getElementById('stats-hp').value;
  let init = document.getElementById('stats-init').value;
  let AC = document.getElementById('stats-ac').value;
  let newComb = new newCombatant(name,HP,AC,init);
  console.log(newComb);
  combList[tableCounter] = newComb;
  tableCounter++;
  renderTable();
  console.log('Updated!');
};

document.getElementById('clearTableBtn').onclick = () => {
  for(let i = 0; i<tableCounter; i++){
    combList[i] = null;
  }
  tableCounter = 0;
  console.log("Table cleared")
  renderTable();
}
document.getElementById('clearBtn').onclick = () => {

  document.getElementById('stats-name').value = '';
  document.getElementById('stats-hp').value = '';
  document.getElementById('stats-init').value = '';
  document.getElementById('stats-ac').value = '';
  
  console.log('Cleared');
};

let newCombatant = function(name,HP,AC,init){
	this.name = name
	this.HP = HP
	this.AC = AC
	this.init = init
}