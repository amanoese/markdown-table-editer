markdown-table-editer
=====================

markdownを直接編集できるようにします。
編集したデータは、clipbordにcopyできます。

## Install

下記のコードをbookmarkletとして登録する

```javascript:bookmaklet
javascript:(function(){ var urls = ['https://raw.githubusercontent.com/amanoese/markdown-table-editer/master/src/index.js']; urls.forEach((url)=>{ let s = document.createElement('script'); s.src = url; document.head.appendChild(s); }); })();
```

## License
MIT
