# Client Entity Scripts

You can make content in High Fidelity interactive by attaching scripts to entities. *Client entity scripts* are entity scripts that run locally on each user's computer. When a user comes into contact with the entity, it will "preload" (or run) the script, then "unload" (or stop) the script when the user leaves. 

There can be (and typically are) multiple entities in a domain, and each one can have a different client entity script associated with it. 

**On This Page**
* [Attach a Client Entity Script to an Entity](#attach-a-client-entity-script-to-an-entity)
* [Example of a Client Entity Script](#example-of-a-client-entity-script)

## Attach a Client Entity Script to an Entity
To attach a client entity script to an entity: 
1. In Interface, pull up your tablet or HUD and go to **Create**.
2. Select the entity you'd like to script by either clicking on it in Interface or finding it in the 'Entity List'.
3. In the **Create** app, go to the 'Properties' tab and scroll down to the 'Behavior' section. 
4. For Script, enter the URL to your client entity script. 

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>For client entity scripts, the URL content must be available to every user who visits the domain. This means the URL should be a public http(s) URL, or an Asset Server (ATP) URL for the domain. It cannot be a file URL. The script property also accepts a string as input, allowing you to insert the code directly.  </p>
</div>

## Example of a Client Entity Script
The following script changes the color of a non-model entity (such as a box or a sphere) when you click on it: 

```javascript
(function () {
    var clicked = false;
    this.clickDownOnEntity = function (entityID, mouseEvent) {
        if (clicked){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            clicked = false;
        } else {
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            clicked = true;
        }
    };
})

```

This example is written as a JavaScript class prototype function, and it uses the mouse event [clickDownOnEntity()](https://apidocs.highfidelity.com/Entities.html#.sendClickDownOnEntity). When the user clicks on an entity, `clickDownOnEntity()` triggers the function associated with that click event. In this case, it changes the entity's color back and forth between yellow and magenta.

**See Also**

- [Get Started with Scripting](get-started-with-scripting)
- [Write Your Own Scripts](write-scripts)
- [API Reference](https://apidocs.highfidelity.com)