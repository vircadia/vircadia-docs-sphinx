##################################
Package and Host Your Avatar
##################################

In order to use your avatar in High Fidelity, you must create an FST file and host it in a place that is publicly accessible to High Fidelity. The *FST file* includes information about the skeleton, blendshapes, FBX file and textures used by an avatar, and the process of creating an FST file is called *packaging your avatar*.

.. contents:: On This Page
    :depth: 2

---------------------------
Package Your Avatar
---------------------------

When you wear an avatar, there are many factors that defines how it appears and behaves. These properties are defined in an FST file, which includes information about the skeleton, blendshapes, FBX file and textures used by an avatar. In order to work correctly, you *must* accompany your avatar files with an FST file.

To create an FST file, you will need to package your avatar. We provide two methods of doing this: either through Unity or through the Avatar Packager. 

^^^^^^^^^^^^^^^^^^^^^^^^^^
Avatar Packager
^^^^^^^^^^^^^^^^^^^^^^^^^^

The **Avatar Packager** is a tool in Interface that is designed to create an FST file automatically for you. Optionally, you can also use the Avatar Packager to upload your avatar to the Marketplace and host it on our servers. 

To package your avatar using the Avatar Packager:

1. In Interface, go to **Edit > Avatar Packager**. 
2. In the Avatar Packager window that opens, click 'New Project'.
3. In the Create Project window, fill in the following details:

   * Name: The name you want for your avatar. 
   * Project Location: The folder path where your avatar's files are stored. The Avatar Packager will create a new folder for your project at this location, which will include your FBX model, an FST file, and any scripts/textures in your avatar.
   * Avatar Model: Your avatar's FBX file.
   * Texture Folder: If your avatar has textures in a separate folder, specify the folder location. If your avatar's textures are embedded in the FBX, you do not need to specify anything. 
4. Click 'Create'.

At this point, you have successfully packaged your avatar. If you host your avatar on the cloud with your own servers, you can close the Avatar Packager here and upload your FST file and FBX model to your cloud location. 

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
High Fidelity Avatar Exporter for Unity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In some cases, you will want to download an avatar from an external website and use that avatar in High Fidelity. The High Fidelity Avatar Exporter for Unity (also known as the "avatar exporter") converts human-like avatars and packages them for use in High Fidelity. 

---------------------------
Host Your Avatar
---------------------------

Before you can use a custom avatar, you must first host its FST and FBX files in a place that is publicly accessible to High Fidelity. We recommend hosting them on our own servers using the **Avatar Packager**, but you can also use any cloud platform including Amazon S3, Google Cloud Storage, Microsoft Azure, Dropbox, etc.

If you want to upload it to High Fidelity's servers or sell your avatar on the Marketplace, use the Avatar Packager:

1. If this is a new avatar, first use the `Avatar Packager`_ to create an FST file. When you proceed with Step 3 below, you will upload this new project to our servers.
2. If you want to host an avatar that has already been packaged: 

    1. In Interface, go to **Edit > Avatar Packager**. 
    2. In the Avatar Packager window that opens, click 'Open Project'.
    3. Navigate to your FST file and click 'Open'.
3. Click 'Upload' to upload your avatar's files to High Fidelity's servers. The `Avatar Doctor <#troubleshooting-with-the-avatar-doctor>`_ will display any errors or warnings that you need to resolve prior to uploading.
4. Once your avatar is uploaded to the servers, click 'View in Inventory' to view your custom avatar. Unless you submit it for review, your custom avatar will remain in Draft mode, and will not be visible to others. To sell your avatar, you need to submit it for review on the Marketplace.

.. image:: _images/inventory.png

.. note:: If you make any changes to your custom avatar, you will need to update it through the Avatar Packager to see your changes. To update, select your project and click 'Open Project' in step 1. Follow the same steps to update your avatar.


------------------------------------------
Troubleshooting with the Avatar Doctor
------------------------------------------

The Avatar Packager will notify you of any errors or warnings that may affect the way your avatar looks and behaves in High Fidelity. This is a list of the errors you may encounter, along with instructions on how to fix your avatar.

+-----------------------------------+-------------------------------------------------+-------------------------------------------------------+
| Error Text                        | Description                                     | How to Fix                                            |
+-----------------------------------+-------------------------------------------------+-------------------------------------------------------+
| .. _multiple-children:            | Avatar has more than one bone at the top-level  | User will have to check if the other top-level        |
|                                   | of the hierarchy (aka the root bone has more    | bones are important bones. If they are not important  |
| Root joint has multiple children. | than one child)                                 | it may not require a fix and could possible be        |
|                                   |                                                 | ignored, but any changes to move bones must be        |
|                                   |                                                 | done externally in a preferred model editor.          |
+-----------------------------------+-------------------------------------------------+-------------------------------------------------------+
