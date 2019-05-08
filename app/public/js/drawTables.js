
//Globals
let tableData = [];
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
};

document.getElementById('addNewBtn').onclick = () => {
  // re-render table
  let HP = document.getElementById('stats-hp').value;
  let init = document.getElementById('stats-init').value;
  let AC = document.getElementById('stats-ac').value;
  let newComb = new newCombatant(HP,AC,init);
  tableCounter++;
  console.log(newComb);
  renderTable();
  console.log('Updated!');
};

document.getElementById('clearBtn').onclick = () => {

  document.getElementById('stats-hp').value = '';
  document.getElementById('stats-init').value = '';
  document.getElementById('stats-ac').value = '';
  
  console.log('Cleared');
};

let newCombatant = function(HP,AC,init){
	this.HP = HP
	this.AC = AC
	this.init = init
}