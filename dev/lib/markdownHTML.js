var MarkdownHTML = (function() {

  function MarkdownHTML() {
  };

  MarkdownHTML.prototype = {
    init : function() {
      document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad : function() {
      var elements = document.querySelectorAll("markdown");
      for (var a = 0; a < elements.length; a++) {
        this.convertElement(elements[a]);
      }
    },
    convertElement : function(element) {
      var _this = this;
      marked(element.innerHTML, function(err, content) {
        if (err)
          throw err;

        //convet special chars
        if (content)
          content = _this.convertCodeToText(content);

        element.innerHTML = content;
        hljs.initHighlightingOnLoad();
      });

    },
    convertCodeToText : function(content) {
      content = content.replace(/\r?\n|\r/g, "<br>");

      var pattern = /<code[^>]*>(.*?)<\/code>/img;
      var codeTags = content.match(pattern);
      var elem = document.createElement("div");

      for (var a = 0; a < codeTags.length; a++) {
        var code = codeTags[a];
        var newCode = code;
        
        newCode = newCode.replace("<code>", "");
        newCode = newCode.replace("</code>", "");
        newCode = newCode.replace("&lt;!--", "");
        newCode = newCode.replace("--&gt;", "");

        elem.innerText = newCode;

        var newCode = "<code>" + elem.innerText + "</code>";

        content = content.replace(code, newCode);

      }
      return content;

    },
    convertToHTML : function(mContent) {
      return marked(mContent, function(err, content) {
        if (err)
          throw err;
        return content;
      });
      return null;
    }
  };

  return new MarkdownHTML();

})();

MarkdownHTML.init();
