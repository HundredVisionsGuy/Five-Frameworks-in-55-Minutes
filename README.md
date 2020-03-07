# Five Frameworks in 55 Minutes 

## [bit.ly/2TP53oL](bit.ly/2TP53oL)

## The Plan for Today

1. [Introductions](#introductions)
2. [What is a framework and how do they work?](#what-is-a-framework)
3. [Getting Started](#getting-started)
4. [5 Frameworks](#frameworks)
5. [Other interesting frameworks](#other-frameworks)
6. [Links and Resources](#links-and-resources)

-------
## Introductions
* Who is this presenter?
* Why? Why do this? How might this be important?
* What tools do we need?

### Who is this presenter

* CS Teacher at Century HS since 2005-06
  - [@centuryhstech](https://www.instagram.com/centuryhstech/?hl=en)
  - [chsweb.org](https://chsweb.org)
  - [Hundredvisionsguy YouTube Channel](https://www.youtube.com/channel/UCaK-mU6spvlU_UssdgkN-bg?view_as=subscriber) 
* WordPress Front-end Developer
  - Latest project was [OregonCSTA.org website](http://oregoncsta.org/)
* Web and Web Dev afficionado
* Student of Web Development


### Why?
* This is where industry is at
* Frameworks speed up development time
* Frameworks solve many common problems in CSS
* Frameworks have many applications (layouts, typography, animations, functionality)

### Why in the classroom?
* Students learn industry standard techniques
* It helps move students more quickly towards realizing their visions
* It adds a much needed wow factor in the classroom
  - as opposed to working hard for little reward/payoff
* It provides a learning opportunity to see how professionals have solved technically difficult challenges (especially with layouts)
* It makes the jump from Web Design to Web Development and helps bring in CS concepts more quickly

[back to the top](#five-frameworks-in-55-minutes)

---------
## What is a framework?
> *[CSS frameworks provide a basic structure for designing consistent solutions to tackle common recurring issues across front end web development.](https://blog.zipboard.co/a-beginners-guide-to-css-front-end-frameworks-8045a499456b)*

* There are front-end frameworks and backend frameworks
* There are frameworks for a very specific design challenge
  - like implementing a responsive grid
  - or implementing animations
  - or iconography
* There are full-blown frameworks that solve most design patterns for a website
  - such as Bootstrap, which began as the Twitter library
### Front-end Frameworks
* Front-end frameworks typically contain 1 or more style sheets and 1 or more JavaScript scripts
* You typically create UI elements and components by adding classes to your HTML
  - The CSS stylesheet does the rest
* Sometimes you can just pick and choose what you want from the Framework to lower load times
* You can use what you want and customize the rest
### JavaScript Frameworks
* The 3 Most popular JavaScript Frameworks are:
  - React
  - Angular
  - VueJS
* There are others
* They are typically JavaScript Frameworks that run on the server 
* They sometimes complement the HTML
* Other times, they generate the HTML

Unfortunately, we won't have the time to take a deep dive in the JS Frameworks.

[back to the top](#five-frameworks-in-55-minutes)

---------
## Tools you'll want
* CodePen 
  - this is a free online based tool that keeps getting better
  - this opens up the possiblity for chromebook 
  - We'll begin our presentation with my blank slate Codepen called **[CSS Framework Template](https://codepen.io/hundredvisionsguy/pen/QWwxVop)**
* Optional tools worth looking at:
  - VS Code (essential text editor)
    You can [download VS Code](https://code.visualstudio.com/download)
  - NodeJS (for JavaScript frameworks like React, Vue, and Angular)
    + Note: you can install this on a chromebook if you have terminal, but I am not sure how possible that is or how excited your IT folks will be 
    + https://medium.com/@jacoboakley/web-development-with-a-chromebook-installing-nodejs-4e358b82a31b

[back to the top](#five-frameworks-in-55-minutes)

---------
## Getting Started

This is the general flow of things:
1. Begin by creating a CodePen Account
2. Next, fork my [CodePen CSS Framework template](https://codepen.io/hundredvisionsguy/pen/QWwxVop)
3. Convert that pen into a CodePen template
4. For each Framework, create a new pen from your template
5. We'll hit several highlights for each framework

After this workshop, you should have the confidence to further explore

NOTE: Code samples are included in the samples directory

[back to the top](#five-frameworks-in-55-minutes)

---------
## Frameworks

1. [Bootstrap](#bootstrap)
2. [Foundation](#foundation)
3. [Materialize](#materialize)
4. [Animate.css](#animate)
5. [VueJS (add some JavaScript)](#vuejs)
6. [Other Frameworks worth looking at](#other-frameworks)

[back to the top](#five-frameworks-in-55-minutes)

## Bootstrap
### Getting Started
1. Click Pen > From Template
2. Select your CSS Framework Template
3. Name it Bootstrap Sample (or something)
4. Click the CSS gear icon
5. Under "Add External Stylesheets/Pens" 
    - Type "bootstrap" and it will find twitter-bootstrap v4
6. Hit Enter and Save & Close
7. Note the changes in Typography

### Adding Bootstrap
1. Like all CSS Frameworks, you only have to add class attributes
2. Note: in case you didn't know the way to add 2 or more classes to one tag is like so:
   * `<p class="emphasis alert">`
    * `<a class="btn btn-primary emphasis">`
3. Go to [getbootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
4. Use the left-hand nav for seeing what you can do
5. TODO:
    1. Add container class
    2. Adjust the navbar
    3. Adjust the grids using the text inside as your guide
      * Challenge: can you adjust the responsive nature (for tablets, phones, etc.)
    4. Style the buttons
    5. Create a form group and form controls
    6. See what other computer components or utilities you can add

NOTE: this doesn't cover adding functionality with JavaScript, but it there's time in the presentation, I could help talk about how I would go about that.

[back to the top](#five-frameworks-in-55-minutes)

---------

## Foundation
Repeat the same ideas but using Foundation.

1. Add a container  
2. Style the `<p>` like a subtitle
3. Make your grids (just like Bootstrap)
4. Table - not much to do here other than adding a hover class
5. For Form...
    * I'm not using any form classes
    * We'll use various callouts (`callout`,`large`,`alert`,`warning`, etc.)
6. TODO: you know what to do...try some stuff

NOTES:


## Materialize
1. Container class
2. On Navbar, there are some differences:
      * Add `navbar` class to nav
      * Wrap the `ul` in a div with a class of `nav-wrapper`
      * Move the Materialize link into an anchor tag with a class of `brand-logo left`
      * Add a `menu right` class
3. Make your grids
4. On the buttons, use `waves-effect` classes
5. Add stripes and hover effect
6. Forms: 
    * add `autocomplete` on input
    * Let's add some icons to the TextArea label

## Animate.css
For Animate, just pick any framework and add some animation by:

1. Add the Animate.css framework
    * In CodePen, by clicking the CSS gear icon and searching for animate 
      + Just like you did for each of the other frameworks
    * In your text editor of choice, get the link from  CodePen or the [Animate.css website](https://daneden.github.io/animate.css/)
2. Add one of the many classes listed on...
    * The [Animate.css website](https://daneden.github.io/animate.css/)
    * The [Animate GitHub Repo](https://github.com/daneden/animate.css#animations)
3. Test out different animations on different elements
4. TODO:
    * Write a JavaScript script to change, toggle, add, or hide animate classes on various events
    * The quick & dirty way would be through [jQuery toggle class](https://www.w3schools.com/jquery/html_toggleclass.asp)


## VueJS
1. For this, you will need to either 
    * work on the files in the [vuejs folder](vuejs/)
    * Create a Fork of my [Vue Framework Test CodePen](https://codepen.io/hundredvisionsguy/pen/LYVZVBV)
2. Follow the [VueJS Getting Started Page](https://vuejs.org/v2/guide/#Getting-Started)
3. TODO:
    * Learn to create apps by divide the app into ***components***
      * You really need to do this on your own device and NOT CodePen
      * Download [NodeJS](https://nodejs.org/en/)
    * Continue learning VueJS by following one of many different tutorials

NOTE:
* With VueJS, you'll want to use a good text editor and NodeJS to continue working.

## Other Frameworks
* [CanvasJS: Getting Started](https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/) - this is great for data visualizations (for a sample, see my [Simple CanvasJS Test CodePen](https://codepen.io/hundredvisionsguy/pen/mILkg))
* [NES.css (NES-style CSS Framework)](https://nostalgic-css.github.io/NES.css/) - if I have to explain what NES is, you probably won't appreciate it
* [Milligram](https://milligram.io/) - a minimalist CSS framework - I really like this one, and I almost included it in my 5. NOTE: The [NodeJS Live (Node Foundation)](https://live.nodejs.org/) uses it


[back to the top](#five-frameworks-in-55-minutes)

---------

## Links and Other Resources
* [CSS Frameworks Roundup (and some thoughts)](https://css-tricks.com/css-frameworks-roundup-and-some-thoughts/) - Chris Coyier - creator of CodePen - has some pros and cons on frameworks
* [CodeHS Unit on Bootstrap](https://codehs.com/library/course/1939/module/2823) - my Web students get this in the Web Design course - it's a mixed bag in my opinion
* [W3Schools Bootstrap 4 Tutorial](https://www.w3schools.com/bootstrap4/) - I think it's a good resource, especially for adding functionality through JavaScript 

[back to the top](#five-frameworks-in-55-minutes)

---------