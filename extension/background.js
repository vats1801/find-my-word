chrome.contextMenus.create({
  title: 'Open Extension',
  contexts: ['selection'],
  onclick: function(info, tab) {
    chrome.runtime.sendMessage({ type: 'selectedText', data: info.selectionText });
  }
});