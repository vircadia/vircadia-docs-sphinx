# Interface Scripts

Interface scripts run on your local machine, as long as you have Interface up and running. Each user has full control over when interface scripts are started and stopped. The results (such as when your script changes the color of a box) can be seen by everyone in your domain, but the script itself is running on your local machine. Your Interface will communicate that information to the Entity Server, which will communicate it to whoever is visiting the domain. 

With interface scripts, you can do things like add new menus to the Interface, add plug-ins, or add 3D overlays that you have control over.

**On This Page**
* [Load an Interface Script](#load-an-interface-script)
* [Example of an Interface Script](#example-of-an-interface-script)

## Load an Interface Script

To load and run an interface script: 
1. In Interface, go to **Edit > Running Scripts** or press <kbd class="keyboard">Ctrl</kbd> + <kbd class="keyboard">J</kbd> on your keyboard.
2. For scripts hosted in the cloud, click 'From URL'. Enter the URL of your script file and click 'OK'.
3. For scripts on your local computer, click 'From Disk'. Browse to your script file and click 'Open'.

## Example of an Interface Script

The following script automatically enters a first person perspective when you enter VR mode with a HMD.

```javascript
(function() { 

// Automatically enter first person mode when entering HMD mode
HMD.displayModeChanged.connect(function(isHMDMode) {
    if (isHMDMode) {
        Camera.setModeString("first person");
    }
});

}());
```



**See Also**

+ [Get Started with Scripting](get-started-with-scripting)
+ [Write Your Own Scripts](write-scripts)
