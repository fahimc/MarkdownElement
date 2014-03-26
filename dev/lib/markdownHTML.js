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
      marked(element.innerHTML, function(err, content) {
        if (err)
          throw err;
        element.innerHTML = content;
        hljs.initHighlightingOnLoad();
      });

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
