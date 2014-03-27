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
      var marktext =element.innerHTML;
      
      var findCommentStart = '<!--';
      var findCommentEnd = '-->';
      var re = new RegExp(findCommentStart, 'img');
      var re2 = new RegExp(findCommentEnd, 'img');

      marktext = marktext.replace(re, '');
      marktext = marktext.replace(re2, '');
      
  
     
      
      
      marked(this.htmlEscape(marktext), function(err, content) {
        if (err)
          throw err;

        //convet special chars
        if (content)
          content = _this.convertCodeToText(content);

        element.innerHTML = content;
        hljs.initHighlightingOnLoad();
      });

    },
     htmlEscape:function(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
},
    convertCodeToText : function(content) {
      content = content.replace(/\r?\n|\r/g, "<br>");
    
      
// console.log(content);
      var pattern = /<code[^>]*>(.*?)<\/code>/img;
      var codeTags = content.match(pattern);
      
      if (codeTags) {
        for (var a = 0; a < codeTags.length; a++) {
          var code = codeTags[a];
          codeTags[a]="[code"+this._codeCollection.length+"]";
        
          // var newCode = code;

          // newCode = newCode.replace("<code>", "");
          // newCode = newCode.replace("</code>", "");
          // newCode = newCode.replace("&lt;!--", "");
          // newCode = newCode.replace("--&gt;", "");
// 
        // //  console.log("code:",newCode);
          // // elem.innerText = newCode;
          // var elem = document.createTextNode(newCode);
          // console.log(elem);
          // var newCode = "<code>" + elem.nodeValue + "</code>";
// 
// console.log(code);
          content = content.replace(code,  codeTags[a]);
//           
          // console.log();

        }
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
