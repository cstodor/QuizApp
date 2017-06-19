# A simple MEAN stack Quiz Application
MEAN Stack QuizApp is built with a collection of JavaScript based technologies from Client to Server to Database.
This repository contains the code for a RESTful API that was built using the MEAN stack:

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>Angular (v.4.0.1)</li>
<li>NodeJS</li>
</ul>

# Prerequisites
<ul>
<li>NodeJS - Download and Install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>. You can find free NodeJS tutorials at <a href="https://nodeschool.io/" target="_blank">nodeschool.io</a> to get you started.</li>
<li>MongoDB - Download and Install <a href="https://www.mongodb.org/downloads" target="_blank">MongoDB</a> - Make sure it's running on the default port (27017).</li>
</ul>

# Additional Packages
<ul>
<li>Express - web application framework for NodeJS.</li>
<li>Mongoose - a NodeJS library that provides MongoDB object mapping.</li>
<li>Body Parser - populates req.body with the value of the POST parameter.</li>
<li>CORS - Cross-Origin Resource Sharing. Enables requests of resources from a different domain.</li>
<li>Angular 4 - a structural JavaScript framework for dynamic web apps.</li>
<li>Angular CLI - a command line interface to scaffold and build Angular apps using NodeJS style.</li>
</ul>

# Quick Install
<p>The quickest way to get started is to clone the project and utilize it like this:</p>
<p>1. Install dependencies from root folder using your command line:</p>
<pre><code>npm install</code></pre>
<p><em>optionally you can install <a href="https://www.npmjs.com/package/nodemon" target="_blank">nodemon</a> which will monitor your source code and automatically restarts your server when detects any changes. To install nodemon use:</em></p>
<pre><code><em>npm install -g nodemon</em></code></pre>
<p>2. Add Your Auth0 Credentials</p>
<p>open the <code>environment.ts</code> and <code>environment.prod.ts</code> files located at <code>ng-src/src/environments/</code> folder, and add your Auth0 Client ID and Auth0 Domain name.</p>
<p>3. After installation is finished use:</p>
<pre><code>node server</code></pre>
<p><em>or use this command if you've installed nodemon:</em></p>
<pre><code><em>nodemon server</em></code></pre>
<p>4. Then open your browser and go to:</p>
<pre><code>http://localhost:5000</code></pre>

# License
<p>(The MIT License)</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
