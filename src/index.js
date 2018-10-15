(function(func) {
  var scr = document.createElement("script");
  scr.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  scr.onload = function() {
      func(jQuery.noConflict(true));
  };
  document.body.appendChild(scr);
})($=>{
  $('table').each(function(){
    let $button = $('<button>copy markdown</button>')
    $button.on('click',()=>{
      console.log('click')
      let ths = $(this).find('tr').filter((i,tr)=>$(tr).has('th')).find('th').map((i,x)=>$(x).text()).toArray();
      let tds = $(this).find('tr').filter((i,tr)=>$(tr).has('td')).toArray().map(tr=>$(tr).find('td').map((i,td)=>$(td).text()).toArray());

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
})
