#####################
Environment variables
#####################

This is a list of all environment variables used in the entire source tree.



------------------------------
Run-time environment variables
------------------------------

+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
| Component          | Location                                               |Name                                             | Purpose                                          |
+====================+========================================================+=================================================+==================================================+
|Assignment Client   | `assignment-client/src/AssignmentClient.cpp`           | `HIFI_AC_PASSWORD`                              |                                                  |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_AC_USERNAME`                              |                                                  |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Domain Server       | `domain-server/src/DomainServer.cpp`                   | `DOMAIN_SERVER_ACCESS_TOKEN`                    |                                                  |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `DOMAIN_SERVER_CLIENT_SECRET`                   |                                                  |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `DOMAIN_SERVER_KEY_PASSPHRASE`                  |                                                  |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/networking/src/DomainHandler.h`             | `HIFI_DOMAIN_SERVER_DTLS_PORT`                  | Override the default DTLS port.                  |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_DOMAIN_SERVER_HTTPS_PORT`                 | Override the default HTTPS web-interface port.   |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_DOMAIN_SERVER_HTTP_PORT`                  | Override the default HTTP web-interface port.    |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_DOMAIN_SERVER_PORT`                       | Override the default port for your Domain server.|
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `VIRCADIA_DOMAIN_SERVER_EXPORTER_PORT`          | Override the default Prometheus statistics       |
|                    |                                                        |                                                 | exporter port.                                   |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `VIRCADIA_DOMAIN_SERVER_METADATA_EXPORTER_PORT` | Override the default metadata exporter port      |
|                    |                                                        |                                                 | for exporting JSON metadata.                     |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|HMD Display Plugin  | `.../display-plugins/hmd/DebugHmdDisplayPlugin.cpp`    | `HIFI_DEBUG_HMD`                                | Enable the HMD debugging mode which emulates an  |
|                    |                                                        |                                                 | HMD view in 2D for desktop testing.              |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Interface           | `interface/src/Application.cpp`                        | `HIFI_DISABLE_WATCHDOG`                         | Disables the watchdog thread that crashes the    |
|                    |                                                        |                                                 | application on deadlock. Also suppresses the     |
|                    |                                                        |                                                 | watchdog log messages.                           |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_FRAMES_FOLDER`                            | Apparently the location where captured frames are|
|                    |                                                        |                                                 | written when Ctrl+Shift+G is pressed.            |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_TESTER`                                   | Enables some sort of test functionality on       |
|                    |                                                        |                                                 | Android                                          |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `QTWEBENGINE_REMOTE_DEBUGGING`                  | Qt debugging feature, starts an HTTP based debug |
|                    |                                                        |                                                 | interface on this port. Must be accessed with    |
|                    |                                                        |                                                 | Chromium.                                        |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `USERNAME`                                      | Windows/Linux system environment variable        |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `interface/src/Menu.cpp`                               | `HIFI_SHOW_DEVELOPER_CRASH_MENU`                | Enables a crash testing menu. Used for testing   |
|                    |                                                        |                                                 | the crash reporter.                              |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `interface/src/main.cpp`                               | `HIFI_ALLOW_MULTIPLE_INSTANCES`                 | Allows multiple instances of Interface to run at |
|                    |                                                        |                                                 | the same time.                                   |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Metaverse           | `libraries/networking/src/MetaverseAPI.cpp`            | `HIFI_METAVERSE_URL`                            | Overrides the metaverse URL.                     |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Nitpick             | `tools/nitpick/src/PathUtils.cpp`                      | `PATH`                                          | System environment variable                      |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `tools/nitpick/src/TestRunnerDesktop.cpp`              | `USERPROFILE`                                   | Windows environment variable                     |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Oculus Plugin       | `plugins/oculus/src/OculusDebugDisplayPlugin.cpp`      | `HIFI_DEBUG_OCULUS`                             |                                                  |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `plugins/oculus/src/OculusHelpers.cpp`                 | `HIFI_DEBUG_OPENVR`                             | Enable the OpenVR plugin to be used with         |
|                    |                                                        |                                                 | an Oculus HMD. (Useful for debugging the OpenVR  |
|                    |                                                        |                                                 | plugin if you have an Oculus HMD but not a       |
|                    |                                                        |                                                 | SteamVR HMD.)                                    |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|OpenGL 4.5 Renderer | `libraries/gpu-gl/src/gpu/gl45/GL45BackendTexture.cpp` | `HIFI_FORCE_MOBILE_TEXTURES`                    |                                                  |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|OpenVR Plugin       | `plugins/openvr/src/OpenVrHelpers.cpp`                 | `HIFI_DEBUG_OPENVR`                             | Enable the OpenVR plugin to be used with         |
|                    |                                                        |                                                 | an Oculus HMD. (Useful for debugging the OpenVR  |
|                    |                                                        |                                                 | plugin if you have an Oculus HMD but not a       |
|                    |                                                        |                                                 | SteamVR HMD.)                                    |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_DISABLE_STEAM_VR_KEYBOARD`                |                                                  |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Plugins             | `libraries/plugins/src/plugins/PluginManager.h`        | `enableScriptingPlugins`                        | Enables custom script plugins                    |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Qt Launcher         | `launchers/qt/src/BuildsRequest.cpp`                   | `HQ_LAUNCHER_BUILDS_URL`                        |                                                  |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `launchers/qt/src/Helper.cpp`                          | `HIFI_METAVERSE_URL`                            |                                                  |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `USERNAME`                                      | Windows/Linux system environment variable        |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `launchers/qt/src/LauncherState.cpp`                   | `HQ_LAUNCHER_BUILD_VERSION`                     |                                                  |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `launchers/qt/src/main.cpp`                            | `HQ_LAUNCHER_BUILD_VERSION`                     |                                                  |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Renderer            | `libraries/gl/src/gl/GLHelpers.cpp`                    | `HIFI_DEBUG_OPENGL`                             |                                                  |
|                    |                                                        +-------------------------------------------------+--------------------------------------------------+
|                    |                                                        | `HIFI_DISABLE_OPENGL_45`                        | Disables the use of OpenGL 4.5 and uses the      |
|                    |                                                        |                                                 | OpenGL 4.1 renderer                              |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/render-utils/src/MeshPartPayload.cpp`       | `HIFI_ENABLE_MATERIAL_PROCEDURAL_SHADERS`       | Commented out, non-functional                    |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/shared/src/RenderForward.h`                 | `HIFI_RENDER_FORWARD`                           | Forces Interface to use the forward renderer     |
|                    |                                                        |                                                 | rather than the deferred renderer                |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Shared              | `libraries/shared/src/LogHandler.cpp`                  | `VIRCADIA_LOG_OPTIONS`                          | Controls logging output on the console.          |
|                    |                                                        |                                                 | `VIRCADIA_LOG_OPTIONS`_                          |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/shared/src/PathUtils.cpp`                   | `HIFI_USE_SOURCE_TREE_RESOURCES`                | Use Qt resources from the tree, rather than the  |
|                    |                                                        |                                                 | compiled resources.rcc                           |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/shared/src/RenderForward.h`                 | `HIFI_RENDER_FORWARD`                           | Forces Interface to use the forward renderer     |
|                    |                                                        |                                                 | rather than the deferred renderer                |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/shared/src/SharedUtil.cpp`                  | `USERNAME`                                      | Windows/Linux environment variable, added to     |
|                    |                                                        |                                                 | application name                                 |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `libraries/shared/src/shared/NsightHelpers.cpp`        | `NSIGHT_LAUNCHED`                               | NVIDIA Nsight is an IDE for 3D development.      |
|                    |                                                        |                                                 | Setting this variable disables the watchdog,     |
|                    |                                                        |                                                 | disables rendering the HUD in the secondary      |
|                    |                                                        |                                                 | camera, disables QML and disables web entities.  |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|Tests               | `tests-manual/render-perf/src/main.cpp`                | `HIFI_RENDER_FORWARD`                           | Forces Interface to use the forward renderer     |
|                    |                                                        |                                                 | rather than the deferred renderer                |
|                    +--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+
|                    | `tests/gpu/src/TextureTest.cpp`                        | `HIFI_KTX_TEST_DIR`                             |                                                  |
+--------------------+--------------------------------------------------------+-------------------------------------------------+--------------------------------------------------+


^^^^^^^^^^^^^^^^^^^^
VIRCADIA_LOG_OPTIONS
^^^^^^^^^^^^^^^^^^^^

Logging to the console can be controlled with the `VIRCADIA_LOG_OPTIONS` variable. It can be set to any comma separated combination of the following options. Case and whitespace are not significant.

* `color` - Force ANSI colors depending on the message's severity.
* `nocolor` - Force ANSI colors off.
* `milliseconds` - Log timestamps with millisecond precision.
* `process_id` - Log the process ID.
* `thread_id` - Log the thread ID.

For example:

    VIRCADIA_LOG_OPTIONS="color, milliseconds"

This will cause logging with millisecond precision, and color coding messages by severity.

    VIRCADIA_LOG_OPTIONS=milliseconds

Will result in only millisecond precision being applied to logging.

Color is enabled by default on Unix if output is being directed to a terminal, and disabled by default on Windows.

----------------------------------
Compile-time environment variables
----------------------------------


Override the default statistics exporter port.

    VIRCADIA_DOMAIN_SERVER_EXPORTER_PORT=<port-number>

---

Override the default metadata exporter port.

    VIRCADIA_DOMAIN_SERVER_METADATA_EXPORTER_PORT=<port-number>
