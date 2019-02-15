# Marketplace Submission Rules

All your submissions to our Marketplace must adhere to these rules.

+ [General Rules](#general-rules)
    + [Presentation](#presentation)
    + [Documentation](#documentation)
    + [Licensing](#licensing)
    + [Copyright and Trademark](#copyright-and-trademark)
    + [Inappropriate Content](#inappropriate-content)
    + [Restricted content](#Restricted-content)
    + [Submissions with Scripts](#submissions-with-scripts)
    + [Art Submissions](#art-submissions)
    + [Submission Standards for Specific Categories](#submission-standards-for-specific-categories)

## General Rules

+ The Marketplace Admin Team will have the final say on the publishing of all content.
+ Any content that follows all technical rules may still be rejected if it has severe quality issues.
+ Any content attempting to exploit loopholes or work around these rules will be rejected.

### Presentation
##### Preview Image
A preview image must be included with all items. 

+ Preview images must clearly show what is included in the package. Images providing context (avatars holding the item, nice backgrounds etc.) are permitted as long as the description text clearly states what content is not included with the item. 
+ All images must be of proper quality and resolution, and should be visually appealing. 
+ If the item doesn't have visual elements, the preview image must show context for the functionality of the item (e.g. including an image of a VR controller for a script that adds controller functionality).

##### Description Text
Description text must clearly state what is included in the item and describe all relevant functionality. 

+ Descriptions must be in English and use proper grammar, spelling, and capitalization. 
+ The Marketplace Admin Team may make minor modifications to the description for corrections or to provide clarity. 

##### Titles
Item titles must be properly capitalized and only include the item name. 

+ Do not include subtext, taglines, or descriptive text in your title; these belong in the description text. This includes adding your username to the title as branding.

### Documentation
+ Any item that requires any kind of setup, special functionality, or important technical information must include documentation. This can be included in the description text or appear for the user when the item is downloaded into High Fidelity. 
+ Includes information about the rez rights required to use the item.

### Licensing
All Marketplace items are under the Proof of Provenance License (PoP License) v1.0. Custom or alternative licenses are not permitted, unless they are in conjunction with the PoP license, in which case the additional licenses need to be added to the description or as a comment in the code. You can read more about the PoP license [here](https://digitalassetregistry.com/PoP-License/v1/).

Items may make use of Creative Commons, Open Source, and other free public content. However, the item cannot be primarily composed of such free content. The free content must be either substantially modified or complement content that is entirely your own.

### Copyright and Trademark
Sellers must have absolute rights to the content submitted to the Marketplace. No material in violation of copyright law will be permitted.

### Inappropriate Content
##### Nudity/Pornography
No pornographic or overtly sexual content is permitted. Nudity in non-sexual context is permitted at the discretion of the Marketplace Admin Team. This can include content such as nude statues or paintings.
##### Disturbing Content
Content made to be excessively violent or cause extreme discomfort to users is not permitted. This includes excessive violence or gore.
##### Hate Speech
Absolutely no hate speech or imagery of any kind is permitted, including, but not limited to attacking race, religion, ethnic origin, national origin, gender, disability, or sexual orientation.

### Restricted content
Any content marketed as a version of an item that is meant to allow users to experience a product before purchasing the full version is permitted (demo, trial, lite etc.). The description text must clearly state all limitations, and the restricted version must be free. 

### Submissions with Scripts
+ Your scripts should have no linter errors, using the [High Fidelity linter](https://github.com/highfidelity/hifi/blob/master/.eslintrc.js).
+ All code should be self contained and all libraries need to be uploaded alongside your item. 
+ No minified code, it should be human readable and well documented. No obfuscated or unintelligible code is allowed.
+ Scripts that handle usernames should not be case sensitive. For example, the username 'HighFidelity' should be treated the same as 'highfidelity'.
+ You should destroy all entities created, unless explicitly stated in your description.
    + Use `Script.scriptEnding.connect()` described in our documentation [here](https://ingerjm0.github.io/hifi-api-docs/script.html#.scriptEnding).

### Art Submissions
+ Art assets uploaded are limited to 4K resolution.
+ We allow only lossless compression image formats, such as .png and .gif. Lossy compression file types such as .jpg will not be accepted. 

#### Submission Standards for Specific Categories

##### Avatars
We understand that avatar poly counts will vary based on quality and complexity. However, please avoid exceeding 80k polygons.
##### Environments
Environments need to be limited to 200 entities. Make sure your content is centered around the coordinates `{0,-10,0}`. So when your environment is loaded, users will be in the center.
##### Apps, Scripts, and Tools
Your application should have an .app.json root file which includes your .js and your .html files.
##### Wearables
Your wearable must have a `parentJoint` described in your .JSON, as well as `userData` describing how it is to be worn.
##### 3D Models
+ Your 3D model's geometry must not have:
    + N-gons (polygons with more than 4 sides).
    + Internal Geometry.
    + Overlapping faces (z-fighting).
    + Inverted face normals.
+ Submeshes should be properly combined, and vertices merged, unless there is a technical reason for keeping them separate, such as animated meshes.
+ Models that are not a single solid color must be cleanly UV unwrapped and textured.
    + Textures across multiple meshes should be atlassed where applicable.
+ The number of materials should be kept to a minimum. Most props and furnishings will only require one. Models colored using multiple materials of single colors will not be accepted


>>>> Content found to infringe on copyrights and content found to be malicious after being accepted will be invalidated. This will halt all access to the item and it will no longer be available for purchase or rezzing.



**See Also**

+ [Marketplace Bill of Rights](bill-of-rights)