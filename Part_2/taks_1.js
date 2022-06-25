document.body.children[0]
document.body.children[1]
document.body.lastElementChild.lastElementChild

///---------
// 1 - да , 2 -нет

//----------
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i]
  row.cells[i].style.backgroundColor = 'red'
}

