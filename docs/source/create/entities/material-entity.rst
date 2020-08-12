#####################
Add a Material Entity
#####################

You can add a material entity to an object in your domain. A material entity contains specific material data that determines the texture and shading of an object. For example, if you want to create a castle in your domain, you need your walls to look like they're made of rough gray stone. You can do this by adding a castle wall material entity to your walls.

Before adding a material entity, make sure you have created a material using the `PBR Materials Guide <../3d-models/pbr-materials-guide>`_.

.. contents:: On This Page
    :depth: 2

--------------------------
Generate a Material Entity
--------------------------

To add a material to your object in Vircadia, you need to specify the material data in a JSON file or add the material directly into the **Create** app.

.. note:: We are aware of the difficulties involved in converting your material data to a JSON file and are working on making the process easier for our users. In the meantime, we recommend embedding your material data in your models as FBX or glTF files if you are facing difficulties generating a JSON file.

This is what the JSON file for a sample `castle wall material <https://docs.vircadia.dev/_static/resources/material-entity/CastleWall.hfm.json>`_ looks like:

.. code-block:: json

   {
   "materialVersion": 1,
   "materials": [
      {
         "name": "CastleWall",
         "model": "hifi_pbr",
         "albedo": [1, 1, 1],
         "albedoMap": "https://docs.vircadia.dev/_static/resources/material-entity/CastleWall_Base_Color.png",
         "roughnessMap": "https://docs.vircadia.dev/_static/resources/material-entity/CastleWall_Roughness.png",
         "normalMap": "https://docs.vircadia.dev/_static/resources/material-entity/CastleWall_Normal.png"
      }
   ]
   }


This file contains all related material data, such as the color, roughness, and other texture and shading information. Note that you can edit this information programmatically with the `Material` `EntityType <https://apidocs.vircadia.dev/Entities.html#.EntityType>`_ in our API, and define its properties using `EntityProperties-Material <https://apidocs.vircadia.dev/Entities.html#.EntityProperties-Material>`_.

---------------------
Add a Material Entity
---------------------

_________________________________
Use the Material Entity JSON File
_________________________________

.. note:: At this time, we have no way to automatically generate a JSON file with another tool, and you will need to write your own JSON file.

Once you have your material entity JSON file, you can add it to an object in High Fidelity. Let's add the `castle wall material <https://docs.vircadia.dev/_static/resources/material-entity/CastleWall.hfm.json>`_ to a box entity in your domain.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Create a wall. Click the 'Cube' icon to add a box entity and change the dimensions to make it resemble a wall.
3. Go to the **Create** tab and click on the 'Material' icon to add a material entity. Enter the material's JSON file URL when prompted. You will see the material entity represented as a small sphere.
4. Click and select the wall. Go to the 'Properties' tab and copy the parent ID under the 'Name' box.
5. Click and select the material entity. Go to the 'Properties' tab and paste the copied parent ID in the 'Parent' box. You will see the material applied to the wall. In this step, you are parenting or applying a material to an entity.

.. video:: ../../_static/videos/material-entity.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/material-entity.mp4

__________________________
Use the materialData Field
__________________________

To add a material entity directly into the **Create** Tools app:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Create a wall. Click the 'Cube' icon to add a box entity and change the dimensions to make it resemble a wall.
3. Go to the **Create** tab and click on the 'Material' icon to add a material entity.
4. Enter `materialData` when you're prompted for a 'Material URL'.
5. Click and select the wall. Go to the 'Properties' tab and copy the parent ID under the 'Name' box.
6. Click and select the material entity. Go to the 'Properties' tab and paste the copied parent ID in the 'Parent' box. In this step, you are parenting or applying a material to an entity.
7. Scroll down to the 'Material Data' field. Click 'Clear Material Data' and then paste the following JSON data:

.. code-block:: json

   {
   "materialVersion": 1,
   "materials": [
      {
         "name": "CastleWall",
         "model": "hifi_pbr",
         "albedo": [1, 1, 1],
         "albedoMap": "https://docs.vircadia.dev/_static/resources/material-entity/CastleWall_Base_Color.png",
         "roughnessMap": "https://docs.vircadia.dev/_static/resources/material-entity/CastleWall_Roughness.png",
         "normalMap": "https://docs.vircadia.dev/_static/resources/material-entity/CastleWall_Normal.png"
      }
   ]
   }


.. video:: ../../_static/videos/material-data.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/material-data.mp4

**See Also**

+ :doc:`Create New Entities <create-entities>`
+ :doc:`PBR Materials Guide <../3d-models/pbr-materials-guide>`
+ `Introduction to JSON <https://www.w3schools.com/js/js_json_intro.asp>`_
