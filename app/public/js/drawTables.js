
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

//EVENT HANDELER FOR SORT BUTTON
document.getElementById('sortTableBtn').onclick = () => {
  sortTable();
  renderTable();
}

//SORTS THE TABLE
function sortTable() {
  let len = combList.length - 1;
  let swapped;
  
  do {
    swapped = false;
    for(let i=0; i<len; i++) {
      if(combList[i].init < combList[i+1].init) {
        let temp = new newCombatant(" "," "," "," ");
        swapped = true;
        //store combj in temp
        temp.name = combList[i].name;
        temp.hp = combList[i].hp;
        temp.init = combList[i].init;
        temp.ac = combList[i].ac;
        temp.inmod = combList[i].inmod;
        // swap combj with next element
        combList[i].name = combList[i+1].name;
        combList[i].hp = combList[i+1].hp;
        combList[i].init = combList[i+1].init;  
        combList[i].ac = combList[i+1].ac;
        combList[i].inmod = combList[i+1].inmod;
        // set next element to temp
        combList[i+1].name = temp.name;
        combList[i+1].hp = temp.hp;
        combList[i+1].init = temp.init;
        combList[i+1].ac = temp.ac;
        combList[i+1].inmod = temp.inmod;
      }
    }
    len--;
  } while (swapped);
  return;
}
//ADD NEW ELEMENT TO TABLE BUTTON
document.getElementById('addNewBtn').onclick = () => {
  // re-render table
  let name = document.getElementById('stats-name').value;
  let hpStr = document.getElementById('stats-hp').value;
  let initStr = document.getElementById('stats-init').value;
  let acStr = document.getElementById('stats-ac').value;
  let inmodStr = document.getElementById('stats-inmod').value;
  let newComb = null;
  let init = parseInt(initStr);
  let inmod = parseInt(inmodStr);
  let ac = parseInt(acStr);
  let hp = parseInt(hpStr);

  if (Number.isInteger(init) != true || Number.isInteger(inmod) != true || Number.isInteger(ac) != true ||Number.isInteger(hp) != true) {
    //message ints only for ac init inmod and hp
    let snackMsg = document.getElementById('snackbar');
    snackMsg.innerHTML = "Error! Please enter real numbers for AC, HP, INIT, AND INIT MODIFIER";
    snackMsg.className = "show";
    setTimeout(function(){ snackMsg.className = snackMsg.className.replace("show", ""); }, 3000);
    return;
  }
  
  newComb = new newCombatant(name,hp,ac,init,inmod);
  combList.push(newComb);
  renderTable();
};

//CLEAR TABLE
document.getElementById('clearTableBtn').onclick = () => {
  clearTable();
}

//clear table, function
function clearTable() {
  for(let i = 0; i < combList.length; i++){
    combList.pop();
  }
  combList.length = 0;
  console.log("Table cleared");
  renderTable();
}

//CLEAR STATS
document.getElementById('clearBtn').onclick = () => {
  clearTable();
};

// clears stats button
function clearStats() {
  document.getElementById('stats-name').value = '';
  document.getElementById('stats-hp').value = '';
  document.getElementById('stats-init').value = '';
  document.getElementById('stats-inmod').value = '';
  document.getElementById('stats-ac').value = '';
  
  console.log('Cleared');
  return;
}
// SHOWS DROPDOWN FOR SAVE GAMES
function showDropDown(){
  document.getElementById('state-dropdown').classList.toggle("show");
}
//done to hide dropdown menu
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
  rotateTable("back");
}

document.getElementById('NextTurnBtn').onclick = () => {
  rotateTable("forwards");
}

function rotateTable(direction) {
  let len = combList.length;
  let temp  = new newCombatant("","","","","");
  
  if (combList[0] == null|| combList[len-1] == null) {
    return;
  }

  if (direction == "back") {
    // go to previous turn
    combList.unshift(combList.pop());
  }
  else {
    //go next
    temp = combList.shift();
    combList.push(temp);
  }
  renderTable();
  return;
}

