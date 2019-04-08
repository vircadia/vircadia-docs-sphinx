################################
Add Items to the Marketplace
################################

Once you've created an avatar, wearable or entity, you have the option to sell it in the Marketplace. This guide walks you through the steps to upload it to the Marketplace so that you can start the process of having it reviewed and published.
 
.. note:: Prior to adding your item to the Marketplace, we recommend that you use the `Marketplace Item Tester <../create/tools.html#marketplace-item-tester>`_ to ensure that your item works the way you expected and does not have any script errors.

.. contents:: On This Page
    :depth: 2

**In This Section**

.. toctree::
    :maxdepth: 2
    :titlesonly:

    Add Your Avatar <add-item/upload-avatar>
    Add Your 3D Model <add-item/upload-model>
    Add Your Wearable <add-item/upload-wearable>
    Upload Your Environment <add-item/upload-environment>
    Add Your Audio <add-item/upload-audio>

-----------------------------
Limited Edition Items
-----------------------------

You can choose to create a "limited edition" item by setting the quantity available. This ensures that only a specific number of your item is available for purchase on a first-come, first-serve basis. 

To create a limited edition item, simply check the box "Item is a limited edition" when you fill out the form to submit your item to the Marketplace. Then, enter the number of items you want available for purchase. If you enter a number, say 25, you are saying that only 25 copies of your item will be available for purchase. 

---------------------------------
Unlimited Rezzing of Your Item
---------------------------------

When you submit your item to the Marketplace, you can allow users to rez your item multiple times within a single domain. This allows users to create forests from a single tree (that they purchased) or to rez multiple streetlights from a single item in their inventory. 

This setting is exposed in the item's JSON file. To allow your item to be added multiple times within a domain, add ``"certificateType": "domainUnlimited"`` to your item's root JSON file prior to submitting your item. 

-----------------------------
Marketplace Categories
-----------------------------

All items submitted to the Marketplace must fall under one or more pre-defined categories. It's important to correctly categorize your items as it helps other users find your content in the Marketplace. 

.. note:: Our Marketplace team reviews each submission to ensure items are correctly labeled. Items may be declined if they are not accurately described or extraneous categories are marked.

Below, you'll find descriptions of each Marketplace category and examples of items they include.

+--------------+----------------------------------------------------------------------+-----------------------------------+
| Category     | Description                                                          | Examples                          |
+==============+======================================================================+===================================+
| Animals      | Items depicting animals, including static 3D models                  | `Fetch App                        |
|              | of animals and functional content.                                   | <https://highfidelity.com         |
|              |                                                                      | /marketplace/items/c66bae         |
|              |                                                                      | 25-8345-4fd6-86db-bcebdc          |
|              |                                                                      | 441827>`_,                        |
|              |                                                                      | `3D Animal Models <https:         |
|              |                                                                      | //highfidelity.com/market         |
|              |                                                                      | place/items/b86b3a26-8404         |
|              |                                                                      | -4526-9faf-f0a923f4c563>`_        |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Animations   | Scripts and apps that modify or add animations to                    | `Dance App <https://highfi        |
|              | avatars, including inverse kinetics and flow manipulation.           | delity.com/marketplace/it         |
|              |                                                                      | ems/9a99c95a-85b3-4a6d-936        |
|              |                                                                      | 2-b56ad102ebe5>`_                 |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Apps,        | Items composed primarily of JavaScript that add or modify            | `Sit Point <https://highfid       |
| Scripts,     | functionality to High Fidelity's content and/or Interface.           | elity.com/marketplace/items       |
| Tools        | These can range from a single line of code that will change          | /7a1e051d-7974-4d8e-8756-2        |
|              | an entity's color to a full application that enables your            | 1382e7397c7>`_,                   |
|              | avatar to dance. Proper apps must include an app.json root file.     | `TTS <https://highfidelity        |
|              |                                                                      | .com/marketplace/items/568b       |
|              |                                                                      | 183d-db87-4618-9e40-aba840        |
|              |                                                                      | ec3b26>`_                         |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Architecture | Structures or materials used to create structures including          | `Apartment Building               |
|              | doors, walls, and flooring. This category does not include           | <https://highfidelity.com/m       |
|              | full environments like cities.                                       | arketplace/items/2baddb8b-9       |
|              |                                                                      | ac5-47ed-b78c-5a1b2861b004>`_     |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Audio        | Scripted items that produce sound effects and/or music.              | `Boombox <https://highfideli      |
|              |                                                                      | ty.com/marketplace/items/e9d      |
|              |                                                                      | a3d33-b937-4e07-bdf8-29dde58      |
|              |                                                                      | 1dfd1>`_,                         |
|              |                                                                      | `Looping Sound Emitter            |
|              |                                                                      | <https://highfidelity.com/mar     |
|              |                                                                      | ketplace/items/4a29c38c-c091-     |
|              |                                                                      | 434e-8085-025f7d299529>`_         |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Avatars      | 3D models that are specifically rigged to work as an avatar.         | `Artemis <https://highfideli      |
|              | Proper avatars must include a .fst avatar root file.                 | ty.com/marketplace/items/e7694    |
|              |                                                                      | 6cc-c272-4adf-9bb6-02cde0a4b5     |
|              |                                                                      | 7d>`_,                            |
|              |                                                                      | `Mountain Ogre                    |
|              |                                                                      | <https://highfidelity.com/mar     |
|              |                                                                      | ketplace/items/9515f437-f4e1-     |
|              |                                                                      | 49a7-b6bf-0423873cd576>`_         |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Education    | Used to promote educational materials for anything through           | `Laser Pointer Flashlight         |
|              | the medium of Virtual Reality.                                       | <https://highfidelity.com/mar     |
|              |                                                                      | ketplace/items/3d0dd29f-dbe7-     |
|              |                                                                      | 4f49-8fef-d95619a4b891>`_         |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Environments | A collection of items meant to fill a domain, providing a            | `Desert Oasis                     |
|              | complete setting or a base to build a new setting from.              | <https://highfidelity.com/mar     |
|              | Environments must be entity archives, as produced by backup          | ketplace/items/3b9eb431-564c-4    |
|              | files from High Fidelity domains.                                    | d03-bf1c-4eff7eb93fe0>`_          |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Fun & Games  | Interactive games and content, typically a scripted entity           | `Beach Ball <https://highfide     |
|              | or app.                                                              | lity.com/marketplace/items/91     |
|              |                                                                      | 035a3b-947d-4d03-8226-60d091a     |
|              |                                                                      | e173e>`_,                         |
|              |                                                                      | `Holiday Blaster                  |
|              |                                                                      | <https://highfidelity.com/mark    |
|              |                                                                      | etplace/items/9868f622-0c6b-4     |
|              |                                                                      | 60b-ad25-94c5521c0b65>`_          |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Furnishings  | Items used to decorate a space, usually furniture and other          | `Mirror <https://highfidelity.    |
|              | props for decoration.                                                | com/marketplace/items/f9085148-   |
|              |                                                                      | 02f3-401c-b823-1df9f616f362>`_,   |
|              |                                                                      | `Chairs <https://highfidelity.c   |
|              |                                                                      | om/marketplace/items/fbb76479-    |
|              |                                                                      | 1663-4914-b8b2-3b657fade384>`_    |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Light        | Items that emit light, including furnishings and other content.      | `Lamp <https://highfidelity.com   |
| Systems      |                                                                      | /marketplace/items/24629f85-ba4   |
|              |                                                                      | a-4311-9c50-b01c52371193>`_,      |
|              |                                                                      | `Torch <https://highfidelity.co   |
|              |                                                                      | m/marketplace/items/8114c307-c94  |
|              |                                                                      | 9-43fd-8c4d-f7d6b1e5d446>`_       |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Materials    | Items users can use to customize shading or materials,               | `Materials Sets                   |
| and Shaders  | including color and texture, on other entities.                      | <https://highfidelity.com/market  |
|              |                                                                      | place/items/9e72fe33-61ca-4ca1-   |
|              |                                                                      | b6a5-c76930250634>`_              |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Misc         | Items that do not fit into any of the other categories. If marked    | `Particle Packs                   |
|              | Misc, items should not be marked with any other category.            | <https://highfidelity.com/market  |
|              |                                                                      | place/items/87706804-bcc0-4e75-a  |
|              |                                                                      | d16-6e30f2b63700>`_               |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Nature       | Items relating to or depicting nature and the outdoors.              | `Plants & Pots                    |
|              |                                                                      | <https://highfidelity.com/market  |
|              |                                                                      | place/items/e7a2f0ec-4dda-41d2-   |
|              |                                                                      | b17f-d4784ace27f6>`_              |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Open Source  | Free content available for the community to use and build upon.      | `Digital Picture Frame            |
|              | Items in this category require a source code link.                   | <https://highfidelity.com/market  |
|              |                                                                      | place/items/77f0eb70-beba-49df-9  |
|              |                                                                      | e26-da1740bf6c9a>`_,              |
|              |                                                                      | `Drumset <https://highfidelity.co |
|              |                                                                      | m/marketplace/items/658b506f-ff8  |
|              |                                                                      | 0-4f66-8dc3-578aa9bc1671>`_       |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Pets &       | Items with scripted behavior or attachments that mimic a pet or      | `Jimi the Snail                   |
| Companions   | companion. This category does not include static 3D models of        | <https://highfidelity.com/marketp |
|              | animals commonly kept as pets.                                       | lace/items/a63c58d9-a8b2-4da7-91  |
|              |                                                                      | d6-ae2f159d218c>`_,               |
|              |                                                                      | `Spirit Cat                       |
|              |                                                                      | <https://highfidelity.com/marketp |
|              |                                                                      | lace/items/b86b3a26-8404-4526-9f  |
|              |                                                                      | af-f0a923f4c563>`_                |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Vehicles     | Items that are rideable and/or appear rideable through attachments   | `Skool Flyer                      |
|              | or scripted functionality. This category does not include static     | <https://highfidelity.com/market  |
|              | 3D models of vehicles.                                               | place/items/f6ab09e8-8e29-4def-   |
|              |                                                                      | a957-19d8ebeac64c>`_              |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| VR Only      | Items that require a VR headset and/or controllers to function       | `Painting Set                     |
|              | properly and will not work with Interface in desktop-mode.           | <https://highfidelity.com/market  |
|              |                                                                      | place/items/87d3d0f7-58f6-4e66-   |
|              |                                                                      | b432-66bc91251560>`_              |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Weapons      | Items depicting any kind of weapon, usually attachable. Both deadly  | `Bow <https://highfidelity.com/m  |
|              | and fun-loving weapons are permitted.                                | arketplace/items/f03ab3f1-7e87-4  |
|              |                                                                      | 6ef-a3f0-e362f94a43ea>`_,         |
|              |                                                                      | `Ping Pong Gun                    |
|              |                                                                      | <https://highfidelity.com/marketp |
|              |                                                                      | lace/items/d87f440e-b561-4d67-99  |
|              |                                                                      | d3-f6c56c350ea7>`_                |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Wearables    | Items that attach to your avatar including hats, glasses, jewelry,   | `Cat Tail <https://highfidelity.  |
|              | and more.                                                            | com/marketplace/items/2e6a5418-e3 |
|              |                                                                      | 76-4bca-bfcd-712f9790913f>`_,     |
|              |                                                                      | `Backpack <https://highfidelity.c |
|              |                                                                      | om/marketplace/items/908f8de2-2b9 |
|              |                                                                      | a-4abf-a8a1-9a888ae57a15>`_,      |
|              |                                                                      | `Friendship Bracelet              |
|              |                                                                      | <https://highfidelity.com/marketp |
|              |                                                                      | lace/items/f5c66f52-6f33-4303-ac  |
|              |                                                                      | 74-6e03df0ab254>`_                |
+--------------+----------------------------------------------------------------------+-----------------------------------+
| Zones &      | Items primarily utilizing :doc:`zone entities                        | `Constellation Skybox             |
| Skies        | <../create/entities/zone-tutorial>` in High Fidelity.                | <https://highfidelity.com/market  |
|              |                                                                      | place/items/208ba556-d457-4627-b  |
|              |                                                                      | db1-2185591c7031>`_,              |
|              |                                                                      | `Moon Skybox                      |
|              |                                                                      | <https://highfidelity.com/market  |
|              |                                                                      | place/items/a8666e3d-01fd-4719-8  |
|              |                                                                      | 50c-b9c2acc49a65>`_               |
+--------------+----------------------------------------------------------------------+-----------------------------------+

------------------------
Additional Notes
------------------------

Follow these guidelines when uploading content to the Marketplace: 

1. Use only content which you are legally entitled to.
2. Do not use a code obfuscator, our review team needs to be able to read your scripts.
3. Audio should sound clean and be 16-bit uncompressed WAV or MP3 files.
4. Items may not have .js root files. You should either make an app to run scripts, or attach scripts to entities that will be rezzed through a .json file.
5. All entities must have a name, even if they are invisible or simple primitives.
6. Please use English in your package description, support text, and code comments.
7. If needed, you may use :doc:`Markdown syntax <markdown-guide>` in your description text.
