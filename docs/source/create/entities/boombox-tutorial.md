# Tutorial: Create a Boombox

You can create a music player that plays all your favorite tracks and also syncs the audio for other users in your domain. 

**On This Page:**
- [Prerequisites](#prerequisites)
- [Create a Boombox Entity](#create-a-boombox-entity)
- [Add User Data to Your Boombox](#add-user-data-to-your-boombox)
- [Write Music Player Scripts](#write-music-player-scripts)


## Prerequisites

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)


## Create a Boombox Entity

Your BoomBox will consist of:
+ A boombox base model: A model entity that runs an entity server script.
+ An 'ON/OFF' button: A child entity runs a client entity script to allow users to interact with the boombox. 

The boombox will start playing when users click or trigger the ON/OFF button.

To create a boombox:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Use the **Create** Tools app to [import the 3D model entity](../3d-models/import-model.html). You can create your own 3D model for the boombox base or [use one we've created](https://github.com/misslivirose/happy-boombox/blob/master/BoomBox.fbx).
3. Next, [create the button entity](create-entities.html) that users will interact with. This can be a cube entity.
4. Go to 'Properties' tab for the button entity. Change the 'Shape' property from 'Box' to 'Octagon' or 'Cylinder' depending on your aesthetic preferences.
5. Scroll down to the 'Behavior' section and ensure that 'Grabbable' and 'Triggerable' are checked. 
6. Scale, rotate, and move your button to align it to the desired position on the model. 
![](_images/boombox.PNG)
7. With the **Create** Tools app open, select the 3D model of the boombox. Go to the 'Properties' tab and copy the 'ID' under 'Name'.
8. Select the cube entity you created, go to the 'Properties' tab, and paste the copied entity ID in the 'Parent' field. This makes your boombox model entity the parent of your button entity.


## Add User Data to Your Boombox

The User Data property is a JSON object that can be customized to fit the needs of a script. User Data also helps in synchronizing and keeping variables the same for all users in a domain. In this case, User Data will contain:

+ Song List: All URLS of the songs you want played on your boombox. You can also use MP3 or WAV files stored on your local machine.
+ Music player volume information: You can change this as per your preference.


<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>User Data can store information only up to a certain size. We recommend keeping the limit of 10 songs. We support the following formats:
    	<ul>
    		<li>WAV: 16-bit uncompressed WAV at any sample rate, with 1 (mono), 2(stereo), or 4 (ambisonic) channels.</li>
    		<li>MP3: Mono or stereo, at any sample rate.</li>
    		<li>RAW: 48khz 16-bit mono or stereo. Filename must include ".stereo" to be interpreted as stereo.</li>
    	</ul></p>
</div>


To add User Data to your boombox:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Select your boombox entity, not the button. 
3. Go to the 'Properties' tab. Scroll down to 'User Data' and paste the following JSON information. This JSON data consists of 10 songs and the volume setting. You can use your own songs and change the volume setting 

```json
{
  "grabbableKey": {
	"grabbable": false
  },
  "music": {
	"All That": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-allthat.mp3",
	"Country Boy": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-countryboy.mp3",
	"Cute": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-cute.mp3",
	"Happiness": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-happiness.mp3",
	"Happy Rock": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-happyrock.mp3",
	"High Octane": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-highoctane.mp3",
	"Hip Jazz": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-hipjazz.mp3",
	"Pop Dance": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-popdance.mp3",
	"Sci-Fi": "https://hifi-content.s3-us-west-1.amazonaws.com/liv/dev/BoomBox/music/bensound-scifi.mp3",
	"Sample": "sample.com"
  },
  "volume": 0.7
}
```


## Write Music Player Scripts

The boombox system contains the following scripts and files that allows a user to control audio playback:

<table>
  <tr>
    <th>File</th>
    <th>Description</th>
    <th>URL</th>
  </tr>
  <tr>
    <td>Entity Server Script</td>
    <td>This server script handles the state of the music player and plays audio back<br> so that it is synchronized across all users. Actions and behaviors of entities<br> that need to be in the same state for all users, should run on the server. The<br> client script that runs on the button relays the requests for each remotely<br> callable function to execute on the server, and the server script handles the<br> audio playback accordingly.</td>
    <td><a href="https://raw.githubusercontent.com/misslivirose/happy-boombox/master/boomBoxEntityServerScript.js">boomBoxEntityServerScript.js</a></td>
  </tr>
  <tr>
    <td>Client Entity Script</td>
    <td>This client script handles the interactions between users and displays the UI <br>for controlling the boombox via an HTML page using the Tablet Scripting <br>Interface. It listens for mouse clicks and controller triggers, displays the<br> controls, and serves as a relay mechanic between the HTML page and the boombox<br> entity server script.</td>
    <td><a href="https://raw.githubusercontent.com/misslivirose/happy-boombox/master/boomBoxEntityScript.js">boomBoxEntityScript.js</a></td>
  </tr>
  <tr>
    <td>An HTML page and CSS Style Sheet</td>
    <td>This HTML page displays the controller UI for the boombox through the Tablet<br> Scripting Interface and is styled with CSS. It uses the `EventBridge` to send<br> the user input from the HTML elements to the boombox entity script, which in<br> turns calls entity server methods depending on the `EventBridge` message contents.</td>
    <td><a href="https://raw.githubusercontent.com/misslivirose/happy-boombox/master/app/boomBoxController.html">boomBoxController.html</a><br><a href="https://raw.githubusercontent.com/misslivirose/happy-boombox/master/app/styles.css">styles.css</a></td>
  </tr>
</table><br>

You can use the existing versions of our scripts, modify them, or [write your own scripts](../../script/write-scripts).

If you're using the existing versions of our scripts:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Select your boombox model and go to the 'Properties' tab. 
3. Scroll down to the 'Behavior' section and paste the [entity server script's URL](https://raw.githubusercontent.com/misslivirose/happy-boombox/master/boomBoxEntityServerScript.js) into the 'Server Script' field. 
4. Select your button entity and go to the 'Properties' tab. 
5. Scroll down to the 'Behavior' section and paste the [client entity script's URL](https://raw.githubusercontent.com/misslivirose/happy-boombox/master/boomBoxEntityScript.js) into the 'Script' field. 

If you're writing your own scripts or modifying the existing ones, and want to host these in the 'Asset Browser':

1. On your computer, create a folder called 'BoomBox'. You'll save your files here with the following structure. 
![](_images/boombox-folder.PNG)
2. Save the [entity server script](https://raw.githubusercontent.com/misslivirose/happy-boombox/master/boomBoxEntityServerScript.js), [client entity script](https://raw.githubusercontent.com/misslivirose/happy-boombox/master/boomBoxEntityScript.js), [HTML file](https://raw.githubusercontent.com/misslivirose/happy-boombox/master/app/boomBoxController.html), and [CSS file](https://raw.githubusercontent.com/misslivirose/happy-boombox/master/app/styles.css) to the folder in your computer.
3. In Interface, pull up your HUD or Tablet and go to **Create**.
4. In the **Create** Tools app, click 'Open This Domain's Asset Server' to view the Asset Browser.
5. Create the same boombox directory in your 'Asset Browser' and upload your files.
6. Use the **Create** app and select your boombox model and go to the 'Properties' tab. 
7. Scroll down to the 'Behavior' section and paste the entity server script's URL into the 'Server Script' field. 
8. Use the **Create** app and select your button entity and go to the 'Properties' tab. 
9. Scroll down to the 'Behavior' section and paste the client entity script's URL into the 'Script' field. 



<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p> Some additional notes:</p>
    <ul>
      <li>The scripts linked above use relative paths to link to one another, so it’s important to preserve the folder structure given. If you want to move things around, make sure you also update the links in the scripts themselves to reference the new file location. </li>
      <li>If you want to make modifications to your script files, you will need to re-upload them to the asset browser. Reload all content and reload your entity server scripts to see changes take effect after modifying files.</li>
      <li>Entity server scripts do not have access to mouse press or controller events, since these are all handled on the client side.</li>
      <li>HTML pages will not render in the Oculus Quest, so only desktop users will be able to interact with the boombox controls.</li>
    </ul>
</div>


**See Also**

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)
- [Interact with Your Environment](../../explore/interact.html)