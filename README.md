markdown-table-editer
=====================

MarkdownのTableの中でクリックするとTableが編集できるようになります。  
編集したデータは、clipbordにcopyできます。  
編集画面に貼り付けましょう。  

## Usage
Add-onをインストールすると、  
右クリックで表示されるコンテキストメニューにアイコンが登録されます。  
  
https://addons.mozilla.org/ja/firefox/addon/markdown-table-editer/
  
![markdown-table-editer.gif](https://github.com/amanoese/markdown-table-editer/blob/images/markdown-table-editer-addon.gif)

## How to build it

```bash
$ yarn install
$ yarn build
```

It create WebExtension in directory of web-ext-artifacts/
The WebExtension in the addon folder should now work.

## License
MIT
