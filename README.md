<h1><strong>Chronicler&rsquo;s Modified Rolls (CMR)</strong></h1>
<h3><strong>What this module does:</strong></h3>
<p>CMR adds a context menu option to the chat context menu (available by right clicking on a chat message), which allows a roll result posted in the chat to be modified by positive/negative numbers. The applied modifier shows in the roll formula as a separate addition/subtraction and is appendes to the flavor text of the roll as &ldquo;Modifier: +-X&rdquo;. This option should only be available to the GM.</p>
<p>Simply said, it creates the opportunity to change roll results in the chat manually in the case that you need a modifier that is not automatically present in your system.</p>
<h3><strong>What this module does not do:</strong></h3>
<p>CMR does not interfere with any module that doesn&rsquo;t change anything about the way the dice roll structure is built or that doesn&rsquo;t fundamentally change the chat log structure. It simply adds a new context menu option to dice rolls and updates the roll result and flavor according to the input.</p>
<p>In the case that the roll result is immediately used by your game system to calculate other things such as damage or other things, this module like won&rsquo;t change these calculations, except if you first apply the modifier and <em>then</em> let the system do the work. In that case, it will also only work if the system calculations are only dependant on the roll <em>result</em> and not any of the flavor text or (possibly) roll formula. I don&rsquo;t know all the systems, sadly.</p>
<h3><strong>How to install:</strong></h3>
<ol>
<li>In the FVTT Configuration and Setup window, navigate to &ldquo;Add-on Modules&rdquo;</li>
<li>Click &ldquo;Install Module&rdquo;</li>
<li>Copy-paste the Manifest URL <a href="https://github.com/zorhold/chroniclers-modified-rolls/blob/main/module.json">https://github.com/zorhold/chroniclers-modified-rolls/blob/main/module.json </a>into the &ldquo;Manifest URL:&rdquo; window.</li>
<li>Alternatively, search for the Package Name &ldquo;Chronicler&rsquo;s Modified Rolls&rdquo; &amp; click the &ldquo;Install&rdquo; button.</li>
<li>Done.</li>
</ol>
<h3><strong>Important to note:</strong></h3>
<p>This was simply a module I threw together for my personal campaign, and I am not in any way overly competent in JavaScript. The module should work with any system since it hooks with the default chat log context menu &amp; should also work with any system that works with the default dice roll structure defined by FoundryVTT.</p>
<p>However, since I only created this on a whim, I am not sure how often I will be able to update this module. If something in the FVTT code changes drastically, I will update my private module first but will likely port those changes over to this repository as well. If there are any questions concerning the code: I am, as mentioned, not well versed in JavaScript and as such the code might be non-optimal. I am very aware of this. But in the words of Todd Howard: &ldquo;It just works.&rdquo; Or at least I haven&rsquo;t found any absolutely game breaking bugs. Which probably makes this a more stable release than anything Bethesda has put out, in like, ever. Yay me. And you, if you like this module.</p>
<h3><strong>Screenshots:</strong></h3>
<p>The new chat context menu option on right click:</p>
<img>![Roll_Message_ContextMenu](https://user-images.githubusercontent.com/86226697/138246362-5f192586-f900-4d42-a6ed-3372919eb762.png)</img>
<p>The "Modify Roll" dialog:</p>
<img>![ModifyRoll_Dialog](https://user-images.githubusercontent.com/86226697/138246387-e396842f-8c7d-4dfe-b41b-85e69fbdbf3c.png)</img>
<p>The roll message after modification:</p>
<img>![ModifiedRoll_Message_Result](https://user-images.githubusercontent.com/86226697/138246396-9a1c8d1b-8d48-40a3-b474-acb6fae0c41b.png)</img>
