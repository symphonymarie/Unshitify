let Engine1 = "https://www.duckduckgo.com/";
let Engine2 = "https://www.google.com/";

/*
On page action click, filter search results.
*/
browser.pageAction.onClicked.addListener(() => {
  if (tab.url = string.includes(Engine1, 0)) {
    window.location = location.href + 'search options&df=1989-01-01..2021-12-31';
  }
  if (tab.url = string.includes(Engine2, 0)) {
    window.location = location.href + '&tbs=cdr%3A1%2Ccd_min%3A1989%2Ccd_max%3A2021&tbm=';
  }
});