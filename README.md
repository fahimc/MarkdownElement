MarkdownElement
===============

write markdown in a HTML page and it will render it as HTML.


#Usage Example

```
<html>
  <body>
    <markdown>
      #Hello World
    </markdown>
  </body>
</html>
```


#API

###convertElement(element)

**element**: A DOM element with markdown.  

This method replaces markdown in an element with HTML.

***

###convertToHTML(markdownContent)

**markdownContent**: A String with markdown.  

This method replaces markdown string with a String with HTML.

**returns** String

***

#Credits

**[Marked](https://github.com/chjj/marked/)** - Fast Markdown parser in JavaScript  
**[HighlighJS](http://highlightjs.org/)** - Hightlight syntax in JavaScript  

