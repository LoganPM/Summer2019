
//Globals
let combList = [];
let table = null;

const tableHead = document.getElementById('table-head');
const tableBody = document.getElementById('table-body');

let newCombatant = function(name,hp,ac,init, inmod){
	this.name = name;
	this.hp = hp;
	this.ac = ac;
  this.init = init;
  this.inmod = inmod;
}

$(document).ready(function() {
      renderTable();
});

//DRAWS THE TABLE
const renderTable = () => {
  let numRows = combList.length;
  // reset table
  tableHead.innerHTML = '';
  tableBody.innerHTML = '';
  // set headers
  tableHead.innerHTML = `
    <tr>
		<th scope="col">Name</th>
        <th scope="col">Initative</th>
        <th scope="col">Initative Mod</th>
        <th scope="col">HP</th>
        <th scope="col">AC</th>
    </tr>`;
  //set table body
  for (let i = 0; i < numRows; i++) {
    const newRow = tableBody.insertRow(i);
    newRow.innerHTML = `
            <td>${combList[i].name}</td>
            <td>${combList[i].init}</td>
            <td>${combList[i].inmod}</td>
            <td>${combList[i].hp}</td>
            <td>${combList[i].ac}</td>`;
  }
};
//SORTS THE TABLE
function sortTable() {
  let len = combList.length - 1;
  let swap;

  do {
    swap = false;
    for(let i=0; i<len; i++) {
      if(combList[i].init < combList[i+1].init) {
        let temp = new newCombatant(" "," "," "," ");
        //store combj
        temp.name = combList[i].name;
        temp.hp = combList[i].hp;
        temp.init = combList[i].init;
        temp.ac = combList[i].ac;
        temp.inmod = combList[i].inmod;
        // swap combj with next element
        combList[i].name = combList[i+1].name;
        combList[i].ac = combList[i+1].hp;
        combList[i].init = combList[i+1].init;  
        combList[i].ac = combList[i+1].ac;
        combList[i].inmod = combList[i+1].inmod;
        // set next element to combj
        combList[i+1].name = temp.name;
        combList[i+1].hp = temp.hp;
        combList[i+1].init = temp.init;
        combList[i+1].ac = temp.ac;
        combList[i+1].inmod = twmp.inmod;
        swap = true;
      }
    }
    len--;
  } while (swap);
}
//ADD NEW ELEMENT TO TABLE BUTTON
document.getElementById('addNewBtn').onclick = () => {
  // re-render table
  let name = document.getElementById('stats-name').value;
  let hp = document.getElementById('stats-hp').value;
  let init = document.getElementById('stats-init').value;
  let ac = document.getElementById('stats-ac').value;
  let inmod = document.getElementById('stats-inmod').value;
  let newComb = new newCombatant(name,hp,ac,init,inmod);
  combList.push(newComb);
  sortTable();
  renderTable();
};

//CLEAR TABLE
document.getElementById('clearTableBtn').onclick = () => {
  for(let i = 0; i< combList.length; i++){
    combList[i].pop();
  }
  console.log("Table cleared");
  renderTable();
}

//CLEAR STATS
document.getElementById('clearBtn').onclick = () => {

  document.getElementById('stats-name').value = '';
  document.getElementById('stats-hp').value = '';
  document.getElementById('stats-init').value = '';
  document.getElementById('stats-ac').value = '';
  
  console.log('Cleared');
};
// SHOWS DROPDOWN FOR SAVE GAMES
function showDropDown(){
  document.getElementById('state-dropdown').classList.toggle("show");
}
//for dropdown menu
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById('PrevTurnBtn').onclick = () => {
  rotateTable(0);
}

document.getElementById('NextTurnBtn').onclick = () => {
  rotateTable(1);
}

function rotateTable(direction) {
  if (direction == 1){
    // go next
    let temp  = new newCombatant("","","","");
    temp.name = combList[0];
  }
  else {
    //go back
  }
}