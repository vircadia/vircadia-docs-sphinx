<div class="admonition warning">
    <p class="admonition-title">Warning</p>
    <p>This document is outdated. FIXME: only mentions FBX format, mentions weight needing to be higher?</p>
</div>

# Wearables

Wearables are objects that attach to your avatar. They can be hats, skirts, glasses, headphones and anything else that can accessorize your look in-world. You can express your individuality by creating wearables of your own and [putting them on](../explore/personalize/add-wearables).

Before you can use a custom wearable, you must first host its FBX and JSON files in a place that is publicly accessible to Vircadia. You can use any cloud platforms including Amazon S3, Google Cloud Storage, Microsoft Azure, Dropbox, etc.

## Build a Custom Wearable
Wearables are simply [3D models](3d-models) that are customized to fit on your avatar. Therefore, the first step in creating your wearable is to build one or find an existing model that you want to use.

There are a few different applications you can use to build and edit the 3D model for your wearable, including:
* [Blender](https://www.blender.org)
* [Maya](https://www.autodesk.com/products/maya/overview)
* [Google Blocks](https://vr.google.com/blocks)
* [Oculus Medium](https://www.oculus.com/medium)
* [Tiltbrush](https://www.tiltbrush.com)

Some guidelines to follow when you're building soft wearables like clothes:

+ Your soft wearable should be designed to fit a particular type of avatar. Since avatars vary in size and structure, a soft wearable designed to fit one avatar may not fit another one as well.
+ The soft wearable should be slightly larger than the avatar to avoid clipping. Clipping is when one 3D object goes through another 3D object without colliding.
+ Your soft wearable's shape should match the avatar's.
+ The soft wearable should have similar or the same weights as the avatar.

When building soft wearables like clothes, ensure that you are making it to fit the avatar well. Its mesh should match the avatar's and have a higher weight.

When building your model, be sure to [follow these guidelines](3d-models/get-model) to ensure that it is compatible with Vircadia.  Once you're done editing your model, export the file as an FBX or OBJ file. You've now created your own custom model!

After hosting your wearable in the cloud [put it on](../explore/personalize/add-wearables) and adopt your new look.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>If you're creating a wearable to share, make sure it will fit the default wooden mannequin avatar (unless you are specifically making it to go with a very specific base avatar model). This will ensure that the wearable will work with most avatars in Vircadia.</p>
</div>


**See Also**

+ [Get Your 3D Model](3d-models/get-model)
+ [Put On Wearables](../explore/personalize/add-wearables)
