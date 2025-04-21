# myFirst_gh-pages

### notes: Use effect for loading:

* loading with onLoad in react seems unstable
* lukily "useEffect" does just wat i need.

        useEffect(() => { <function>;}, []);

  schould only be runb once

* it seems (atleasst in develop) it is run twice.

  This seems to be caused by &lt;react.StrictMode&gt; so i removed it
  .
