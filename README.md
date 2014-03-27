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

##Adding HTML Code

Put the code into a code block and comment it out with "<!--" and close with "-->"

###Example

```
<!--
<body>
		 <meta charset="utf-8">
  <title>jQuery UI Button - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.9.1.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <link rel="stylesheet" href="/resources/demos/style.css">
  
<head>
-->

```




#Credits

**[Marked](https://github.com/chjj/marked/)** - Fast Markdown parser in JavaScript  
**[HighlighJS](http://highlightjs.org/)** - Hightlight syntax in JavaScript  

