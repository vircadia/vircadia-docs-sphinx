# Tutorial: Create an Avatar Scaling Button

You can build content in High Fidelity that breaks the laws of physical boundaries by making them oversized or extremely small. To give any visiting users access to such an experience, you can add an avatar scaling button to your domain. This will help users fit into the spaces you design.

**On This Page:**

- [Prerequisites](#prerequisites)
- [Write an Avatar Scaling Script](#write-an-avatar-scaling-script)
- [Create an Entity to Use as a Button](#create-an-entity-to-use-as-a-button)


## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)

## Write an Avatar Scaling Script

To define the behavior of your avatar and the button, you need to write a client entity script that:

+ attaches to an entity (a button in your domain).
+ shrinks or increases the size of an avatar.  
+ defines what happens when a user clicks on or triggers the entity. 

In this tutorial, we've used [shrink-avatar.js](https://hifi-scripting-101.glitch.me/entity-client-script-shrink-avatar.js), an avatar scaling script used to shrink an avatar down to a tiny size. You can use this script, modify it, or [write your own](../../script/write-scripts) to suit your needs.

The shrink-avatar.js uses High Fidelity's [JavaScript API](https://apidocs.highfidelity.com) to determine when a user clicks with the mouse or triggers the entity with their hand controllers. It then scales the avatar to one-tenth its original size.

## Create an Entity to Use as a Button

The entity you create for your button has to be [triggerable](entity-behavior.html#set-an-entity-to-trigger-scripts) so that the script can detect when you trigger or push the button with your hand controllers.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](create-entities.html) to be used as a button. This can be a 3D model, cube, or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Next to 'Script', paste the script URL. In this case, it is '[shrink-avatar.js](https://hifi-scripting-101.glitch.me/entity-client-script-shrink-avatar.js)'.
5. Ensure that 'Triggerable' is selected.
6. After you exit the **Create** app, test your script by clicking or triggering the button to observe your avatar scale down.

![](_images/shrink-avatar.GIF)

**See Also**

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)
- [Interact with Your Environment](../../explore/interact.html)