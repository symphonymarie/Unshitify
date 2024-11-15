<hr />

# **UNSHITIFY** | Firefox Extension


Adds a new page action that, when clicked, filters search to show only results prior to the Great AI Enshitiffication (Pre-2022).
<hr />

## ![An icon of a plunger.](https://github.com/symphonymarie/Unshitify/blob/main/icons/unshit-48.png)  Currently Supported Engines ![An icon of a plunger.](https://github.com/symphonymarie/Unshitify/blob/main/icons/unshit-48.png) 
* DuckDuckGo
* Google Search

<hr />
  
## ![An icon of a plunger.](https://github.com/symphonymarie/Unshitify/blob/main/icons/unshit-48.png)  Modification Examples ![An icon of a plunger.](https://github.com/symphonymarie/Unshitify/blob/main/icons/unshit-48.png) 


### Modifying the date range

For DuckDuckGo, change the values in line 13 (denoted by YMD) to your preferred range.
>
> #### Here is the default range: 1989-01-01 - 2021-12-31.
> ```js
> newurl = tab.url + 'search options&df=1989-01-01..2021-12-31';
> 

>
> #### Here is an example, modified to show results from 1989-01-01 - 2022-12-31.
> ```js
> newurl = tab.url + 'search options&df=1989-01-01..2022-12-31';
> 

For Google, change the values in line 17 (denoted by year) to your preferred range.
>
> #### Here is the default range: 1989 - 2021.
> ```js
> newurl = tab.url + '&tbs=cdr%3A1%2Ccd_min%3A1989%2Ccd_max%3A2021&tbm=';
> 

>
>  #### And an example, modified to show results from 1989 - 2022.
> ```js
> newurl = tab.url + '&tbs=cdr%3A1%2Ccd_min%3A1989%2Ccd_max%3A2022&tbm=';
>


### Adding a new engine

To add a new engine, define an Engine and determine the URL format for date ranges. This is typically appended onto the end of a search query somewhere in the URL. Here is an example you can use to input your own information.
> ```js
> let Engine1 = "https://www.duckduckgo.com/";
> let Engine2 = "https://www.google.com/";
> let Engine3 = "https://www.MYNEWENGINE.com/";
> let String1 = "1989-01-01"
> let String2 = "%3A1989%"
> let String2 = "Shortened string from MYNEWENGINEURLFORMAT"
> /*
> On page action click, filter search results.
> */
> browser.pageAction.onClicked.addListener(onClick);
> if (tab.url.includes(Engine1)) {
>    if (tab.url.includes(String1)) {
>    browser.pageAction.hide(tab.id);
>    }
>    else {
>      browser.pageAction.show(tab.id);
>      }
>    newurl = tab.url + 'search options&df=1989-01-01..2021-12-31';
>  }
>  if (tab.url.includes(Engine2)) {
>      if (tab.url.includes(String2)) {
>        browser.pageAction.hide(tab.id);
>      }
>      else {
>        browser.pageAction.show(tab.id);
>        }
>    newurl = tab.url + '&tbs=cdr%3A1%2Ccd_min%3A1989%2Ccd_max%3A2021&tbm=';
>  }
> }
>  if (tab.url.includes(Engine3)) {
>      if (tab.url.includes(String3)) {
>        browser.pageAction.hide(tab.id);
>      }
>      else {
>        browser.pageAction.show(tab.id);
>        }
>    newurl = tab.url + 'MYNEWENGINEURLFORMAT';
>  }
> }


     
***
