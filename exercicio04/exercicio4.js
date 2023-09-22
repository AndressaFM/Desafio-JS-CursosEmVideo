function calc() {
    let num = document.getElementById('number')
    let tab = document.getElementById('tabuada')
    let tab1 = document.getElementById('tabuada1')
    let tab2 = document.getElementById('tabuada2')
    let tab3 = document.getElementById('tabuada3')
    if(num.value.length == 0){
    window.alert('[Erro] Digite um número!')
    } else {
        let n = Number(num.value)
        for(let c = 1; c<= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        for(let c = 1; c<= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${(n/c).toFixed(2)}`
            item.value = `tab$`
            tab1.appendChild(item)
        }
        for(let c = 1; c<= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab$`
            tab2.appendChild(item)
        }
        for(let c = 1; c<= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab$`
            tab3.appendChild(item)
        }
    }
    
}

function clearResults() {
  let tab = document.getElementById('tabuada');
  let tab1 = document.getElementById('tabuada1');
  let tab2 = document.getElementById('tabuada2');
  let tab3 = document.getElementById('tabuada3');

  while (tab.firstChild) {
    tab.removeChild(tab.firstChild);
  }
  while (tab1.firstChild) {
    tab1.removeChild(tab1.firstChild);
  }
  while (tab2.firstChild) {
    tab2.removeChild(tab2.firstChild);
  }
  while (tab3.firstChild) {
    tab3.removeChild(tab3.firstChild);
  }
}