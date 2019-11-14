############################################
Procedural Shaders for Models and Avatars
############################################

You can combine shaders with material entities on shape and zone entities to apply shaders to models and avatars. This feature was released as an **experimental feature** and has not been thoroughly tested through our normal channels. If you wish to try applying procedural materials to models or avatars *at your own risk*, read on for more information.

-------------------------------------
Enable Procedural Materials
-------------------------------------

Enabling procedural materials for models and avatars is a two-step process: 

1. In Interface, go to **Settings > Developer Menu** to enable the Developer menu. Then, enable **Developer > Render > Enable Procedural Materials**.
2. Add an environment variable `HIFI_ENABLE_MATERIAL_PROCEDURAL_SHADERS` and set it to "1".

