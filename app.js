$("#bibliography")
  .nextAll("ul")
  .addClass("bibliography");

$("p")
  .filter(function() {
    return (this.textContent || this.innerText).match(/^-->/);
  })
  .addClass("credit")
  .html(function(i, html) {
    return html.replace(/^--&gt; /, "");
  });

$("li")
  .filter(function() {
    return (this.textContent || this.innerText).match(/^==/);
  })
  .addClass("fragment")
  .html(function(i, html) {
    return html.replace(/^== /, "");
  });
