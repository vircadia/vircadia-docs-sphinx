# OS X Build Guide

This guide will help you build High Fidelity if you’re using a Mac computer. Please read the [general build guide](../) for information on dependencies required for all platforms. We have listed only OS X specific instructions on this page. 

**On This Page:**

+ [Install Homebrew](#1-install-homebrew)
+ [Install Python 3](#2-install-python-3)
+ [Set OpenSSL Directory](#3-set-openssl-directory)
+ [Set Qt Directory](#4-set-qt-directory)
+ [Generate Xcode Files](#5-generate-xcode-files)

#### 1. Install Homebrew 

[Homebrew](https://brew.sh/) is a package manager for OS X. It makes the installation of some High Fidelity dependencies very simple.

```bash
brew install cmake openssl qt
```

#### 2. Install Python 3
Download an install of Python 3.6.6 or higher from [here](https://www.python.org/downloads). Execute the `Update Shell Profile.command` script that is provided with the installer.

#### 3. Set OpenSSL Directory
Assuming you've installed OpenSSL using the Homebrew instructions above, you'll need to set `OPENSSL_ROOT_DIR` so CMake can find your installations.

```
export OPENSSL_ROOT_DIR=/usr/local/Cellar/openssl/1.0.2l
```

>>>>> This uses the version from the Homebrew formula at the time of this writing, and the version in the path will likely change.

#### 4. Set Qt Directory

Assuming you've installed Qt using the Homebrew instructions above, you'll need to set `QT_CMAKE_PREFIX_PATH` so CMake can find your installations.

```
export QT_CMAKE_PREFIX_PATH=/usr/local/Cellar/qt/5.10.1/lib/cmake
```

>>>>> This uses the version from the Homebrew formula at the time of this writing, and the version in the path will likely change.


#### 5. Generate Xcode Files
If Xcode is your editor of choice, you can ask CMake to generate Xcode project files instead of Unix Makefiles.

```bash
cmake .. -G Xcode

```

If CMake complains that Python 3 is missing, you may need to update your CMake binary with the command `brew upgrade cmake`, or by downloading and running the latest CMake installer, depending on how you originally installed CMake.

After running CMake, you will have the make files or Xcode project file necessary to build all of the components. Open the hifi.xcodeproj file, choose `ALL_BUILD` from the **Product > Scheme menu** (or target drop down), and click 'Run'.

If the build completes successfully, you will have built targets for all components located in the `build/${target_name}/Debug` directories.

**See Also**

+ [Build High Fidelity](../)