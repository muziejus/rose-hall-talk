# Foundations of Collaborative Digital Web Projects

<small><a href="http://moacir.com">Moacir P. de Sá Pereira</a> / <a href="http://twitter.com/muziejus">@muziejus</a><br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a><br />
moacir.p@columbia.edu<br />
NY, NY, 6 June 2019</small>

Note: Thanks all for coming, and let’s get started on today’s workshop. First
thing’s first, I want you all to open up this presentation on your computers.
It will make things much, much easier. Head on over to 

---

## [talks.moacir.com/itsi-19](http://talks.moacir.com/itsi-19)

Note: This will let you follow along with me, which will come in handy when
you have to click on links and copy paste things.

---

## [Our Google Sheets dataset](https://docs.google.com/spreadsheets/d/1ayByYuU-nXn0acn5CKN5dabJ3csdzbUSpppn5uO2qnM/edit?usp=sharing)

### (Add your favorite song)

---

## Software to Get

<div class="row">
<div class="col-6">
<h3><i class="fab fa-apple"></i> MacOS</h3>
<ol>
<li>Atom (<a href="http://atom.io">atom.io</a>)</li>
<li>Git (installed via Terminal)</li>
</ol>
</div>

<div class="col-6">
<h3><i class="fab fa-windows"></i> Windows</h3>
<ol>
<li>Atom (<a href="http://atom.io">atom.io</a>)</li>
<li>Git (<a href="http://gitforwindows.org">gitforwindows.org</a>)</li>
</ol>
</div>

Note: While these are all downloading, I’ll describe a bit...

---

## While All That’s Downloading, Why Atom?

<ol>
<li class="fragment">Free</li>
<li class="fragment">Similar across platforms</li>
<li class="fragment">One-stop shop with integrated shell</li>
<li class="fragment">Excellent Git/GitHub support built in</li>
</ol>

---

## Isn’t Google Docs Free and Platform Agnostic?

<ol>
<li class="fragment">“Free”</li>
<li class="fragment">Ethics, Availability, and Sustainability of Plain Text (see <a href="https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown">Tenen and Wythoff</a>)</li>
</ol>

---

## Git Is…

<ol>
<li class="fragment">Part of a backup solution</li>
<li class="fragment">An intention tracker/writing journal</li>
<li class="fragment">A declutterer</li>
<li class="fragment">A multi-verse generator</li>
<li class="fragment">A collaboration engine</li>
</ol>

---

## The Four Main Steps to Git

<ol>
<li class="fragment">Save - continuous (with autosave). Not even part of Git.</li>
<li class="fragment">Stage - less frequent. Also known as `git add`.</li>
<li class="fragment">Commit - less frequent still.</li>
<li class="fragment">Push - less frequent still.</li>
</ol>

Note: Saving is what you already do. The files you work with have changes that
get saved to the disk. Then, in staging a file, you’re giving Git a heads up
to keep track of the changes you have made. In committing, you’re putting down
a milestone for the changes the files have undergone. And in pushing, you’re
syncing your new changes with a server.

---

![The four steps to git](https://i.imgur.com/mNfax2z.png)

--> Icons by Font Awesome. [License](https://fontawesome.com/license).

Note: Here’s a slightly more visual way to think about this. But you’ll notice
here that I’m talking about “changes,” not a “document.” This is a central
conceit of Git.

---

## You’re not working on a _document_.<br />You’re working on a _project_.

Note: For the rest of today, we’ll be working on a project that is your CV.
It’s not a single document. In fact, it’s many--it’s at least the html page
that is your online CV and the pdf that is the print version. In a project,
files come and go. They could be datasets, collections of text like chapters
or sections of an article, or even, like in today’s workshop, the various
parts of your CV.

---

## Working with Git via GitHub <i class="fab fa-github"></i> and Simple-Data-Site

1. Create an account at [github.com](http://github.com)
1. Fork the [`simple-data-site`
   repository](http://github.com/plain-plain-text/simple-data-site) (or “project.”)
1. Enable GitHub pages on the new repository

---

## Back to Atom

1. Install Atom plugins: [github.com/plain-plain-text/atom-config/](http://github.com/plain-plain-text/atom-config)
1. Clone your own, forked `simple-data-site` repository from GitHub via Atom’s
   Command Palette (cmd-shift-p or ctrl-shift-p).
1. Link Atom to GitHub via the GitHub panel in Atom.

Note: Atom is brought to us by the people at GitHub. It probably won’t win you
any cool kid awards amongst your hacker nerd friends, but it’s an easy editor
to learn, I think, and its Git integration is tip-top.

---

![Screenshot of Atom](https://i.imgur.com/SZZsMA4.png)

---

## Key Files in Simple-Data-Site

* 📁 `final` (An example of where we’ll end up)
* `favorite-songs.csv` (Our dataset, as a CSV)
* `index.html` (Front page, as an HTML file)
* `script.js` (Our JavaScript)
* `style.css` (Our CSS)

---

![Three components of a web page](https://i.imgur.com/KGSNQGH.png)

---

## Open up `index.html` in Your Browser and in Atom

---

![index.html in Atom and Browser](https://i.imgur.com/tiAzRgu.png)

---

## Activate Vue.js in `script.js`

<pre><code class="js">const app = new Vue({
  // This designates the el(ement) in which Vue will operate.
  // "#" is short hand for "the element with the id of…"
  el: "#main-container",
  // This designates the data Vue will send to our page. 
  // For example, it defines a "card" property/variable.
  data: {
    card: "card made by Vue!"
  }
});
</code></pre>

---

![index.html in Atom and Browser with vue.](https://i.imgur.com/OpKyP6A.png)

---

## Read in Data

<pre><code class="js">
const dataUrl = "https://plain-plain-text.github.io/simple-data-site/favorite-songs.csv";
d3.csv(dataUrl).then(function(songs) {
  // print the value of the songs parameter
  console.log(songs);
  const app = new Vue({
    el: "#main-container",
    data: {
      card: "card made by Vue!",
      songs: songs
    }
  }); 
});
</code></pre>

---

![script.js with console message](https://i.imgur.com/mCC4TIw.png)

---

## Replace Card with Vue.js Loop

<pre><code class="html"><div v-for="song in songs">
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ song.songName }}</h2>
      <p class="card-text">
        I am a song performed by {{ song.artist }}
      </p>
    </div>
  </div>
</div>
</code></pre>

---

![Vue.js in action](https://i.imgur.com/fZzMplo.png)

---

![The four steps to git](https://i.imgur.com/mNfax2z.png)

--> Icons by Font Awesome. [License](https://fontawesome.com/license).

---

![Committing and pushing in Atom](https://i.imgur.com/TQf9GYN.png)

---

## Check Your Page:

### `yourgithubname.github.io/simple-data-site`

---

## Now, Edit Away!

* CSS & components: [<i class="fab fa-bootstrap"></i> Bootstrap](http://getbootstrap.com)
* More on Vue: [<i class="fab fa-vuejs"></i> Vue.js introduction](https://vuejs.org/v2/guide/index.html)


---


## Thanks!
### [@muziejus](http://twitter.com/muziejus) / moacir.p@columbia.edu
