# Environment variables

This is a list of all the environment variables used in the entire source tree. 


## List

| Component          | Location                                               |Name                                             | Purpose                |
|--------------------|--------------------------------------------------------|-------------------------------------------------| ---------------------- | 
|Assignment Client   | `assignment-client/src/AssignmentClient.cpp`           | `HIFI_AC_PASSWORD`                              | |
|Assignment Client   | `assignment-client/src/AssignmentClient.cpp`           | `HIFI_AC_USERNAME`                              | |
|Domain Server       | `domain-server/src/DomainServer.cpp`                   | `DOMAIN_SERVER_ACCESS_TOKEN`                    | |
|Domain Server       | `domain-server/src/DomainServer.cpp`                   | `DOMAIN_SERVER_CLIENT_SECRET`                   | |
|Domain Server       | `domain-server/src/DomainServer.cpp`                   | `DOMAIN_SERVER_KEY_PASSPHRASE`                  | |
|Domain Server       | `libraries/networking/src/DomainHandler.h`             | `HIFI_DOMAIN_SERVER_DTLS_PORT`                  | |
|Domain Server       | `libraries/networking/src/DomainHandler.h`             | `HIFI_DOMAIN_SERVER_HTTPS_PORT`                 | |
|Domain Server       | `libraries/networking/src/DomainHandler.h`             | `HIFI_DOMAIN_SERVER_HTTP_PORT`                  | |
|Domain Server       | `libraries/networking/src/DomainHandler.h`             | `HIFI_DOMAIN_SERVER_PORT`                       | |
|Domain Server       | `libraries/networking/src/DomainHandler.h`             | `VIRCADIA_DOMAIN_SERVER_EXPORTER_PORT`          | |
|Domain Server       | `libraries/networking/src/DomainHandler.h`             | `VIRCADIA_DOMAIN_SERVER_METADATA_EXPORTER_PORT` | |
|HMD Display Plugin  | `libraries/display-plugins/src/display-plugins/hmd/DebugHmdDisplayPlugin.cpp` | `HIFI_DEBUG_HMD`         | |
|Interface           | `interface/src/Application.cpp`                        | `HIFI_DISABLE_WATCHDOG`                         | Disables the watchdog thread that crashes the application on deadlock. Also suppresses the watchdog log messages. |
|Interface           | `interface/src/Application.cpp`                        | `HIFI_FRAMES_FOLDER`                            | Apparently the location where captured frames are written when Ctrl+Shift+G is pressed. |
|Interface           | `interface/src/Application.cpp`                        | `HIFI_TESTER`                                   | Enables some sort of test functionality on Android |
|Interface           | `interface/src/Application.cpp`                        | `QTWEBENGINE_REMOTE_DEBUGGING`                  | Qt debugging feature, starts an HTTP based debug interface on this port. Must be accessed with Chromium. |
|Interface           | `interface/src/Application.cpp`                        | `USERNAME`                                      | Windows/Linux system environment variable |
|Interface           | `interface/src/Menu.cpp`                               | `HIFI_SHOW_DEVELOPER_CRASH_MENU`                | Enables a crash testing menu. Used for testingg the crash reporter. |
|Interface           | `interface/src/main.cpp`                               | `HIFI_ALLOW_MULTIPLE_INSTANCES`                 | Allows multiple instances of Interface to run at the same time. |
|Metaverse           | `libraries/networking/src/MetaverseAPI.cpp`            | `HIFI_METAVERSE_URL`                            | |
|Nitpick             | `tools/nitpick/src/PathUtils.cpp`                      | `PATH`                                          | System environment variable |
|Nitpick             | `tools/nitpick/src/TestRunnerDesktop.cpp`              | `USERPROFILE`                                   | Windows environment variable |
|Oculus Plugin       | `plugins/oculus/src/OculusDebugDisplayPlugin.cpp`      | `HIFI_DEBUG_OCULUS`                             | |
|Oculus Plugin       | `plugins/oculus/src/OculusHelpers.cpp`                 | `HIFI_DEBUG_OPENVR`                             | |
|OpenGL 4.5 Renderer | `libraries/gpu-gl/src/gpu/gl45/GL45BackendTexture.cpp` | `HIFI_FORCE_MOBILE_TEXTURES`                    | |
|OpenVR Plugin       | `plugins/openvr/src/OpenVrHelpers.cpp`                 | `HIFI_DEBUG_OPENVR`                             | |
|OpenVR Plugin       | `plugins/openvr/src/OpenVrHelpers.cpp`                 | `HIFI_DISABLE_STEAM_VR_KEYBOARD`                | |
|Plugins             | `libraries/plugins/src/plugins/PluginManager.h`        | `enableScriptingPlugins`                        | Enables custom script plugins |
|Qt Launcher         | `launchers/qt/src/BuildsRequest.cpp`                   | `HQ_LAUNCHER_BUILDS_URL`                        | |
|Qt Launcher         | `launchers/qt/src/Helper.cpp`                          | `HIFI_METAVERSE_URL`                            | |
|Qt Launcher         | `launchers/qt/src/Helper.cpp`                          | `USERNAME`                                      | Windows/Linux system environment variable |
|Qt Launcher         | `launchers/qt/src/LauncherState.cpp`                   | `HQ_LAUNCHER_BUILD_VERSION`                     | |
|Qt Launcher         | `launchers/qt/src/main.cpp`                            | `HQ_LAUNCHER_BUILD_VERSION`                     | |
|Renderer            | `libraries/gl/src/gl/GLHelpers.cpp`                    | `HIFI_DEBUG_OPENGL`                             | |
|Renderer            | `libraries/gl/src/gl/GLHelpers.cpp`                    | `HIFI_DISABLE_OPENGL_45`                        | Disables the use of OpenGL 4.5 and uses the OpenGL 4.1 renderer |
|Renderer            | `libraries/render-utils/src/MeshPartPayload.cpp`       | `HIFI_ENABLE_MATERIAL_PROCEDURAL_SHADERS`       | Commented out, non-functional |
|Renderer            | `libraries/shared/src/RenderForward.h`                 | `HIFI_RENDER_FORWARD`                           | Forces Interface to use the forward renderer rather than the deferred renderer |
|Shared              | `libraries/shared/src/LogHandler.cpp`                  | `VIRCADIA_LOG_OPTIONS`                          | Controls logging output on the console |
|Shared              | `libraries/shared/src/PathUtils.cpp`                   | `HIFI_USE_SOURCE_TREE_RESOURCES`                | Use Qt resources from the tree, rather than the compiled resources.rcc |
|Shared              | `libraries/shared/src/RenderForward.h`                 | `HIFI_RENDER_FORWARD`                           | Forces Interface to use the forward renderer rather than the deferred renderer |
|Shared              | `libraries/shared/src/SharedUtil.cpp`                  | `USERNAME`                                      | Windows/Linux environment variable, added to application name |
|Shared              | `libraries/shared/src/shared/NsightHelpers.cpp`        | `NSIGHT_LAUNCHED`                               | NVIDIA Nsight is an IDE for 3D development. Setting this variable disables the watchdog, disables rendering the HUD in the secondary camera, disables QML and disables web entities.  |
|Tests               | `tests-manual/render-perf/src/main.cpp`                | `HIFI_RENDER_FORWARD`                           | Forces Interface to use the forward renderer rather than the deferred renderer |
|Tests               | `tests/gpu/src/TextureTest.cpp`                        | `HIFI_KTX_TEST_DIR`                             | |





