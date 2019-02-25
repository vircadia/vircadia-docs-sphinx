# Windows 64-bit Build Guide

This guide will help you build High Fidelity if you’re using a system with Windows 64 bit. The prerequisites will require about 10 GB of space on your drive.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>We use Visual Studio 2017 and Qt 5.10.1. If you are upgrading from Visual Studio 2013 and Qt 5.6.2, do a clean uninstall of those versions before going through this guide.  </p>
</div>

**On This Page:**

+ [Install Visual Studio 2017 and Python](#1-install-visual-studio-2017-and-python)
  + [Alternate Install of Python](#1a-alternate-install-of-python)
  + [Install CMake](#2-install-cmkae)
  + [Install Qt](#3-install-qt)
  + [Set the Qt Environment Variable](#4-set-the-qt-environment-variable)
  + [Run CMake to Generate Build Files](#5-run-cmake-to-generate-build-files)
  + [Make a Build](#6-make-a-build)
  + [Test Interface](#7-test-interface)
+ [Troubleshooting](#troubleshooting)
  + [Common Errors and Solutions](#common-errors-and-solutions)

#### 1. Install Visual Studio 2017 and Python

If you don’t have the Community or Professional edition of Visual Studio 2017:

*  Download [Visual Studio Community 2017](https://www.visualstudio.com/downloads/).
*  When selecting components, check 'Desktop development with C++'. 
*  On the Summary toolbar, check 'Windows 8.1 SDK and UCRT SDK' and 'VC++ 2015.3 v140 toolset (x86,x64)'. 
*  If you don't have a python development environment installed, check 'Python Development'.

If you already have Visual Studio installed and need to add Python:

* Go to **Control Panel > Add or Remove Programs**.
* Find the 'Microsoft Visual Studio Installer'. 
* Select and click 'Modify'. 
* In the installer, select 'Modify' again. 
* Check 'Python Development' and allow the installer to apply the changes.

#### 1a. Alternate Install of Python
If you don't wish to use the Python installation bundled with Visual Studio, you can download the installer [here](https://www.python.org/downloads). Ensure you get version 3.6.6 or higher.

#### 2. Install CMake

* Download and install the latest version of CMake 3.9. Download the file named  win64-x64 Installer from the [CMake Website](https://cmake.org/download/). You can access the installer on this [3.9 Version](https://cmake.org/files/v3.9/) page. 
* During installation, check **Add CMake to system PATH for all users** when prompted.

#### 3. Install Qt

* Download and install the [Qt Open Source Online Installer](https://www.qt.io/download-open-source/?hsCtaTracking=f977210e-de67-475f-a32b-65cec207fd03%7Cd62710cd-e1db-46aa-8d4d-2f1c1ffdacea). 
* While installing, check the following components under Qt 5.10.1: **msvc2017 64-bit**, **Qt WebEngine**, and **Qt Script (Deprecated)**.

Note: Installing the Sources is optional but recommended if you have room for them (~2GB).

#### 4. Set the Qt Environment Variable

Go to **Control Panel > System > Advanced System Settings > Environment Variables > New...**  (or search “Environment Variables” in Start Search). 
* Set "Variable name": `QT_CMAKE_PREFIX_PATH`
* Set "Variable value":  `C:\Qt\5.10.1\msvc2017_64\lib\cmake`


#### 5. Run CMake to Generate Build Files  

Run Command Prompt from Start. Type and run the following commands:
```bash
cd "%HIFI_DIR%"
mkdir build
cd build
cmake .. -G "Visual Studio 15 Win64"
```
where `%HIFI_DIR%` is the directory for the High Fidelity repository.

#### 6. Make a Build

* Open `%HIFI_DIR%\build\hifi.sln` using Visual Studio.
* Change the Solution Configuration (located on the menu ribbon under the menu bar next to the green play button) from **Debug** to **Release** for best performance. 
* Run **Build > Build Solution** from the menu.

#### 7. Test Interface

Create an environment variable named `_NO_DEBUG_HEAP`. Go to **Control Panel > System > Advanced System Settings > Environment Variables > New...** (or search “Environment Variables” in Start Search). 

* Set Variable name: `_NO_DEBUG_HEAP`
* Set Variable value: `1`

In Visual Studio, right-click "Interface" under the Apps folder in Solution Explorer and select "Set as Startup Project". Run  **Debug > Start Debugging** from the menu bar.

Now, you should have a full build of High Fidelity and be able to run the Interface using Visual Studio. Please check our documentation for more information on the programming workflow.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>You can also run Interface by launching it from command line or File Explorer from `%HIFI_DIR%\build\interface\Release\interface.exe`</p>
</div>

## Troubleshooting
If you face any problems once you start trying to generate build files using CMake, there are couple of things you could try to solve any issues.

* Delete your locally cloned copy of the highfidelity repository.
* Restart your computer.
* Download the [repository](https://github.com/highfidelity/hifi) again.
* Try to redo [step 7](#7-test-interface).

#### Common Errors and Solutions

* If CMake gives you the same error message after the build fails, remove `CMakeCache.txt` from the `%HIFI_DIR%\build` directory.
* If CMake cannot find OpenSSL, remove `CMakeCache.txt` from the `%HIFI_DIR%\build` directory. Verify that your `VCPKG_ROOT` environment variable is set and pointing to the correct location. Verify that the file `${VCPKG_ROOT}/installed/x64-windows/include/openssl/ssl.h` exists.
* If Qt is throwing an error, make sure you have the correct version (5.10.1) installed and the `QT_CMAKE_PREFIX_PATH` environment variable is set correctly.



**See Also**

+ [Build High Fidelity](../)

  