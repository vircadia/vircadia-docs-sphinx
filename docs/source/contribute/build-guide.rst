##########################
Build High Fidelity
##########################

This guide details instructions for building High Fidelity on your system. If you're looking for build guides specific to the OS of your preference, check out:

.. toctree::
    :maxdepth: 2
    :titlesonly:

    Windows 64-bit Build Guide <build-guide/windows>
    OS X Build Guide<build-guide/os-x>
    Linux Build Guide <build-guide/linux>
    Android Build Guide <build-guide/android>

.. contents:: On This Page
    :depth: 2

-----------------------
Dependencies
-----------------------

+------------------------------------------------+---------------+
| Dependency                                     | Version       |
+================================================+===============+
| `CMake <https://cmake.org/download>`_          | 3.9           |
+------------------------------------------------+---------------+
| `Qt <https://www.qt.io/download-open-source>`_ | 5.10.1        |
+------------------------------------------------+---------------+
| `Python <https://www.python.org/downloads>`_   | 3.6 or higher |
+------------------------------------------------+---------------+

----------------------------------------
CMake External Project Dependencies
----------------------------------------

These dependencies will be downloaded, built, linked, and included by CMake where we require them. They should not be installed manually. The CMakeLists files that handle grabbing each of the external dependencies can be found in the `cmake/externals folder <https://github.com/highfidelity/hifi/tree/master/cmake/externals>`_. The resulting downloads, source files, and binaries will be placed in the ``build/ext`` folder in the subfolders for each external project.

+----------------------------------------------------------+--------------------+
| Dependency                                               | Version            |
+==========================================================+====================+
| `Bullet Physics Engine                                   | 2.83               |
| <https://github.com/bulletphysics/bullet3/releases>`_    |                    |
+----------------------------------------------------------+--------------------+
| `gim                                                     | 0.9.8              |
| <https://glm.g-truc.net/0.9.8/index.html>`_              |                    |
+----------------------------------------------------------+--------------------+
| `Oculus SDK                                              | 1.11 (Win32) |     |
| <https://developer.oculus.com/downloads>`_               | 0.5 (Mac)          |
+----------------------------------------------------------+--------------------+
| `OpenVR                                                  | 1.0.6 (Win32 only) |
| <https://github.com/ValveSoftware/openvr>`_              |                    |
+----------------------------------------------------------+--------------------+
| `Polyvox                                                 | 0.2.1              |
| <http://www.volumesoffun.com>`_                          |                    |
+----------------------------------------------------------+--------------------+
| `QuaZip                                                  | 0.7.3              |
| <https://sourceforge.net/projects/quazip/files/quazip>`_ |                    |
+----------------------------------------------------------+--------------------+
| `SDL2                                                    | 2.0.3              |
| <https://www.libsdl.org/download-2.0.php>`_              |                    |
+----------------------------------------------------------+--------------------+
| `Intel Threading Building Blocks                         | 4.3                |
| <https://www.threadingbuildingblocks.org>`_              |                    |
+----------------------------------------------------------+--------------------+
| `vcpkg                                                   |                    |
| <https://github.com/highfidelity/vcpkg>`_                |                    |
+----------------------------------------------------------+--------------------+
| `VHACD                                                   |                    |
| <https://github.com/virneo/v-hacd>`_                     |                    |
+----------------------------------------------------------+--------------------+
| `zlib                                                    | 1.28 (Win32 only)  |
| <http://www.zlib.net>`_                                  |                    |
+----------------------------------------------------------+--------------------+
| `nvtt                                                    | 2.1.1 (customized) |
| <https://github.com/highfidelity/nvidia-texture-tools>`_ |                    |
+----------------------------------------------------------+--------------------+

These are not placed in your normal build tree when doing an out of source build, so they do not need to be re-downloaded and re-compiled every time the CMake build folder is cleared. If you want to force a re-download and re-compile of a specific external, you can simply remove that directory from the appropriate subfolder in ``build/ext``. Should you want to force a re-download and re-compile of all externals, just remove the ``build/ext`` folder.

^^^^^^^^^^^^^^^^^^
CMake
^^^^^^^^^^^^^^^^^^

High Fidelity uses CMake to generate build files and project files for your platform.

^^^^^^^^^^^^^^^^^^
Qt
^^^^^^^^^^^^^^^^^^

In order for CMake to find the Qt5 find modules, you will need to set a ``QT_CMAKE_PREFIX_PATH`` environment variable pointing to your Qt installation.

This can either be entered directly into your shell session before you build or in your shell profile (e.g.: ~/.bash_profile, ~/.bashrc, ~/.zshrc - this depends on your shell and environment).

The path it needs to be set to will depend on where and how Qt5 was installed. For example:

.. code:: 

    export QT_CMAKE_PREFIX_PATH=/usr/local/Qt5.10.1/5.10.1/gcc_64/lib/cmake
    export QT_CMAKE_PREFIX_PATH=/usr/local/qt/5.10.1/clang_64/lib/cmake/
    export QT_CMAKE_PREFIX_PATH=/usr/local/Cellar/qt5/5.10.1/lib/cmake
    export QT_CMAKE_PREFIX_PATH=/usr/local/opt/qt5/lib/cmake

^^^^^^^^^^^^^^^^^^^^^^
Vcpkg
^^^^^^^^^^^^^^^^^^^^^^

High Fidelity uses vcpkg to download and build dependencies. You do not need to install vcpkg.

Building the dependencies can be lengthy and the resulting files will be stored in your OS temp directory. However, those files can potentially get cleaned up by the OS. In order to avoid this and having to redo the lengthy build step, you can set the following environment variable:

``export HIFI_VCPKG_BASE=/path/to/directory``

Where ``/path/to/directory`` is the path to a directory where you wish the build files to get stored.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Generating Build Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a build directory in the root of your checkout and run the CMake build from there. This will keep the rest of the directory clean.

.. code:: 

    mkdir build
    cd build
    cmake ..

If cmake gives you the same error message repeatedly after the build fails (e.g. you had a typo in the ``QT_CMAKE_PREFIX_PATH`` that you fixed but the ``.cmake`` files still cannot be found), try removing ``CMakeCache.txt``.

^^^^^^^^^^^^^^^^^^^^^
Variables
^^^^^^^^^^^^^^^^^^^^^

Any variables that need to be set for CMake to find dependencies can be set as ENV variables in your shell profile, or passed directly to CMake with a ``-D`` flag appended to the ``cmake ..`` command.

For example, to pass the ``QT_CMAKE_PREFIX_PATH`` variable during build file generation:

.. code:: 

    cmake .. -DQT_CMAKE_PREFIX_PATH=/usr/local/qt/5.6.1/lib/cmake

^^^^^^^^^^^^^^^^^^^^^^^^^^
Finding Dependencies
^^^^^^^^^^^^^^^^^^^^^^^^^^

The following applies for dependencies we do not grab via CMake ExternalProject such as OpenSSL, or for dependencies you have opted not to grab as a CMake ExternalProject (via ``-DUSE_LOCAL_$NAME=0``). The list of dependencies we grab by default as external projects can be found in the `CMake External Project Dependencies <#cmake-external-project-dependencies>`_ section.

You can point our `Cmake find modules <https://github.com/highfidelity/hifi/tree/master/cmake/modules>`_ to the correct version of dependencies by setting one of the three following variables to the location of these dependencies.

In the examples below, the variable ``$NAME`` would be replaced by the name of the dependency in uppercase, and ``$name`` would be replaced by the name of the dependency in lowercase (ex: ``OPENSSL_ROOT_DIR``, ``openssl``).

- ``$NAME_ROOT_DIR`` - pass this variable to Cmake with the ``-DNAME_ROOT_DIR= flag`` when running CMake to generate build files.
- ``$NAME_ROOT_DIR`` - set this variable in your ``ENV``.
- ``HIFI_LIB_DIR`` - set this variable in your ENV to your High Fidelity lib folder, should contain a folder '$name'.

-------------------------
Optional Components
-------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^
Build Options
^^^^^^^^^^^^^^^^^^^^^^^^^

The following build options can be used when running CMake:

- BUILD_CLIENT
- BUILD_SERVER
- BUILD_TESTS
- BUILD_TOOLS

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Developer Build Options
^^^^^^^^^^^^^^^^^^^^^^^^^^^

- USE_GLES
- DISABLE_UI

^^^^^^^^^^^^^^^^^^^^^^^^^^
Devices
^^^^^^^^^^^^^^^^^^^^^^^^^^

You can support external input/output devices such as Leap Motion, MIDI, and more by adding each individual SDK in the visible building path. Refer to the readme file available in each device folder in `interface/external/ <https://github.com/highfidelity/hifi/tree/master/interface/external>`_ for the requirements for each device.

**See Also**

- :doc:`Windows 64-bit Build Guide <build-guide/windows>`
- :doc:`OS X Build Guide <build-guide/os-x>`
- :doc:`Linux Build Guide <build-guide/linux>`
- :doc:`Android Build Guide <build-guide/android>`