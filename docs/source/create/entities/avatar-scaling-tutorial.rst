#########################################
Tutorial: Create an Avatar Scaling Button
#########################################

You can build content in Vircadia that breaks the laws of physical boundaries by making them oversized or extremely small. To give any visiting users access to such an experience, you can add an avatar scaling button to your domain. This will help users fit into the spaces you design.

.. contents:: On This Page
    :depth: 2

-------------
Prerequisites
-------------

Consider getting familiar with the following concepts before starting this tutorial:

- `Create New Entities <create-entities>`_
- `Change How Entities Look <entity-appearance>`_
- `Define an Entity's Behavior <entity-behavior>`_
- `Get Started with Scripting <../../script/get-started-with-scripting>`_
- `Client Entity Scripts <../../script/client-entity-scripts>`_
- `Write Your Own Scripts <../../script/write-scripts>`_

---------------------------------
Write an Avatar Scaling Script
---------------------------------

To define the behavior of your avatar and the button, you need to write a client entity script that:

+ attaches to an entity (a button in your domain).
+ shrinks or increases the size of an avatar.
+ defines what happens when a user clicks on or triggers the entity.

In this tutorial, we've used `shrink-avatar.js <../../_static/resources/entities/entity-client-script-shrink-avatar.js>`_, an avatar scaling script used to shrink an avatar down to a tiny size. You can use this script, modify it, or `write your own <../../script/write-scripts>`_ to suit your needs.

The shrink-avatar.js uses Vircadia's `JavaScript API <https://apidocs.vircadia.dev>`_ to determine when a user clicks with the mouse or triggers the entity with their hand controllers. It then scales the avatar to one-tenth its original size.

-----------------------------------
Create an Entity to Use as a Button
-----------------------------------

The entity you create for your button has to be `triggerable <entity-behavior.html#set-an-entity-to-trigger-scripts>`_ so that the script can detect when you trigger or push the button with your hand controllers.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. `Create an entity <create-entities>`_ to be used as a button. This can be a 3D model, cube, or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Next to 'Script', paste the script URL. In this case, it is '`shrink-avatar.js <../../_static/resources/entities/entity-client-script-shrink-avatar.js>`_'.
5. Ensure that 'Triggerable' is selected.
6. After you exit the **Create** app, test your script by clicking or triggering the button to observe your avatar scale down.

.. video:: ../../_static/videos/shrink-avatar.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/shrink-avatar.mp4



**See Also**

+ :doc:`Create New Entities <create-entities>`
+ :doc:`Change How Entities Look <entity-appearance>`
+ :doc:`Define an Entity's Behavior <entity-behavior>`
+ :doc:`Get Started with Scripting <../../script/get-started-with-scripting>`
+ :doc:`Client Entity Scripts <../../script/client-entity-scripts>`
+ :doc:`Write Your Own Scripts <../../script/write-scripts>`
+ :doc:`Interact with Your Environment <../../explore/interact>`
