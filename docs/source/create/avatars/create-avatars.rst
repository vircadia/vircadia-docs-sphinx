##############################
Create Your Own Avatar
##############################

There are two ways to create your own avatar: you can either create your own from scratch using 3D modeling tools such as Adobe Fuse, Mixamo, and Blender, or you can download an existing avatar from external sources such as TurboSquid or CGTrader. 

.. note:: If you get an avatar from an external source such as TurboSquid or CGTrader, it is likely that the skeleton does not match our :doc:`avatar standards <avatar-standards>`. To use these avatars with High Fidelity, use the `High Fidelity Avatar Exporter for Unity <find-avatars.html#high-fidelity-avatar-exporter-for-unity>`_ to correctly map the skeleton and package your avatar. 

If you want to create an avatar from scratch, this page covers the steps needed to create, rig, and package your avatar. 

.. contents:: On This Page
    :depth: 2

**In This Section**

.. toctree::
    :maxdepth: 2
    :titlesonly:

    Avatar Standards Guide <avatar-standards>

-------------------------------------
Create an Avatar from Scratch
-------------------------------------

The steps involved in creating your avatar are:

1. Create an avatar with 3D character modeling tool such as Adobe Fuse, Blender or Maya. 
2. Rig and animate your avatar with an animation tool such as Mixamo.
3. Fine tune your avatar using a tool such as Blender or Maya.
4. Package the model in High Fidelity for use as an avatar.  

.. note:: If you intend to upload and sell your avatar to the Marketplace, you need to set your base material color to white (some apps default to grey). This ensures that the avatar renders correctly for all users and that it will be accepted into our Marketplace.

Check out this YouTube playlist for one way to create and customize your own avatar. Here, we use Adobe Fuse to create our avatar, Mixamo to rig our avatar automatically, and Blender to adjust the rendering on our avatar. We also have written instructions on the same process: 

* :doc:`Create an Avatar with Fuse <fuse-tutorial>`
* :doc:`Rig Your Avatar in Mixamo <mixamo-tutorial>`
* :doc:`Modify Materials and Textures with Blender <blender-tutorial>`

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe src="https://www.youtube.com/embed/6NfiH4rdVRM" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 100px; width: 70%; height: 70%;"></iframe>
    </div>

-------------------------------
Community Tools for Avatars
-------------------------------

As you're creating your avatar, remember that High Fidelity is an open-source project. Many of our community members have created plug-ins, add-ons, toolkits, skeletons and more to help you create content, including avatars. Here are a few for you to play around with.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`Blender Add-on by Menithal <https://github.com/Menithal/Blender-Hifi-Addon>`_
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Plugin ("Project Hermes") is a plugin for Blender to allow for easier content creation and importing for the High Fidelity Metaverse Platform. It features: 

- **Material Tools**: Allows for easier pipeline to apply materials to objects so that they are ready to use in High Fidelity.
- **Armature Tools**: Adds a skeleton that is compatible with High Fidelity and let you configure bone names for use in advanced scripts.
- **Avatar Converters**: Translates and fixes models and materials from MMD and Mixamo so that they work in High Fidelity.
- **Export Tools**: Exports avatars and scenes so that they can be used in High Fidelity.
- **Import Tools**: Imports primitive entities from High Fidelity so that you can make modifications to them.

Install it here: `https://github.com/Menithal/Blender-Hifi-Addon <https://github.com/Menithal/Blender-Hifi-Addon>`_

Have a project you've been working on that you'd like us to share? Let us know by editing this page in GitHub! 


**See Also**

+ :doc:`Find and Use an Existing Avatar <find-avatars>`
+ :doc:`Package and Host Your Avatar <package-avatar>`