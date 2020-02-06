############################################
Procedural Shaders for Models and Avatars
############################################

You can combine shaders with material entities on shape and zone entities to apply shaders to models and avatars. This feature is currently an **experimental feature** and is under community testing. If you wish to try applying procedural materials to models or avatars *at your own risk*, read on for more information.

-------------------------------------
Enabling Procedural Materials
-------------------------------------

To enable procedural materials for models and avatars: 

- In Interface, enable **Settings > Developer Menu** to show the Developer menu. Then, enable **Developer > Render > Enable Procedural Materials**.

-------------------------------------
Making Procedural Shaders
-------------------------------------

Procedural shaders (or simply shaders) are textures that are created by mathematical and algorithmic means. It is a piece of code that is run on the GPU or graphics card. They can provide a range of effects such as making an object look cartoony or simulating a candle flame. If you’ve used programs like Blender or Substance Designer to create material images, then you’ve seen this in action. The difference is that these programs automatically generate the shader code for you. To make custom designs and effects, you will have to dive into the code yourself.

Project Athena has support for vertex and fragment shaders on shape and material entities alongside avatars. These shaders are based on the GLSL shader language, which uses the syntax and features of the C programming language. It does not have support for geometry, tessellation and evaluation, or compute shaders.

This documentation is not intended to be a complete course on how to create a shader. This is an advanced topic that requires good math and programming skills. Many free books are available on the internet that can teach about shaders. `The Book of Shaders <https://thebookofshaders.com/>`_ is one such book that is often cited.

An understanding of how to use Javascript and JSON with Project Athena is important before you dive into this topic. If you intend to create shaders yourself, knowing the C programming language will also be important.

^^^^^^^^^^^^^^^^^^^^^^^^^
Differences Between Athena and GLSL Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^

When exploring shaders online, you may have come across many shader examples. Or you might have seen websites and applications that allow you to experiment with shader code in a live environment. Most of the code from these sources will not work with Project Athena without modification.

The first thing to be aware of is that there are a few shader languages. GLSL is one that is used by OpenGL, and Project Athena’s shaders are based on this language. Another common one is HLSL, which is used often for DirectX programs. Although these languages share a lot of similarities, you cannot use HLSL code in an OpenGL application without modification.

Another consideration is that Project Athena does not expose the full range of what GLSL offers to scripters. Instead, users are offered a subset of GLSL, and a custom set of naming conventions for fragment or vertex components.

^^^^^^^^^^^^^^^^^^^^^^^^^
Basic Method for Using Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^

Shaders are stored as a file. Fragment shaders will typically have the file extension ***.fs** or ***.frag** and vertex shaders will usually have the ***.vs** or ***.vert** file extension. Historically, the ***.fs** and ***.vs** extensions have been used for Project Athena. Using these may serve as a reminder that these shaders are Project Athena specific.

Although you can associate these files with most entities, the original author of Project Athena’s end user shader implementation viewed material entities as the ideal way to apply them to other entities. As a result, this documentation will focus on using shaders with material entities.

If you are unfamiliar with material entities, you can find more information `here <https://docs.projectathena.dev/create/entities/material-entity.html/>`_.

Material entities have data that is stored in the JSON format, and they have a property that is called ``materialData``. The ``materialData`` property will require model and procedural fields. Here is an example::

    {
        "materials": [{
            "model": "hifi_shader_simple",
            "procedural": {
              "version": 3,
              "fragmentShaderURL": "https://gist.githubusercontent.com/MarcusLlewellyn/2726885d4cc8be086a6755f05fbd99ff/raw/rotatecube.fs"
            }
        }]
    }

The ``materialData`` JSON can be applied either via the Project Athena Interface’s edit tools or with a script::

    Entities.addEntity({
    	type: "Material",
    	materialURL: "materialData",
    	priority: 1,
    	materialData: JSON.stringify({
    		materials: {
    			"model": "hifi_shader_simple"
    			"procedural": {
    			  	"version": 2,
    			  	"shaderUrl": "https://gist.githubusercontent.com/SamGondelman/1698eaf73d86d6a0c9238abff0116e8d/raw/1aa938de50c1b6f31af8a122f40a7ce331eeb533/Proceduralv2.fs"
    			}
    		}
    	})
    });
    
You must specify the material "model" as ``hifi_shader_simple`` and provide a shader link. To provide a fragment shader, set ``fragmentShaderURL`` (or ``shaderUrl``). To provide a vertex shader, set ``vertexShaderURL``.

^^^^^^^^^^^^^^^^^^^^^^^^^
Shader Template
^^^^^^^^^^^^^^^^^^^^^^^^^

When you learn about shaders for other applications, the shader may have a function like ``main()`` that is run first. By contrast, Project Athena has a specific function name that must be called. Which function is used depends on which version of the shader you use.

As shaders were developed, features for them evolved a bit over time. As a result, there are several shader versions, and each version has a different call signature. Versions 1 and 2 are the oldest, and will still work. Versions 3 and 4 are the newest and expose more features. Version 4 provided for per-fragment positions, and as it is the most feature complete this documentation will focus on this version.

The most basic template for a shader will look something like this example::

    float getProceduralFragmentWithPosition(inout ProceduralFragmentWithPosition proceduralData) {
        // Setup the initial coordinate and color values.
        vec2 coord = _texCoord0.st;
        vec3 color = vec3(0.0);
     
        // Send out color data to Project Athena's data structure.
        proceduralData.diffuse = color;
     
        // Must always return a value. 0.0 is the default.
        return 0.0;
    }

The function ``getProceduralFragmentWithPosition()`` is the default main entry point for the fragment shader. Because shaders are always read by their compiler from top to bottom, this function must always be the last one in your shader code.

This function also has the parameter ``ProceduralFragmentWithPosition``. This parameter is a data structure that contains entries that correspond to the usual Project Athena materials. The structure is described below::

    struct ProceduralFragmentWithPosition {
        vec3 position; // world space position
        vec3 normal; // world space normal
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
    
^^^^^^^^^^^^^^^^^^^^^^^^^
Global Variables
^^^^^^^^^^^^^^^^^^^^^^^^^

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

    vec3 iResolution;
    vec4 iMouse;
    float iSampleRate;
    vec4 iChannelTime;

The following per-fragment uniforms are also provided::

    vec4 _positionMS; (equal to _position)
    vec4 _positionES; (equal to _eyePosition)
    vec3 _normalMS; (equal to _modelNormal)
    vec3 _normalWS; (equal to _normal)
    vec4 _color;
    vec4 _texCoord01 (also split into vec2_texCoord0 and vec2 _texCoord1)
    
^^^^^^^^^^^^^^^^^^^^^^^^^
Provided Methods, Constants, and Structs
^^^^^^^^^^^^^^^^^^^^^^^^^

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
    float hifi_hash(float n);
    float hifi_noise(in vec2 x);
    float hifi_fbm(in vec2 p);
    float DEFAULT_ROUGHNESS = 0.9;
    float DEFAULT_SHININESS = 10.0;
    float DEFAULT_METALLIC = 0.0;
    vec3 DEFAULT_SPECULAR = vec3(0.1);
    vec3 DEFAULT_EMISSIVE = vec3(0.0);
    float DEFAULT_OCCLUSION = 1.0;
    float DEFAULT_SCATTERING = 0.0;
    vec3 DEFAULT_FRESNEL = DEFAULT_EMISSIVE;

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
    bool cam_isStereo()
    float cam_getStereoSide()
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
    
All Shader Versions
    
    vec3 _normalWS;
    vec3 _normalMS;
    vec4 _color;
    vec2 _texCoord0;
    vec4 _positionMS;
    vec4 _positionES;
    
Shader Version 1::
    
    uniform float iGlobalTime; // shader playback time (in seconds)
    uniform vec3 iWorldScale; // the dimensions of the object being rendered
    
Shader Versions 2, 3, and 4::
    
    uniform float iGlobalTime; // shader playback time (in seconds)
    uniform vec4 iDate;
    uniform int iFrameCount;
    uniform vec3 iWorldPosition; // the position of the object being rendered
    uniform vec3 iWorldScale; // the dimensions of the object being rendered
    uniform mat3 iWorldOrientation; // the orientation of the object being rendered
    uniform vec3 iChannelResolution[4];
    uniform sampler2D iChannel0; // these 4 channels are set by the “channels” section in the userData
    uniform sampler2D iChannel1;
    uniform sampler2D iChannel2;
    uniform sampler2D iChannel3;
    
There are also some global variables that, while recognized, are not implemented::
    
    const vec3 iResolution = vec3(1.0); // Resolution doesn’t make sense in the VR context
    const vec4 iMouse = vec4(0.0); // Mouse functions not enabled currently
    const float iSampleRate = 1.0; // No support for audio input
    const vec4 iChannelTime = vec4(0.0); // No support for video input
    
^^^^^^^^^^^^^^^^^^^^^^^^^
Additional Features
^^^^^^^^^^^^^^^^^^^^^^^^^

As well as the data provided by the global variables, you can also make use of any built in GLSL and noise functions. Some of these are listed here::

    TransformCamera getTransformCamera();
    // Where a TransformCamera is:
    struct TransformCamera {
    mat4 _view;
    mat4 _viewInverse;
    mat4 _projectionViewUntranslated;
    mat4 _projection;
    mat4 _projectionInverse;
    vec4 _viewport;
    vec4 _stereoInfo;
    };

    vec3 getEyeWorldPos()
    bool cam_isStereo()
    float cam_getStereoSide()

    // Noise functions
    float mod289(float x)
    vec2 mod289(vec2 x)
    vec3 mod289(vec3 x)
    vec4 mod289(vec4 x)
    float permute(float x)
    vec3 permute(vec3 x)
    vec4 permute(vec4 x)
    float taylorInvSqrt(float r)
    vec4 taylorInvSqrt(vec4 r)
    vec4 grad4(float j, vec4 ip)
    float snoise(vec4 v)
    float snoise(vec3 v)
    float snoise(vec2 v)
    float hifi_hash(float n)
    float hifi_noise(in vec2 x)
    float hifi_fbm(in vec2 p)
    
-------------------------------------
Vertex Shaders
-------------------------------------
    
A vertex shader template might look like this, but at the very least must implement::

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

-------------------------------------
Procedural and Vertex Shaders
-------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^
Custom uniforms and textures
^^^^^^^^^^^^^^^^^^^^^^^^^

Procedural materials also support up to 4 custom textures and many custom uniforms. These can be defined as follows::

    {
    	materials: {
    		"model": "hifi_shader_simple",
    		"procedural": {
    		    "version": 3,
    		    "shaderUrl": "https://gist.githubusercontent.com/SamGondelman/8bbd39f91d20cab4c75280d9b1cb0764/raw/7930289654ce8309bbe785907f03eabc1dbc6181/Proceduralv3.fs",
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

Supported uniform types are: ``float``, ``vec2``, ``vec3``, and ``vec4`` (multiple values are provided as arrays.)

^^^^^^^^^^^^^^^^^^^^^^^^^
Alpha Effects (Transparency)
^^^^^^^^^^^^^^^^^^^^^^^^^

Shaders that make use of the ``proceduralData.alpha`` value won’t display alpha on its own. In order for a shader’s alpha to be active, the entity it is applied to must first have either its alpha property less than 1.0, or a material property setting opacity to less than 1.0.

^^^^^^^^^^^^^^^^^^^^^^^^^
Debugging Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^

The only way to debug shaders at the moment is to look at the interface’s log file. Shader compilation errors will appear in this log, and can help with locating issues.

Because a user created shader is ultimately embedded in a larger internal shader framework, you’ll notice that an error in a 20 line shader will be reported as a much higher line number, typically greater than 1000. As a result, you will need to locate the shader code that corresponds to your shader within the larger internal shader context.

^^^^^^^^^^^^^^^^^^^^^^^^^
A Cautionary Note on Shaders
^^^^^^^^^^^^^^^^^^^^^^^^^

You may wonder why Project Athena does not simply allow everyone to see shaders by default. Shaders are a very powerful tool, and when used incorrectly, can harm the user experience for everyone on the platform. A poorly written shader or a shader created by a bad actor can slow things down to a crawl or interfere with a user’s view of the virtual world.

Also, Project Athena does not currently support shaders as anything but an experimental feature. Shader support for meshes is an open source contribution and is not maintained or documented by Project Athena.

Shaders are best used as a very strong spice in a recipe. Attempt to keep them small and efficient. Shaders can produce marvelous and mind-blowing effects, but overuse can spoil the desired end effect. If you create a shader that has hundreds of lines of code, consider trimming it down if possible.

If you find yourself in a position where a shader is causing trouble for you, remember that you can disable them in the Project Athena Interface.

