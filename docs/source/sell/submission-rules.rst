#################################
Marketplace Submission Rules
#################################

All your submissions to our Marketplace must adhere to these rules.

.. contents:: On This Page
    :depth: 2

----------------------
General Rules
----------------------

+ The Marketplace Admin Team will have the final say on the publishing of all content.
+ Any content that follows all technical rules may still be rejected if it has severe quality issues.
+ Any content attempting to exploit loopholes or work around these rules will be rejected.

.. note:: Content found to infringe on copyrights and content found to be malicious after being accepted will be invalidated. This will halt all access to the item and it will no longer be available for purchase or rezzing.

----------------------
Presentation
----------------------

**Preview Image**

A preview image must be included with all items. 

+ Preview images must clearly show what is included in the package. Images providing context (avatars holding the item, nice backgrounds etc.) are permitted as long as it is still clear what the item is. 
+ If the item doesn't have visual elements, the preview image must show context for the functionality of the item (e.g. including an image of a VR controller for a script that adds controller functionality).

**Description Text**

The description text must clearly state what is included in the item and describe all relevant functionality. 

+ Descriptions must be in English and use proper grammar, spelling, and capitalization. 
+ The Marketplace Admin Team may make minor modifications to the description for corrections or to provide clarity. 

**Titles**

Item titles must be properly capitalized and only include the item name. 

+ Do not include subtext, taglines, or descriptive text in your title; these belong in the description text. This includes adding your username to the title as branding.

---------------------
Documentation
---------------------

+ Any item that requires any kind of setup, special functionality, or important technical information must include documentation. This can be included in the description text and/or appear for the user when the item is rezzed in High Fidelity. 
+ If your item requires any [special rez permissions](../host/your-domain/secure-domain.html#set-user-permissions), this must be included in the documentation

---------------------
Licensing
---------------------

All Marketplace items are under the Proof of Provenance License (PoP License) v1.0. Custom or alternative licenses are not permitted, unless they are compatible with the PoP license, in which case the additional licenses need to be added to the description or as a comment in the code. You can read more about the PoP license `here <https://digitalassetregistry.com/PoP-License/v1/>`_.

Items may make use of Creative Commons, Open Source, and other free public content. However, the item cannot be primarily composed of such free content. The free content must be either substantially modified or complement content that is entirely your own.

-----------------------------
Copyright and Trademark
-----------------------------

Sellers must have absolute rights to the content submitted to the Marketplace. No material in violation of copyright law will be permitted.

-----------------------------
Inappropriate Content
-----------------------------

+ **Nudify/Pornography**: No pornographic or overtly sexual content is permitted. Nudity in non-sexual context is permitted at the discretion of the Marketplace Admin Team. This can include content such as nude statues or paintings.
+ **Disturbing Content**: Content made to be excessively violent or cause extreme discomfort to users is not permitted. This includes excessive violence or gore.
+ **Hate Speech**: Absolutely no hate speech or imagery of any kind is permitted, including, but not limited to attacking race, religion, ethnic origin, national origin, gender, disability, or sexual orientation.

----------------------------
Restricted Content
----------------------------

We accept limited versions of content that allow the user to experience the product prior to purchasing the full version (demo, trial, lite etc.) For these submissions, the item must be free and the description text must clearly state all limitations of the item.

-----------------------------
Submissions with Scripts
-----------------------------

Your scripts must work as described in the Description Text of your item. All code must be self-contained, and all libraries must be uploaded to the Marketplace alongside your item. 

--------------------------
Root File
--------------------------

All submissions must have a legitimate root file, based on the type of submission: 

+-------------+----------------+-----------------------------------------------------------------------+
| Category    | Root File Type | Description                                                           |
+=============+================+=======================================================================+
| Avatar      | FST            | The main avatar file, which contains information about the skeleton,  |
|             |                | blendshapes, FBX file and textures used by an avatar.                 |
+-------------+----------------+-----------------------------------------------------------------------+
| Environment | TAR.GZ         | A content archive file containing all of your domain content.         |
+-------------+----------------+-----------------------------------------------------------------------+
| Tablet Apps | APP.JSON       | A JSON file that defines the absolute paths of your JavaScript and    |
|             |                | HTML files.                                                           |
+-------------+----------------+-----------------------------------------------------------------------+
| Wearables   | JSON           | A JSON file, which contains information on how High Fidelity can      |
|             |                | access your wearable and its files.                                   |
+-------------+----------------+-----------------------------------------------------------------------+
| 3D Models   | JSON           | A JSON file, which contains information on how High Fidelity can      |
|             |                | access your model and its related files.                              |
+-------------+----------------+-----------------------------------------------------------------------+

-----------------------------------
Wearable-Specific Requirements
-----------------------------------

* Wearables must have either a ``parentJointName`` or ``parentJointIndex`` property specifying the joint that the wearable will be attached to by default. 
* Wearables must have ``userData`` defined that describes how it is to be worn.

**See Also**

+ :doc:`Marketplace Bill of Rights <bill-of-rights>`
