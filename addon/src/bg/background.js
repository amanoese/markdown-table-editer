browser.contextMenus.create({
  id: "click main",
  title: "markdown-table-edit",
  contexts: ["all"]
});
browser.contextMenus.onClicked.addListener(function(info, tab) {
  console.log('background',info,tab)
  browser.tabs.sendMessage(tab.id, "click context menu");
})
