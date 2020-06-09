#########################################
Procedural Shaders for Models and Avatars
#########################################

You can attach shaders to material entities, which are then applied to shape, zone, or mesh entities. You may also do the same with avatars. This feature is currently an **experimental feature** and is under community testing. If you wish to try applying procedural materials to models or avatars *at your own risk*, read on for more information.

-----------------------------
Enabling Procedural Materials
-----------------------------

To enable procedural materials for models and avatars:

- In Interface, enable **Settings > Developer Menu** to show the Developer menu. Then, enable **Developer > Render > Enable Procedural Materials**.

-------------------------
Making Procedural Shaders
-------------------------

You probably know about materials and how they work. Fact is, all materials are shaders. But when we apply a vertex or fragment shader to the material, it gives us lower level access to customize its effects.

Procedural shaders (or simply shaders) are textures that are created by mathematical and algorithmic means. It is a piece of code that is run on the GPU or graphics card. They can provide a range of effects such as making an object look cartoony or simulating a candle flame. If you’ve used programs like Blender or Substance Designer to create material images, then you’ve seen this in action. The difference is that these programs automatically generate the shader code for you. To make custom designs and effects, you will have to dive into the code yourself.

`The Book of Shaders <https://thebookofshaders.com/01>`_ expands on this with an analogy:

    If you already have experience making drawings with computers, you know that in that process you draw a circle, then a rectangle, a line, some triangles until you compose the image you want. That process is very similar to writing a letter or a book by hand - it is a set of instructions that do one task after another.

    Shaders are also a set of instructions, but the instructions are executed all at once for every single pixel on the screen. That means the code you write has to behave differently depending on the position of the pixel on the screen. Like a type press, your program will work as a function that receives a position and returns a color, and when it's compiled it will run extraordinarily fast.

Vircadia has support for vertex and fragment shaders on shape and material entities, and avatars. These shaders are based on the GLSL shader language, which uses the syntax and features of the C programming language. It does not have support for geometry, tessellation and evaluation, or compute shaders.

This documentation is not intended to be a complete course on how to create a shader. This is an advanced topic that requires good math and programming skills. Many free books are available on the internet that can teach about shaders. `The Book of Shaders <https://thebookofshaders.com>`_ is one such book that is often cited.

An understanding of how to use JavaScript and JSON with Vircadia is important before you dive into this topic. If you intend to create shaders yourself, knowing the C programming language will also be important.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Differences Between Athena and GLSL Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When exploring shaders online, you may have come across many shader examples. Or you might have seen websites and applications that allow you to experiment with shader code in a live environment. Most of the code from these sources will not work with Vircadia without modification.

The first thing to be aware of is that there are a few shader languages. GLSL is one that is used by OpenGL, and Vircadia’s shaders are based on this language. Another common one is HLSL, which is used often for DirectX programs. Although these languages share a lot of similarities, you cannot use HLSL code in an OpenGL application without modification.

Another consideration is that Vircadia does not expose the full range of what GLSL offers to scripters. Instead, users are offered a subset of GLSL, and a custom set of naming conventions for fragment or vertex components.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Basic Method for Using Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Shaders' code is stored as a file. Fragment shaders will typically have the file extension ***.fs** or ***.frag** and vertex shaders will usually have the ***.vs** or ***.vert** file extension.

Shaders are applied to entities and avatars by way of attaching them to a material. That material is then attached to your entity or avatar, therefore applying the shader as intended.

If you are unfamiliar with material entities, you can find more information `here <https://docs.vircadia.dev/create/entities/material-entity.html>`_.

Material entities have data that is stored in the JSON format, and they have a property called ``materialData``. The ``materialData`` property requires ``model`` and ``procedural`` fields. Here is an example::

    {
        "materials": [{
            "model": "hifi_shader_simple",
            "procedural": {
                "version": 3,
                "shaderUrl": "https://docs.vircadia.dev/_static/resources/Proceduralv3.fs"
            }
        }]
    }

The ``materialData`` JSON can be applied either via the Vircadia Interface’s edit tools or with a script. Here's another example::

    Entities.addEntity({
    	type: "Material",
    	materialURL: "materialData",
    	priority: 1,
    	materialData: JSON.stringify({
    		materials: {
    			"model": "hifi_shader_simple",
    			"procedural": {
    			  	"version": 3,
    			  	"shaderUrl": "https://docs.vircadia.dev/_static/resources/Proceduralv3.fs"
    			}
    		}
    	})
    });

You must specify the material's ``model`` as ``"hifi_shader_simple"`` and provide a shader link. To provide a fragment shader, set ``fragmentShaderURL`` (or ``shaderUrl``). To provide a vertex shader, set ``vertexShaderURL``.

To set the ``materialData`` using the edit tools, you will want to set ``materialURL`` equal to ``"materialData"``. Then put in the JSON.stringify'd version of the materialData as shown above into the field.

^^^^^^^^^^^^^^^
Shader Template
^^^^^^^^^^^^^^^

When you learn about shaders for other applications, the shader may have a function like ``main()`` that is run first. By contrast, Vircadia has a specific function name that must be called. Which function is used depends on which version of the shader you use.

As shaders were developed, features for them evolved a bit over time. As a result, there are several shader versions, and each version has a different call signature. **Versions 1 and 2** are the oldest, and will still work. **Versions 3 and 4** are the newest and expose more features. Version 4 provides for per-fragment positions, however it is also the most computationally expensive. Therefore it is recommended to use version 3 if that extra feature from version 4 is not needed.

A shader consists of two primary pieces: **the main function** that is responsible for coloring the pixel, and any desired **helper functions** that assist in that processing logic (which must go above the main function).

A basic template for a shader without helper functions looks something like this example::

    // Helper functions go here.
    
    // version 3
    float getProceduralFragment(inout ProceduralFragment data) {
        data.diffuse = vec3(0);
        data.occlusion = 0;
        data.roughness = 1;
        data.emissive = _positionMS.xyz;
        return 0; // "emissiveAmount", either <=0 or >0, suggest return 0 and use data.emissive
    }

The function ``getProceduralFragment()`` is the default main entry point for the fragment shader. Because shaders are always read by their compiler from top to bottom, this function must always be the last one in your shader code. You will also need to know what is available to you in the ``data`` struct which is outlined in :ref:`Provided Methods, Constants, and Structs`.

^^^^^^^^^^^^^^^^
Global Variables
^^^^^^^^^^^^^^^^

In addition to the values provided by shader function arguments, there are a number of global variables that provide useful data when calculating procedural effects.

The following global variables are provided::

    vec4 iDate; // year, month (0 based to match shadertoy), day, seconds
    vec3 iWorldPosition; // entity position
    mat3 iWorldOrientation; // entity orientation
    vec3 iWorldScale; // entity scale
    float iGlobalTime; // time since last shader recompilation
    float iLocalCreatedTime; // time since first shader compilation
    float iEntityTime; // time since entity creation
    int iFrameCount; // frames since last shader recompilation
    sampler2D iChannel0, iChannel1, iChannel2, iChannel3; // custom textures, if provided
    vec3 iChannelResolution[4]; // resolution of each custom texture, if provided

The following variables are defined but currently not implemented::

    const vec3 iResolution = vec3(1.0); // Resolution doesn’t make sense in the VR context
    const vec4 iMouse = vec4(0.0); // Mouse functions not enabled currently
    const float iSampleRate = 1.0; // No support for audio input
    const vec4 iChannelTime = vec4(0.0); // No support for video input

The following per-fragment uniforms are also provided in all shader versions::

    vec4 _positionMS; // position in "model space" (relative to the center of the object); (equal to _position)
    vec4 _positionES; // position in "eye space" (relative to the center of your eye); (equal to _eyePosition)
    vec3 _normalMS; // direction the current face is pointing in "model space" (without any rotations); (equal to _modelNormal)
    vec3 _normalWS; // direction the current face is pointing in "world space" (after rotations applied); (equal to _normal)
    vec4 _color; // color of the object
    vec4 _texCoord01 // UV texture coordinates on this model (also split into vec2 _texCoord0 and vec2 _texCoord1)

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Provided Methods, Constants, and Structs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here is a full list of the provided methods, constants, and structs::

    float mod289(float x);
    vec2 mod289(vec2 x);
    vec3 mod289(vec3 x);
    vec4 mod289(vec4 x);
    float permute(float x);
    vec3 permute(vec3 x);
    vec4 permute(vec4 x);
    float taylorInvSqrt(float r);
    vec4 taylorInvSqrt(vec4 r);
    vec4 grad4(float j, vec4 ip);
    float F4 = 0.309016994374947451
    float snoise(vec4 v);
    float snoise(vec3 v);
    float snoise(vec2 v);

    // https://www.shadertoy.com/view/lsfGRr
    float hifi_hash(float n);
    float hifi_noise(in vec2 x);

    // https://www.shadertoy.com/view/MdX3Rr
    // https://en.wikipedia.org/wiki/Fractional_Brownian_motion
    float hifi_fbm(in vec2 p);

    TransformCamera getTransformCamera()

    // where a TransformCamera is:
    struct _TransformCamera {
        mat4 _view;
        mat4 _viewInverse;
        mat4 _projectionViewUntranslated;
        mat4 _projection;
        mat4 _projectionInverse;
        vec4 _viewport;
        vec4 _stereoInfo;
    };

    int gpu_InstanceID()
    vec3 getEyeWorldPos()
    bool cam_isStereo() // is user wearing a VR headset (or a 3D monitor?)
    float cam_getStereoSide() // 1 for right eye in a stereo context, otherwise 0
    float isUnlitEnabled()
    float isEmissiveEnabled()
    float isLightmapEnabled()
    float isBackgroundEnabled()
    float isObscuranceEnabled()
    float isScatteringEnabled()
    float isDiffuseEnabled()
    float isSpecularEnabled()
    float isAlbedoEnabled()
    float isAmbientEnabled()
    float isDirectionalEnabled()
    float isPointEnabled()
    float isSpotEnabled()
    float isShowLightContour()
    float isWireframeEnabled()
    float isHazeEnabled()
    float isBloomEnabled()
    float isSkinningEnabled()
    float isBlendshapeEnabled()

Shader Version 1
----------------
::

    // Must implement. Always emissive, returns a single color.
    vec3 getProceduralColor()

Shader Version 2
----------------
::

    // Must implement.
    float getProceduralColors(inout vec3 diffuse, inout vec3 specular, inout float shininess)

The method can optionally set diffuse, specular, and shininess, but does not have to.
The range for shininess goes from ``0`` to ``128``.
The return value is ``emissiveAmount``. If the returned value is greater than ``0``, the object will be treated as emissive.

Shader Version 3
----------------
::

    // Must implement.
    float getProceduralFragment(inout ProceduralFragment proceduralData)

``ProceduralFragment`` **struct**::

    struct ProceduralFragment {
        vec3 normal;
        vec3 diffuse;
        vec3 specular;
        vec3 emissive;
        float alpha;
        float roughness;
        float metallic;
        float occlusion;
        float scattering;
    };

The default values for some of these are::

    const float DEFAULT_ROUGHNESS = 0.9;
    const float DEFAULT_SHININESS = 10.0;
    const float DEFAULT_METALLIC = 0.0;
    const vec3 DEFAULT_SPECULAR = vec3(0.1);
    const vec3 DEFAULT_EMISSIVE = vec3(0.0);
    const float DEFAULT_OCCLUSION = 1.0;
    const float DEFAULT_SCATTERING = 0.0;
    const vec3 DEFAULT_FRESNEL = DEFAULT_EMISSIVE;

The method can optionally set any of the values in the struct to affect the output.
The return value is ``emissiveAmount``. If the returned value is greater than ``0``, the object will be treated as emissive.

Shader Version 4
----------------
::

    // Must implement.
    float getProceduralFragmentWithPosition(inout ProceduralFragmentWithPosition proceduralData)

``ProceduralFragmentWithPosition`` **struct**::

    struct ProceduralFragmentWithPosition {
        vec3 position;
        vec3 normal;
        vec3 diffuse;
        vec3 specular;
        vec3 emissive;
        float alpha;
        float roughness;
        float metallic;
        float occlusion;
        float scattering;
    };

This is the same as shader version 3 but with per-fragment position. By modifying position, you can modify the per-fragment depth. This allows you to create things like ray-marched geometry that depth-tests properly and is dynamically lit by light entities. The trade-off is that this version is much more computationally expensive than version 3.

^^^^^^^^^^^^^
Zone Entities
^^^^^^^^^^^^^

Zone entities operate slightly differently. They support the same global defines but not the provided methods or constants. They also provide the following inputs:
::

    vec3 _normal;
    Skybox skybox; // a struct containing vec4 color
    samplerCube cubeMap; // the skybox texture

And must implement the following method, regardless of version:
::

    vec3 getSkyboxColor()

Zones also support custom uniforms and textures (currently only 2D textures).

--------------
Vertex Shaders
--------------

A vertex shader must implement::

    void getProceduralVertex(inout ProceduralVertexData proceduralData)

And will include this struct::

    struct ProceduralVertexData {
        vec4 position;
        vec4 nonSkinnedPosition; // input only
        vec3 normal;
        vec3 nonSkinnedNormal; // input only
        vec3 tangent; // input only
        vec3 nonSkinnedTangent; // input only
        vec4 color;
        vec2 texCoord0;
    };

--------------------------------------
For Both Fragment and Vertex Shaders
--------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Custom Uniforms and Textures
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Procedural materials also support up to 4 custom textures and many custom uniforms. These can be defined as follows::

    {
    	materials: {
    		"model": "hifi_shader_simple",
    		"procedural": {
    		    "version": 3,
    		    "shaderUrl": "https://docs.vircadia.dev/_static/resources/Proceduralv3.fs",
    		    "uniforms": {
    		        "_diffuse": [1, 0, 0],
    		        "_alpha": 1.0,
    		        "_emissive": [0, 0, 0],
    		        "_emissiveAmount": 0.0
    		    }
    		    "channels": ["https://mario.nintendo.com/assets/img/home/intro/mario-pose2.png", "https://www.mariowiki.com/images/thumb/e/e1/Luigi_New_Super_Mario_Bros_U_Deluxe.png/200px-Luigi_New_Super_Mario_Bros_U_Deluxe.png"]
    	    }
        }
    }

When texture URLs are provided, iChannel0 - iChannel3 will be populated, as well as iChannelResolution[0] - iChannelResolution[3].

When you provide uniforms, you must also include them at the top of your shader file, with optional defaults::

    uniform vec3 _diffuse = vec3(0.0);
    uniform float _alpha = 1.0;
    uniform vec3 _emissive = vec3(0.0);
    uniform float _emissiveAmount = 0.0;

Supported uniform types are: ``float``, ``vec2``, ``vec3``, and ``vec4``. (Multiple values are provided as arrays.)

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Alpha Effects (Transparency)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Shaders that make use of the ``proceduralData.alpha`` value won’t display alpha on their own. In order for a shader’s alpha to be active, the entity it is applied to must first have either its alpha property less than ``1.0``, or a material property setting opacity to less than ``1.0``.

^^^^^^^^^^^^^^^^^
Debugging Shaders
^^^^^^^^^^^^^^^^^

The only way to debug shaders at the moment is to look at Interface’s log file. Shader compilation errors will appear in this log, and can help with locating issues.

Because a user created shader is ultimately embedded in a larger internal shader framework, you’ll notice that an error in a 20 line shader will be reported at a much higher line number, typically greater than 1000. As a result, you will need to locate the shader code that corresponds to your shader at the end of the larger internal shader context.

^^^^^^^^^^^^^^^^^^^^^^^^^^
Shader Examples by Version
^^^^^^^^^^^^^^^^^^^^^^^^^^

::

    // version 1
    vec3 getProceduralColor() {
        return _positionMS.xyz;
    }

    // version 2
    float getProceduralColors(inout vec3 diffuse, inout vec3 specular, inout float shininess) {
        // diffuse is from the texture, others are hardcoded to DEFAULT_SPECULAR and DEFAULT_SHININESS
        diffuse = _positionMS.xyz;
        return 1.0; // emissive, between 0.0 - 1.0
    }

    // version 3
    float getProceduralFragment(inout ProceduralFragment data) {
        data.diffuse = vec3(0);
        data.occlusion = 0;
        data.roughness = 1;
        data.emissive = _positionMS.xyz;
        return 0; // "emissiveAmount", either <=0 or >0, suggest return 0 and use data.emissive
    }

    // version 4
        float getProceduralFragmentWithPosition(inout ProceduralFragmentWithPosition data) {
        data.diffuse = vec3(0);
        data.occlusion = 0;
        data.roughness = 1;
        data.emissive = _positionMS.xyz;
        return 0; // "emissiveAmount", either <=0 or >0, suggest return 0 and use data.emissive
    }

    // skybox
    vec3 getSkyboxColor() {
        vec3 normal = normalize(_normal);
        return texture(cubeMap, normal).rgb; // this should return the same value that the skybox texture has
    }

For further details on each version, see :ref:`Provided Methods, Constants, and Structs`.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A Cautionary Note on Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Vircadia does not enable seeing procedural shaders by default. This is because currently, they are an experimental feature. Shaders are a very powerful tool, and when used incorrectly, can harm the user experience for everyone on the domain. A poorly written shader or a shader created by a bad actor can slow things down to a crawl or interfere with a user’s view of the virtual world.

Shaders are best used as a very strong spice in a recipe. Attempt to keep them small and efficient. Shaders can produce marvelous and mind-blowing effects, but overuse can spoil the desired end effect. If you create a shader that has hundreds of lines of code, consider trimming it down if possible.

If you find yourself in a position where a shader is causing trouble for you, remember that you can disable them in the Athena Interface.
