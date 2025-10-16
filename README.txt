+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+ +-+-+-+-+                      
|L|e|x|i|c|a|l| |D|e|c|i|s|i|o|n|s| |T|a|s|k|                      
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+-+
|B|e|k| |N|.|I|.| |H|a|r|d|y|,| |D|w|i|g|h|t| |J|.| |K|r|a|v|i|t|z|
+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+-+
|(|2|0|2|5|)|                                                      
+-+-+-+-+-+-+                                                      

//////////////////////////
//+-+-+-+-+ +-+-+-+-+-+ //
//|R|E|A|D| |F|I|R|S|T| //
//+-+-+-+-+ +-+-+-+-+-+ //
//////////////////////////
Available for use is an Amazon Machine Image (AMI) which contains this experiment fully 
set up. AMIs allow you to access this experiment and immediately run it yourself with minimal
set up. To do this, you utilize an Amazon Elastic Compute Cloud (EC2) instance. 

The AMI of the experiment used for the OSF pregistration (osf.io/me48u) is: ami-02a23130aab62d57d
  _   _   _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ / \ / \ 
( O | v | e | r | v | i | e | w )
 \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ 

This folder contains the script for a Lexical Decisions Task using jsPsych version 7.
There is a total of 72 pairs, or 144 individual words/trials
There are 8 possible conditions for a single pair of words to appear in. They are:
EVALUATED - SUP->SUB (Superordinate -> Subordinate word) - COLOR->BLUE
EVALUATED - SUB->SUP (Subordinate -> Superordinate word) - BLUE->COLOR
CONTROL - PSUP->SUB (Pseudosuperordinate -> Subordinate word) - ORLOC->BLUE
CONTROL - SUP->PSUB (Superordinate -> Pseudosubordinate word) - COLOR->UBLE
CONTROL - SUB->PSUP (Subordinate -> Pseudosuperordinate) - BLUE->ORLOC
CONTROL - PSUB->SUP (Pseudosubordinate -> Superordinate) - UBLE->COLOR
CONTROL - PSUP->PSUB (Pseudosuperordinate -> Pseudosubordinate) - ORLOC->UBLE
CONTROL - PSUB->PSUP (Pseudosubordinate -> Pseudosuperordinate) - UBLE->ORLOC
A single pair can appear in 72 possible orders, but only in one condition per participant. 
Therefore, this is a fully counterbalanced set of the 576 possible orders. 

There are 12 catch trials, intended to catch bots and AI.
These catch trials are words or pseudowords as images. A bot or artificial should perform at chance with these trials.
2 catch trials are presented in the practice trials.
10 catch trials are presented in the experimental trials.
Catch trials never interrupt a pair.

  _   _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ / \ 
( j | s | P | s | y | c | h )
 \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
 As stated previously, this experiment uses the 7th version of jsPsych.
 It uses the:
 jsPsych library (jspsych.js)
 jsPsych button reponse plugin (plugin-html-button-response.js)
 jsPsych keyboard response plugin (plugin-html-keyboard-response.js)
 jsPsych preload plugin (plugin-preload.js)
 and the jsPsych survey plugins (plugin-survey-html-form.js, plugin-survey.js)

 I am however incredibly thankful to the core team of jsPsych.
 They are Josh de Leeuw of Vassar College, Becky Gilbert of MIT, and Björn Luchterhandt of Paderborn University. 


  _   _   _   _   _   _   _   _     _   _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ 
( r | e | n | a | m | i | n | g ) ( o | u | t | p | u | t | s )
 \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ 

If you prefer another data cleaning logic, you can use non-experimental documentation/RenamingScript.ipynb.
This is just the renaming portion of the script without the additional contents.

  _   _   _   _   _  
 / \ / \ / \ / \ / \ 
( S | p | a | C | y )
 \_/ \_/ \_/ \_/ \_/ 

This is in reference to non-experimental documentation/SpacySimNeigh.ipynb. 

This notebook provides all of the methodology for how we determined semantic similarity and semantic neighborhood density.

Once we found the nearest 50 neighbors that would not be excluded, we determined the similarity scores by creating a matrix.
We then found the mean and standard deviation of these similarity scores.
This gave us our overall semantic neighborhood density for each word. 
This can be found in non-experimental documentation/semantic neighborhood data/SemanticNeighborhood data.xlsx 
You can find each words list of neighbors at non-experimental documentation/semantic neighborhood data/sub and non-experimental documentation/semantic neighborhood data/sup

  _   _   _   _   _  
 / \ / \ / \ / \ / \ 
( U | s | a | g | e )
 \_/ \_/ \_/ \_/ \_/ 

To post the experiment on Prolific, you must first retain non-IP links. To do this, I use the ShortLink.ipynb file.
 You can change the words that are presented easily by simply changing them in the javascript files located at order#{letter}/order#{letter}_script.js. 
 Similarly, to change the order, just reorder the timeline found in order#{letter}/order#{letter}.html

  _   _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ / \ 
( c | o | n | t | a | c | t )
 \_/ \_/ \_/ \_/ \_/ \_/ \_/ 

If you've made it this far and have questions, or you want to hear me ramble on some more, you can contact me via 
Github @bekhardy or 
Email rebekahhardy@gwu.edu
