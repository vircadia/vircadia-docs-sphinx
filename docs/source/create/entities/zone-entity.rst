##########################
Add a Zone Entity
##########################

A zone entity allows you to set properties to a specific area. These properties include: flying, ghosting, key lighting, skybox, ambient lighting, hase, bloom and avatar priorities.

.. contents:: On This Page
    :depth: 2

-----------------------
Explanation of Properties
-----------------------

The amount of properties might seem intimidating at first. They all serve their own goals and have reason to exist:

+------------------------+---------------------------------------------------------------------------------------------+
| Property               | Description                                                                                 |
+========================+=============================================================================================+
| Flying Allowed         | Enables or disables flying for people inside the zone. This makes sense for gamemodes, or   |
|                        | if you just don't want people to break your immersion.                                      |
+------------------------+---------------------------------------------------------------------------------------------+
| Ghosting Allowed       | Enables or disables the ability to phase through colliders by disabling the enviroment      |
|                        | collisions. Useful for making labyrinths for example.                                       |
+------------------------+---------------------------------------------------------------------------------------------+
| Filter                 | Used to run scripts.                                                                        | What does it do and what would you use it for?
+------------------------+---------------------------------------------------------------------------------------------+
| Key Light              | Enabling this allows you to set a directional light, e.g. a sun, for the entire zone.       |
+------------------------+---------------------------------------------------------------------------------------------+
| Skybox                 | This allowed you to set a so called "Skybox". This is commonly used to apply a sky texture  |
|                        | the zone.                                                                                   |
+------------------------+---------------------------------------------------------------------------------------------+
| Ambient Light          | This is used to apply light coming from the Skybox. An example usecase for this would be to |
|                        | have a sun that is on the Skyboxs texture actually emit light.                              |
+------------------------+---------------------------------------------------------------------------------------------+
| Haze                   | ?????????                                                                                   | What is haze?
+------------------------+---------------------------------------------------------------------------------------------+
| Bloom                  | This enables a visual effect known as "Bloom". A slight Bloom effect could be used to make  |
|                        | zones appear bright.                                                                        |
+------------------------+---------------------------------------------------------------------------------------------+
| Avatar Priority        | This property changes the update priority of avatar movements. It is commonly used on live  | Does it only prioritize movement information, or also the loading of the model and audio output?
|                        | events to have                                                                              |
|                        | entertainers avatars' movements still be smooth, even with a huge crowd also being updated. |
+------------------------+---------------------------------------------------------------------------------------------+


**See Also**

+ :doc:`Create New Entites <create-entities>`
+ `The Create App <../tools.html#the-create-app>`_
+ :doc:`Define an Entity's Behavior <entity-behavior>`
+ :doc:`Change How Entities Look <entity-appearance>`
