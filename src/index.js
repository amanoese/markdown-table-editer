import $ from 'jquery'

(()=>{
  let targetNode = null;

  document.addEventListener("mousedown", function({target,button}){
    if(button != 2) { return }
    targetNode = target;
  });

  let f = _=>{
    $(_).parentsUntil('table').parent().first().each(function(){
      let $table = $(this);
      let $button = $('<button>');
      $table.before($button);
      $button.text('copy markdown');
      $button.on('click',()=>{
        console.log('click')
        let ths = $table.find('tr').has('th').find('th').map((i,x)=>$(x).text()).toArray();
        let tds = $table.find('tr').has('td').toArray().map(tr=>$(tr).find('td').map((i,td)=>$(td).text()!==''?$(td).text():' ').toArray());

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
      console.log($table,$button);
      $table.find('th,td').prop('contentEditable',true)
      console.log($table,$button);
    })
  }

  browser.runtime.onMessage.addListener(request => {
    console.log(targetNode,request);
    f(targetNode)
  });

})()
