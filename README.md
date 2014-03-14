g3debounce
==========
<p>A debounce function that restricts it's repeated calls to one at the end and/or the beginning of a time window where the successive calls have a time distance less than that defined in user's arguments. I tried to pass arguments as closures with other libraries like underscore or Ben Alman's similar function but with no success. See my test page at the end.</p>
<p>Moreover, we can pass the context that <code>this</code> refers to inside the function!</p>

Usage
=====
<p>In place of a function name like <code>myFunction</code> pass <code>g3.debounce(myFunction, {delay: &lt;time>[, context: &lt;context>, fireFirst: &lt;true|false|null>, fireLast: &lt;true|false|null>}[, arg1, ...]])</code> where <code>context</code> is a reference pointed out by <code>this</code> and that's it!</p>
<p>Now, your function won't be called more than once in a time window with repetitive calls that have a distance less than <code>time ms</code> and arguments <code>arg1, arg2, ...</code> have been passed already!</p>
<p>At least <code>{delay: &lt;time>}</code> should be given or, your function is returned immediately.</p>
<p>Default values in options are as follows: <code>fireFirst == false</code> and <code>fireLast == true</code>.</p>

Dependencies
============
None.

Evaluator test page
===================
<p>A test on <a href='http://benalman.com/projects/jquery-throttle-debounce-plugin/'>Ben Alman's</a> and <a href='http://underscorejs.org/#throttle'>Underscore's</a> throttle functions compared with this one.</p>
<p>See: <a href="http://centurianii.github.io/g3debounce/">g3debounce</a></p>

Have fun!
