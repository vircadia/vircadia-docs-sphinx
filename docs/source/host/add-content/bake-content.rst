#############################
Bake Your Content 
#############################

Most content (avatars, entities, etc) in High Fidelity references external resources such as textures, models, scripts, and materials. When a user encounters any content in the domain, they need to download the content's resources. Many of these resources are not optimized and can take a while to download. *Baking* is the process of optimizing these resources to make them easier to transmit, store, and render, reducing load time significantly. 

.. contents:: On This Page
    :depth: 2

---------------------
The Oven
---------------------

The Oven is a standalone application that is packaged as part of High Fidelity `Client + Sandbox <https://www.highfidelity.com/download#sandbox>`_ installer. Once installed, locate ``oven.exe`` (Windows) or ``oven.app`` (Mac).

With the oven, you can bake the following types of content: 

+-----------+--------------------------------------------------------------------------------------------------------------+
| Type      | Description                                                                                                  |
+===========+==============================================================================================================+
| Textures  | When you bake a texture, the resulting folder will contain a .texmeta.json file, various                     |
|           | .ktx images, and the original texture. Baking might introduce some compression artifacts, but                |
|           | these are usually minor. Baking a texture produces mipmaps, which allow you to progressively                 |
|           | load textures, and compresses the results. Baking large textures like skyboxes can take a while,             |
|           | but the benefits at runtime for everyone loading the skybox image will be significant. For the best          |
|           | experience, we recommend using PNG or JPEG (JPG) textures. However, we also support textures in following    |
|           | formats: TGA, TIF, and TIFF.                                                                                 |
+-----------+--------------------------------------------------------------------------------------------------------------+
| Materials | Baking a material will produce a .baked.json file and will also bake all of the textures in the              |
|           | material. Currently, we only support baking a `material entity JSON file <../../create/entities/mate         |
|           | rial-entity.html#generate-a-material-entity>`_.                                                              |
+-----------+--------------------------------------------------------------------------------------------------------------+
| 3D Models | Baking a model will produce a `Draco compressed <https://github.com/google/draco>`_ geometric mesh           |
|           | and will also bake all of the materials in the model. The mesh compression can slightly alter the            |
|           | geometry of the original model, but it is usually minor. Your output folder will contain a .baked.fst file,  |
|           | a .baked.fbx file (the original format of your model can be different), and a .baked.json file (materials).  |
|           | Because the baked materials JSON file references the baked texture files, all textures are removed from the  |
|           | .baked.fbx file. This JSON file is referenced in the `materialMap` field in the .baked.fst file. We support  |
|           | the following formats: FBX, OBJ, and FST (that points to a supported type).                                  |
+-----------+--------------------------------------------------------------------------------------------------------------+
| Avatars   | As avatars are 3D models, you can bake avatars with the same results as above. Use the resulting .baked.fst  |
|           | file to `host and wear your baked avatar <../../create/avatars/package-avatar.html#host-your-avatar>`_.      |
+-----------+--------------------------------------------------------------------------------------------------------------+

The Oven has two different interfaces: an application and a command line interface. Use the one that best fits your needs.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using the Oven Application
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Oven application has three baking options:

* Bake all assets in your domain
* Bake individual 3D models and avatars
* Bake skybox files

After you choose what you would like to bake, you'll need to fill in some information: 

+----------------+----------------+------------------------------------------------------------+
| Field          | Baking Option  | Description                                                |
|                |                |                                                            |
+================+================+============================================================+
| Domain Name    | Domain         | Enter your domain's name.                                  |
|                |                |                                                            |
+----------------+----------------+------------------------------------------------------------+
| Entities File  | Domain         | Upload a .json or .json.gz of the assets in your           |
|                |                | domain. This can be done by `exporting your content        |
|                |                | to JSON <export-content.html#export-entities-to-json>`_.   |
+----------------+----------------+------------------------------------------------------------+
| Model File(s)  | Model          | Enter the file or URL path for your model file(s).         |
|                |                |                                                            |
+----------------+----------------+------------------------------------------------------------+
| Skybox File(s) | Skybox         | Enter the file or URL path for your skybox file(s).        |
|                |                |                                                            |
+----------------+----------------+------------------------------------------------------------+
| Output         | Domain, Model, | This is where the baked content will be saved.             |
| Directory      | Skybox         |                                                            |
+----------------+----------------+------------------------------------------------------------+
| Destination    | Domain         | Enter the absolute paths of where your resources will      |
| URL Path       |                | be uploaded after baking. For example, if you store        |
|                |                | custom 3D models on a cloud hosting service, enter         |
|                |                | that URL here.                                             |
+----------------+----------------+------------------------------------------------------------+
| Re-bake        | Domain         | Check if you want to re-bake any baked content that        |
| Originals      |                | the oven finds in your content archive.                    |
+----------------+----------------+------------------------------------------------------------+

.. note:: After baking a domain, don't forget to upload all baked content (3D models, skyboxes, etc.) to the URL specified for 'Destination URL Path'. This ensures that all content will load correctly when you :doc:`upload the baked content set <upload-content>` to your domain.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using the Commmand Line Interface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can also use a command line interface instead of the GUI to bake single assets (not domains). We support the following attributes:

+ i: Path to file that you would like to bake.
+ o: Path to folder that will be used as the output directory.
+ t: Type of asset. The value can be "model" (for any model type) and "material" (for a material JSON description). For textures, the values differ based on the type of texture you want to bake, such as default, strict, albedo, normal, bump, specular, metallic, roughness, gloss, emissive, cube (same as skybox), skybox, ambient, occlusion, scattering, and lightmap.
+ disable-texture-compression: Disables texture compression for any type. Use this only if the texture compression is introducing too many artifacts.

To bake a 3D model through the Oven's command line interface::

    >> oven.exe -i %path to model% -o %output directory% -t model


To bake a material through the Oven's command line interface::

    >> oven.exe -i %path to material json% -o %output directory% -t material


