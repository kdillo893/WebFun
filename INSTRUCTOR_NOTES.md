# Progression for Courses:

## Week progression:

### =========== Week 1: ===========

####  Monday-Tuesday

#####  Basics of html file.

* something.html,
* structure,
* common tags,
* basic head/body elements (eg. title, )

Get the apache web server to run for each student's working folder, serving the webpages only on their computer
(Optional, maybe later in week) Students share their starting page to another student on local camp network

#### Wednesday-Thursday

##### CSS basics

* most common styles
    * padding/margin/border,
    * color, background-color,
    * fonts and sizing,
    * placement relative to other html tags

* "where to place css styles?"
    * inline,
    * top of file style element,
    * .css file includes

* how to select elements in style tag and .css file
    * id, class, element type, attributes.

#### Thursday (optional Friday)

##### JavaScript Basics

* "Hello World!" with in html document to show alert on page
* use browser to show the javascript interpreter in devtools
* Start on variables, functions, and syntax.

##### Personal projects to put together their own html/css pages without JavaScript
* ask students what they want to make with what they know so far.
* if students are curious about images on websites, introduce that early.

### =========== Week 2: ===========

#### New students 
They would do the same as last week, with a few modifications:

##### Monday
* How to use Visual Studio Code
    * use Live Server extension here instead of Apache for first week.
* basics of HTML file
    * file structure and open/close elements:

        ```html
        <html>
        <head>
        ...
        </head>
        <body>
        ...
        </body>
        </html>
        ```

    * text based elements (p, span, h1 - h6, i, b, em, code)
    * DOCTYPE
    * meta elements in head tag (title, charset, viewport, description)

        ```html
        <head>
        ```

    * head elements commonly used:
        * link stylesheet, link icon, script src="myscript.js".

* Write or draw what they want to make

##### Tuesday

* Links and buttons
    * ``<a>`` with href and target attributes,
    * ``<button>`` and types, show onclick attribute to display text in alert
* Lists and tables
    * ``<ol>``/``<ul>`` and ``<li>`` for internal items.
    * ``<table>``, ``<thead>``, ``<tbody>``, ``<tr>``, ``<td>``
    * only require brief example, since it takes time to type and verify.
* Fun HTML elements:
    * img, audio, iframe, video.
    * Tag attributes for these.
* Form and input HTML elements:
    * ``<form>`` is less important for now, but I can show how it sends on action.
    * ``<input>``, ``<textarea>``, input tag type attributes.

##### Wednesday
* Common CSS attributes
    * color, positioning, box model, fonts and sizing.
* CSS style location
    * style attribute, style tag, .css file included with link tag
* CSS Selectors
    * id, class, tag name, attributes

##### Thursday
* Introductory JavaScript
    * script tag, script files with .js
    * using javascript to manipulate html document parts (example from my code)
    * (alert&console, hello world)
    * Variables, math operators
* Relating ID and Class for "document" object manipulation
* Quiz on html/css, attributes, common CSS.

##### Each day:
finishing early means "work on your own website", and I can help them figure out
how to do things that are more advanced.

### Existing students week2

####  Monday

##### CSS wrap-up
* Go over padding/margin/border again
* Content height/width and bounding for min/max
* Font css styles (font-family, font-size, font-weight; others less important)
* Review css selectors (#id, .class)
* Go over special CSS selectors, eg :hover, :active, :visited, :link, :focus
* Review positional css styles
* Quiz on "What does this CSS style do?"
    1. color: #FF00FF;
    2. background-image: url("/media/image.png");
    3. height: 10vh;
    4. border: 2px dashed #000000;
    5. padding: 10px;
* Quiz on "what object will this change based on the selector?":
    1. #butterfly-1
    2. .links
    3. div.box
    4. p span, p h1
    5. a:link
    6. p:hover
    7. button:active
    8. nav ul li

##### Begin JavaScript
* Functions, console/alert, ``<script>`` tag, basic mathematical operators.
* "on load" javascript actions (make an element and put it on the page)

##### Discuss {NAME1}'s butterfly story webpage idea:
* autofocus "next" button,
* Show "repetitive way", which links to next page with ``<a>`` or ``<button>`` hard-coded
* Describe linking using javascript array and function call on button

#### Tuesday

##### Re-emphasize ID/Class attributes:
* Show how we used CSS selector for id/class,
* show small example I had with using "id" to select an element.

##### JavaScript continued:
* Variables, if-else, for loop, object/array brief explanation.
    * data types for variables are assumed in JavaScript
    * Object, Array, Map, etc. probably less important;
        * Need to briefly mention object for "document" and other DOM stuff.
* null/undefined, using "if" to check for objects, strings, and equality.
    * reference an undefined variable "pizza", show "null"/"undefined"
* Using "document" to check for elements on html to interact with.
* Modify HTML element properties using JavaScript (style, innerHTML, innerText)

#### Wednesday

##### JavaScript with Buttons, input, and scrolling
* (still need to prepare further)
* Dark-mode vs light-mode on their web pages (would alter text and background colors)
    * adding class for dark-mode to a root element.

##### JavaScript loops, objects, properties,
* Describe html elements from "document" to introduce objects and classes.
* Loop over list of strings or numbers to add up a sum, display in console.

##### Using canvas as example for web browser based games.
* (still need to prepare further)

#### Thursday

##### Use XAMPP control panel to let apache host their site
* before now, we were using simple directory navigation or VSCode hosting.
* use Apache to host on local network (should have my httpd.conf configs)
* See if any of the kids can view another's website over network (might not work)
* Show my own webpage examples on their computers over the network.

##### PHP example for forms
* PHP basics (<?php ?>, getting info from the request type, etc)
* Using an example, write a ``<form>`` tag with an action that processes url parameters;
    Displaying those inputs on the page.

##### Start introducing "What backend technologies are" and "what's popular"
* Java, PHP, C#, Go, Node.js; we focus on Java/PHP
* SQL, different DBMS related to SQL
* How back-end code interacts with databases.
* (I might need another day to prepare code examples for this)
* Java and PHP "hello world" type examples
* Using PHP, make a default include header segment for html (making less repeated segments)

#### Friday
(funday, preparing some DB configurations and back-end coding examples)

### ================ Week 3 ====================

#### Newer students
Some are at end of Level 1, Some are starting or in middle of level 2.
Any that are still on CSS and HTML will do Track1,
Any that are finishing with CSS and started JavaScript will do Track2,
{NAME1} is slightly ahead of the others with JavaScript, but would benefit from
    Track2. If {THEY} {ARE} able to quickly go through those, {THEY} can be a day ahead
    and start on PHP and dynamic page loading early.

#### Track 1
##### Monday
###### HTML additional things (attributes, id/class, input types; show tables)
###### Adding new pages and links around their site)
###### Other HTML tags (html5 stuff like audio/video, iframe with youtube embed example)
###### Review HTML tags (quiz1.html, add more tags)
###### basic Style selectors, style attribute to tag to file (copy between as example)
###### CSS Style basics (positioning, color, fonts, background)

##### Tuesday
###### CSS Selectors intermediate (id, class, attribute, interactives)
###### CSS Box model, sizing, display, more about positioning;
###### styling existing elements on their page to look nice.

##### Wednesday
###### CSS Review (Quiz2.html)
###### Advanced CSS (selector special stuff, transitions, shadows/gradients)
###### Show examples of animations, transitions, transforms
###### JavaScript intro (fundamentals and types) (see track 2)
###### JavaScript WebAPI for Document object model

##### Thursday
###### Continue JavaScript (condtions, for loops, functions, small amounts with Object)
###### Use JavaScript to change page styles and content tags
###### JavaScript's less commonly used "input" prompt()
###### JavaScript arrays (example with document.querySelectorAll());

#### Track 2
##### Monday
###### CSS Review and quiz (Quiz2.html, add more styles and descriptors)
###### Advanced CSS (selector special stuff, transitions, shadows/gradients)
###### Show examples of animations, transitions, transforms
###### JavaScript intro (fundamentals and types)
* Variables, math operations, setting variables, const/var/let
* Data types (typeof); might not need instanceof because 
    * string, number, boolean, undefined, symbol, bigint, function, object
    * for "undefined" would use variable name that hasn't been declared or assigned.
    * number quirks: infinity, NaN
    * Type casting with "Number" or "String" function instance
* "Output" variations
    * console.log (in devtools console on most browsers)
    * alert()
* Conditional operations
    * if conditions, simple examples
###### JavaScript WebAPI for Document object model
* how to interact with Document
* (optional) DOM can be used with other programming languages
* Beginner document object use:
    1. get the text of an element by id, print it to the console or alert.
    2. get element by id, put text into it.

##### Tuesday
###### Continue JavaScript (condtions, for loops, functions, small amounts with Object)
* Applying if conditions with input element (value)

###### Use JavaScript to change page styles and content tags
(todo list example)

###### JavaScript's less commonly used "input" prompt()

###### JavaScript arrays (example with document.querySelectorAll());

##### Wednesday
###### JavaScript standard library common things (Math, Date, parse*(), etc.)
###### HTML inputs interacting with JavaScript (better than prompt)
###### Web browser features with JavaScript (cookie with localStorage);
###### JavaScript to move an item around the page when pushing buttons

##### Thursday
###### JavaScript events; adding events for keyboard presses.
###### Make an image move on screen with keyboard events (combo of CSS, JavaScript, HTML)
###### Apache Web Server, get them to use that instead of VSCode live server (troubleshoot to view other students; web pages)
###### PHP Basics (output, variables); simple form using PHP file.

##### Friday or Extra Learning
###### PHP Data Types (almost matching JavaScript), math stuff
###### PHP $_SERVER variable, escaping inputs (htmlspecialchars())
###### SQL starter (make a database, user with same name for everyone, 


# Level Designations:
## Level 1: HTML and CSS basics
* HTML basics
    * <html>, <head>, and <body> tags for organization
    * text-based tags and modifiers (p, span, h#, em, i, b, code)
    * <title>
* Hosting webpage files using VSCode Live Server extension
* CSS basics
    * methods of including styles for elements
        1. style attribute on tags, like style=”color:blue;”
        2. <style> element in the head,
        3. css files with <link rel=”stylesheet” href=”file.css” />
    * type-based selection for CSS styles (one deep only, simple listing like “p { color:red }”)
    * immediately visible styles
        * color, background-color, font, spacing, margin/padding/border
* HTML basic interactive elements and attributes
    * <a> tag with href¸ <img> tag with src.
    * Input elements: <input> (default, type=”radio”, type=”checkbox”, …)
    * <button> with basic “onclick” to show alerts
## Level 2: More HTML/CSS, basic JavaScript and interactivity.
* Multiple html pages in a website and using <a> tags to navigate between every page.
* HTML Attributes and where to use them:
    * Universal attributes:
        * class, id, style, role(*optional)
    * Specific attributes for given tags:
        * href for link/a/etc;
        * target for a (*optional)
        * src for script/img/source/etc.
        * Form: action, method, name.
* (*advanced optional attributes: accept-charset, autocomplete, enctype, novalidate)
* CSS selectors with id/class/attributes
    * .class, #id, button[type=”button”]
    * :hover, :active, :link, :visited
* JavaScript language basics
    * variables, data types (Number, String, Boolean, Undefined)
        * Not covering BigInt or Symbol, Array and Object come later.
* Including JS with HTML
    * <script> tag with either JavaScript inside or src=”file.js” attribute.
* div, nesting elements, organizational tools
* JavaScript for DOM for HTML element.
    * Changing objects that are already on the webpage
    * adding new objects to the webpage
## Level 3 (JavaScript and HTML/CSS together, Browser features, devtools, console, page inspection, using javascript to manipulate items depending on variable states)
TBD specific “testable” segments
* sectioning documents with like main/nav/section/article are next level.
* Conditional statements in javascript
* array
* Loops
    * for, while, do-while
    * break; and continue; for control flow.
## Level 4: Advanced JavaScript/CSS/HTML, Browser Events, Server with XAMPP
TBD specific “testable” segments
* Arrays, Objects, type and attribute checking for their components.
* Css transitions and animations
* HTML special elements (nav,header,main, etc) and role element.
* HTML5 elements and when to use them.
* Events for various things, using document object “addEventListener”
    * click, key*, hover, dblclick, etc...
* XAMPP to load Apache server and use the folder
    * pointing to directory with config file, start/stop for apache server
    * some special attributes for Server-Side Included files (header example)
    * PHP example file for form example (preview of back-end or server-side).
## Level 5: Back-end coding (PHP/Java), Database (MySQL)
* Use JavaScript to call an API endpoint on back-end or somewhere else on the web, load the results on the webpage.
* Hosting website locally on network, including DB connection.
* How would I host websites on the internet?
    * Website hosting providers (bluehost, hostinger, bad case is cloud providers and godaddy)
    * “cloud providers” for 
    * “new geocities” -> site that provides simple hosting for small web-pages.
    * Google sites
    * github sites (for coding project static hosting, typically free for public repo’s)
* PHP basics
* Java basics with a web server.
* MySQL basics
    * user, msql instance start/stop, database creation, table creation,
## "Advanced", Above Level 5.
* Servers for Web, Backend, and Database
    * How to configure for different use cases
    * How to run server daemons or services
    * Connections and communications between them
* Frameworks, libraries, and dependencies for "quick development"
    * ASP.Net for Microsoft web solutions (C++, C#)
    * Spring, Tomcat, Maven (Java)
    * Laravel (PHP)
    * Node.js, React.js, Angular (JavaScript)
    * Bootstrap (CSS and front-end components)
    * "where to find more"
* Coding tools that everyone uses
    * Git - version control software
    * GitHub (for publishing and hosting version control things)

# Install/Requirements for Web Development

### Web Server
* XAMPP - for simple apache runtime setup

### IDE
* VSCode - for editing html/css/js
    * Extensions might be needed for java runtimes
* IntelliJ - for Java
    * Community edition 

### SQL editor:
* MySQL Community edition
    * Not for business use, just personal.
* DBeaver
    * Free, apache2.0 license.
* pgAdmin for PostgreSQL
* Oracle SQL Developer - VSCode extension or pure download.
