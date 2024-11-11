let Engine1 = "duckduckgo.com/";
let Engine2 = "https://www.google.com/";
let String1 = "1989-01-01"
let String2 = "%3A1989%"

/*
Initialize the page action: set icon and title, then show.
Only operates on tabs using the engines listed above.
*/

function initializePageAction(tab) {
  browser.pageAction.onClicked.addListener(onClick);
  if (tab.url.includes(Engine1)) {
    if (tab.url.includes(String1)) {
    browser.pageAction.hide(tab.id);
    }
    else {
      browser.pageAction.show(tab.id);
      }
    newurl = tab.url + 'search options&df=1989-01-01..2021-12-31';
  }
  if (tab.url.includes(Engine2)) {
      if (tab.url.includes(String2)) {
        browser.pageAction.hide(tab.id);
      }
      else {
        browser.pageAction.show(tab.id);
        }
    newurl = tab.url + '&tbs=cdr%3A1%2Ccd_min%3A1989%2Ccd_max%3A2021&tbm=';
  }
}

var gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

/*
On page action click, filter search results.
*/

browser.pageAction.onClicked.addListener(onClick);
function onClick() {

browser.pageAction.onClicked.addListener(Unshit);

function Unshit (){
    browser.tabs.create({
      "url": newurl,
    });
  }
}
