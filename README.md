# Chronicler’s Modified Rolls (CMR)
### What this module does:
CMR adds a context menu option to the chat context menu (available by right clicking on a chat message), which allows a roll result posted in the chat to be modified by positive/negative numbers. The applied modifier shows in the roll formula as a separate addition/subtraction and is appended to the flavor text of the roll as “Modifier: +/-X”. <i>This option should only be available to the GM</i>. 

Simply said, it creates the opportunity to change roll results in the chat manually in the case that you need a modifier that is not automatically present in your system.
### What this module does not do:
CMR does not interfere with any module that doesn’t change anything about the way the dice roll structure is built or that doesn’t fundamentally change the chat log structure. It simply adds a new context menu option to dice rolls and updates the roll result and flavor according to the input.

In the case that the roll result is immediately used by your game system to calculate other things such as damage or other things, this module won’t change these calculations, except if you first apply the modifier and then let the system do the work. In that case, it will also only work if the system calculations are only dependant on the roll result and not any of the flavor text or (possibly) roll formula. I don’t know all the systems, sadly.
### How to install:
1.	In the FVTT Configuration and Setup window, navigate to “Add-on Modules”
2.	Click “Install Module”
3.	Copy-paste the Manifest URL https://raw.githubusercontent.com/zorhold/chroniclers-modified-rolls/master/module.json into the “Manifest URL:” window.
4.	Alternatively, search for the Package Name “Chronicler’s Modified Rolls” & click the “Install” button.
5.	Done.
### Important to note:
This was simply a module I threw together for my personal campaign, and I am not in any way overly competent in JavaScript. The module should work with any system since it hooks with the default chat log context menu & should also work with any system that works with the default dice roll structure defined by FoundryVTT.

However, since I only created this on a whim, I am not sure how often I will be able to update this module. If something in the FVTT code changes drastically, I will update my private module first but will likely port those changes over to this repository as well. If there are any questions concerning the code: I am, as mentioned, not well versed in JavaScript and as such the code might be non-optimal. I am very aware of this. But in the words of Todd Howard: “It just works.” Or at least I haven’t found any absolutely game breaking bugs. Which probably makes this a more stable release than anything Bethesda has put out, in like, ever. Yay me. And you, if you like this module.
### Properties:
This was basically a side project for me. If you want to use or modify this code for your private game, go for it. If you want to create a module that contains my code, go for it too, but please put my name somewhere in the Readme as an acknowledgement.
## Screenshots:
### The new context menu on right click (<i>only visible if user is GM and message is a roll</i>):
![Roll_Message_ContextMenu](https://user-images.githubusercontent.com/86226697/138247781-1a730272-bc1b-4e07-8b5d-0957756ca7b2.png)
### The "Modify Roll" dialog:
![ModifyRoll_Dialog](https://user-images.githubusercontent.com/86226697/138247786-27c4222c-b977-4caa-9ac1-be476edfaa8c.png)
### The roll message after applied modification:
![ModifiedRoll_Message_Result](https://user-images.githubusercontent.com/86226697/138247784-9903ca13-9145-43af-9049-a8da5e0cc368.png)
## Acknowledgements of my own:
Literally everyone who puts out modules that made it even possible for me to understand the code structure of FVTT. Includes everyone who contributed to Foundry Community Macros. 

Special mention to DragonFlagon, without DF Chat Enhancements I would never have been able to figure out the Chat Message Context Menu.

Also special mention to Sk1mble, who gave me the idea & first pieces of knowledge to create a module to change a roll message after the result is posted in chat.
