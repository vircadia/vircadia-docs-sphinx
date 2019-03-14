###############################
Marketplace Markdown Guide
###############################

When you submit an item to the Marketplace, you can format your item description using Markdown syntax. *Markdown* is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, including HTML. 

Below, you can find the commands that we support for Markdown for Marketplace descriptions.

* `Headings`_
* `Emphasis`_
* `Line Breaks`_
* `Blockquotes`_
* `Lists`_
* `Images`_
* `Links`_
* `Code Samples`_
* `Horizontal Rules`_

^^^^^^^^^^^^^^^^^^^^^^
Headings
^^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

    <table class="docutils">
    <thead>
      <tr>
        <th>Markdown Syntax</th>
        <th>HTML</th>
        <th>Output</th>
      </tr>
      </thead>
      <tr>
        <td># h1 Heading</td>
        <td>&lt;h1&gt;h1 Heading&lt;/h1&gt;</td>
        <td><h1>h1 Heading</h1></td>
      </tr>
      <tr>
        <td>## h2 Heading</td>
        <td>&lt;h2&gt;h2 Heading&lt;/h2&gt;</td>
        <td><h2>h2 Heading</h2></td>
      </tr>
      <tr>
        <td>### h3 Heading</td>
        <td>&lt;h3&gt;h3 Heading&lt;/h3&gt;</td>
        <td><h3>h3 Heading</h3></td>
      </tr>
    </table>

^^^^^^^^^^^^^^^^^^^
Emphasis  
^^^^^^^^^^^^^^^^^^^
If more than one markdown syntax is listed, feel free to use any of them. The output will be the same.

.. raw:: html

    <table class="docutils">
    <thead>
      <tr>
        <th class="head">Markdown Syntax</th>
        <th class="head">HTML</th>
        <th class="head">Output</th>
      </tr>
      </thead>
      <tr>
        <td>*italicized text*<br>_italicized text_<br></td>
        <td>&lt;em&gt;italicized text&lt;/em&gt;</td>
        <td><em>italicized text</em></td>
      </tr>
      <tr>
        <td>** bold text**<br>__bold text__</td>
        <td>&lt;strong&gt;bold text&lt;/strong&gt;</td>
        <td><strong>bold text</strong></td>
      </tr>
      <tr>
        <td>***bold AND italicized text***<br>___bold AND italicized text___</td>
        <td>&lt;strong&gt;&lt;em&gt;bold AND italicized text&lt;/em&gt;&lt;/strong&gt;</td>
        <td><strong><em>bold text</em></strong></td>
      </tr>
      <tr>
        <td>​~​~​strikethrough~~</td>
        <td>&lt;del&gt;strikethrough&lt;/del&gt;</td>
        <td><del>strikethrough</del></td>
      </tr>
    </table>
    
^^^^^^^^^^^^^^^^^^^^
Line Breaks
^^^^^^^^^^^^^^^^^^^^

To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.

To create a line break, end a line with two or more spaces, and then hit return.

.. raw:: html

    <table class="docutils">
    <thead>
      <tr>
        <th class="head">Markdown Syntax</th>
        <th class="head">HTML</th>
        <th class="head">Output</th>
      </tr>
      </thead>
      <tr>
        <td>I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on.</td>
        <td>&lt;p&gt;I really like using Markdown.&lt;/p&gt;<br>&lt;p&gt;I think I'll use it to format all of my documents from now on.&lt;/p&gt;</td>
        <td>I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on.</td>
      </tr>
      <tr>
        <td>This is the first line.<br>And this is the second line.</td>
        <td>&lt;p&gt;This is the first line.&lt;br&gt;And this is the second line.&lt;/p&gt;</td>
        <td>This is the first line.<br>And this is the second line.</td>
      </tr>
    </table>

^^^^^^^^^^^^^^^^^^^^
Blockquotes
^^^^^^^^^^^^^^^^^^^^

To create a blockquote, add a > in front of a paragraph.

.. code::

    > This is a blockquote.

The rendered output looks like this:

.. raw:: html

    <blockquote>This is a blockquote</blockquote>

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

.. code:: 

    > This is a blockquote. 
    >
    > It has a second paragraph.

The rendered output looks like this:

.. raw:: html

    <blockquote>This is a blockquote.<br><br>It has a second paragraph.</blockquote><p>

You can also nest blockquotes: 

.. code:: 

    > This is a blockquote. 
    >> The second paragraph is nested.

The rendered output looks like this:

.. raw:: html
    
    <blockquote>This is a blockquote.
        <blockquote>The second paragraph is nested.</blockquote>
    </blockquote>

^^^^^^^^^^^^^^^^^^
Lists 
^^^^^^^^^^^^^^^^^^

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.  

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

^^^^^^^^^^^^^^^^^^
Images
^^^^^^^^^^^^^^^^^^

.. raw:: html 

    <table class="docutils">
    <thead>
      <tr>
        <th class="head">Markdown Syntax</th>
        <th class="head">HTML</th>
      </tr>
      </thead>
      <tr>
        <td>![alt text](image.png)</td>
        <td>&lt;img src="image.png" alt="alt text" /&gt;<br></td>
      </tr>
    </table>


^^^^^^^^^^^^^^^^^^^^
Links
^^^^^^^^^^^^^^^^^^^^

.. raw:: html

    <table class="docutils">
    <thead>
      <tr>
        <th class="head">Markdown Syntax</th>
        <th class="head">HTML</th>
        <th class="head">Output</th>
      </tr></thead>
      <tr>
        <td>&lt;https://www.highfidelity.com&gt;</td>
        <td>&lt;a href="https://www.highfidelity.com"&gt;<br>https://www.highfidelity.com<br>&lt;/a&gt;</td>
        <td><a href="https://www.highfidelity.com">https://www.highfidelity.com</a></td>
      </tr>
      <tr>
        <td>[High Fidelity](https://www.highfidelity.com)</td>
        <td>&lt;a href="https://www.highfidelity.com"&gt;High Fidelity&lt;/a&gt;<br></td>
        <td><a href="https://www.highfidelity.com">High Fidelity</a></td>
      </tr>
      <tr>
        <td>&lt;support@highfidelity.io&gt;</td>
        <td>&lt;a href="mailto:support@highfidelity.io"&gt;<br>support@highfidelity.io<br>&lt;/a&gt;</td>
        <td><a href="mailto:support@highfidelity.io">support@highfidelity.io</a></td>
      </tr>
    </table>
    
^^^^^^^^^^^^^^^^^^^^
Code Samples 
^^^^^^^^^^^^^^^^^^^^

.. raw:: html

    <table class="docutils">
    <thead>
      <tr>
        <th class="head">Markdown Syntax</th>
        <th class="head">HTML</th>
        <th class="head">Output</th>
      </tr></thead>
      <tr>
        <td>`inline code`</td>
        <td>&lt;code&gt;inline code&lt;/code&gt;</td>
        <td>Here is some <code>inline code</code>.</td>
      </tr>
      <tr>
        <td>```<br>block<br>of<br>code<br>```</td>
        <td>&lt;pre&gt;block<br>of<br>code&lt;/pre&gt;<br></td>
        <td>
        <div class="highlight"><pre>block<br>of<br>code</pre></div>
        </td>
      </tr>
    </table>

^^^^^^^^^^^^^^^^^^^^^^^
Horizontal Rules
^^^^^^^^^^^^^^^^^^^^^^^

If there is more than one markdown syntax listed, feel free to use any of them. The output will be the same.

.. raw:: html

    <table class="docutils">
    <thead>
      <tr>
        <th class="head">Markdown Syntax</th>
        <th class="head">HTML</th>
        <th class="head">Output</th>
      </tr>
      </thead>
      <tr>
        <td>___<br>---<br>***</td>
        <td>&lt;hr /&gt;</td>
        <td><hr></td>
      </tr>
    </table>
