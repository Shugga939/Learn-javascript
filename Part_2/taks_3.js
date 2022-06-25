for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;
  let count = li.getElementsByTagName('li').length
  console.log( title, count)
}

//-----
// Ответ : 1

//------
// Ответ: BODY

//------
 //  1- объект класса HTMLDocument  наследуется от HTMLDocument - Document - Node
 //