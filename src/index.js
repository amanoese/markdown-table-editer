import $ from 'jquery'

let target = null;
browser.runtime.onMessage.addListener(request => {
  console.log(target);
  f(target)
});

document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    target = event.target;
  }
});

let f = target=>{
  $(target).parents('table').each(function(){
    let $button = $('<button>copy markdown</button>')
    $button.on('click',()=>{
      console.log('click')
      let ths = $(this).find('tr').has('th').find('th').map((i,x)=>$(x).text()).toArray();
      let tds = $(this).find('tr').has('td').toArray().map(tr=>$(tr).find('td').map((i,td)=>$(td).text()!==''?$(td).text():' ').toArray());

      let text = `
|${ths.join('|')}|
|${ths.map(x=>'---').join('|')}|
${tds.map(x=>'|'+x.join('|')+'|').join('\n')}
`
      console.log(text)
      let $pre = $('<pre>')
      $pre.text(text)
      let $d = $('<div>').append($pre)
      $('body').append($d)
      document.getSelection().selectAllChildren($d.get(0))
      document.execCommand('copy');
      $d.remove()
      return false
    })
    $(this).before($button)
    $(this).find('th,td').prop('contentEditable',true)
  })
}
