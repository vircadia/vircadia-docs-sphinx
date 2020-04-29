#########################
Get Your 3D Model
#########################

All 3D models should be in the OBJ or FBX format and have materials supported by Vircadia.  

.. contents:: On This Page
    :depth: 2

-------------------------------------------
Get Your 3D Model from 3D Content Stores
-------------------------------------------

There are many online 3D content websites that contain models that you can purchase or get for free. Keep the following in mind when sourcing 3D models from such sites:

+ **Check Licensing Terms:** Make sure you check a model's licensing terms before you use it. It is your responsibility to ensure that you have sufficient rights to use the content. When you make a 3D model available on your Vircadia server, visitors are getting the links to those files in the same way as they would when viewing an image on a website. You should be comfortable and have the rights to re-distribute the 3D content.
+ **Check Materials:** You might find that the model may be missing its textures. If that happens, first check to see if the textures are included. If a model loads into Vircadia and doesn't look right, you may also find error information in the Interface logs.  

---------------------------------
Create Your Own 3D Model
---------------------------------

You can create your own 3D model using 3D modeling software such as Blender or Maya. Use any software of your choice as long as:

+ The 3D model is in the OBJ or FBX format.
+ The 3D model materials are supported by High Fidelity. Use our :doc:`materials guide <pbr-materials-guide>` to make sure that your materials load correctly.

^^^^^^^^^^^^^^^^^^^^^^^^^
Best Practices
^^^^^^^^^^^^^^^^^^^^^^^^^

Making 3D models for High Fidelity (and VR) is different than making models for films, videos, and games.

+ 3D models for VR are rendered twice (for both right and left eyes): This means that the number of polygons on your model and the number of materials you use will affect your performance.
+ Most VR headsets run at 90Hz: You’ll have to keep your framerate at 90fps and be cautious about your model’s size. Models that are too big or very complex can slow down the framerate and make people feel nauseous.

We've listed the best practices for creating 3D models for Vircadia (and VR).

+------------+-------------------------------------------------------------------------------+
| Property   | Best Practice                                                                 |
+============+===============================================================================+
| Polycount  | Your count should resemble that of a model for a tablet game, not too high,   |
|            | but not too low either.                                                       |
+------------+-------------------------------------------------------------------------------+
| Edge Loops | Remove edge loops that are not needed.                                        |
+------------+-------------------------------------------------------------------------------+
| Mesh       | Clean the mesh to make sure there are no N-gons and no coplanar faces.        |
+------------+-------------------------------------------------------------------------------+
| Materials  | Always try to create Atlas maps. When every piece of your content shares the  |
|            | same material and UV space, it is an Atlas map. For example, if you create a  |
|            | robot, all its pieces should share one UV map, instead of giving its hands,   |
|            | feet, or face separate materials and UV maps.                                 |
+------------+-------------------------------------------------------------------------------+
| Materials  | High Fidelity’s engine only supports one UV mapping per material.             |
+------------+-------------------------------------------------------------------------------+
| Textures   | PNG, JPEG and JPG files are recommended, but we also support TGA, TIF and     |
|            | TIFF formats.                                                                 |
+------------+-------------------------------------------------------------------------------+
| Textures   | Choose the color types wisely to minimize the size of the final file.         |
+------------+-------------------------------------------------------------------------------+
| Textures   | PNG-8 has only ON/OFF transparency, has a palette of colors (256 colors,      |
|            | like GIF), and can be used to mask transparency.                              |
+------------+-------------------------------------------------------------------------------+
| Textures   | For more color resolution, you can use PNG-24. For translucent mask or        |
|            | transparent textures, use PNG-32.                                             |
+------------+-------------------------------------------------------------------------------+
| Textures   | Do not use PNG-48 or PNG-64, as neither are supported by High Fidelity.       |
+------------+-------------------------------------------------------------------------------+
| Textures   | When loaded in the engine, textures are automatically resized to a grid       |
|            | of 128x128. Pick sizes which are multiples of 128.                            |
+------------+-------------------------------------------------------------------------------+
| Draw Calls | Draw calls happen before something gets rendered on screen.                   |
|            |                                                                               |
|            | ``1 model w/ 1 material = 1 draw call``                                       |
|            |                                                                               |
|            | There are no definitive measures for a desirable polycount. You need to       |
|            | balance between draw calls and polys. Fewer draw calls means more room for    |
|            | polys. Smaller textures means more room for higher poly models.               |
+------------+-------------------------------------------------------------------------------+

