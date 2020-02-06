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
    
This example no doubt raised questions. Those questions will be addressed in more detail later in this documentation.

The ``materialData`` JSON can be applied either via the Project Athena Interface’s edit tools or with a script.

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