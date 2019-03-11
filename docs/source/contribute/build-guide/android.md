# Android Build Guide

This guide will help you build High Fidelity for Android devices. Please read the [general build guide](../) for information on dependencies required for all platforms. Only Android specific instructions are found in this file.

**On This Page:**

+ [Android Dependencies](#android-dependencies)
    + [Gradle](#gradle)
    + [Android Studio](#android-studio)
+ [Prepare Environment](#prepare-environment)
+ [Build and Run](#build-and-run)

## Android Dependencies

You will need the following tools to build our Android targets.
* [Gradle](https://gradle.org/install)
* [Android Studio](https://developer.android.com/studio/index.html)

### Gradle

Install Gradle version 4.1 or higher. Following the instructions to install via [SDKMAN!](http://sdkman.io/install.html) is recommended.

Once you've installed Gradle, set up the machine-specific properties: 
1. Create a `gradle.properties` file in $HOME/.gradle. Edit the file to contain the following code:
```bash
HIFI_ANDROID_PRECOMPILED=<your_home_directory>/Android/hifi_externals
```

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Do not use $HOME for the path. It must be a fully qualified path name.</p>
</div>

### Android Studio

Download the Android Studio installer and run it. Once installed, at the welcome screen, click configure in the lower right corner and select SDK manager.

From the SDK Platforms tab, select API levels 24 and 26.

From the SDK Tools tab select the following:

* Android SDK Build-Tools
* GPU Debugging Tools
* CMake (even if you have a separate CMake installation)
* LLDB
* Android SDK Platform-Tools
* Android SDK Tools
* NDK (even if you have the NDK installed separately)

## Prepare Environment

1. Clone the hifi repository: 
    ```bash
    git clone https://github.com/highfidelity/hifi.git
    ```
2. Enter repository's `android` directory: 
    ```bash
    cd hifi/android
    ```
3. Execute a Gradle pre-build setup. This step only needs to be done once.
    ```bash
    gradle setupDependencies
    ```

## Build and Run
1. Open Android Studio.
2. Choose 'Open Existing Android Studio Project'.
3. Navigate to the hifi repository and choose the android folder and select 'OK'.
4. If Android Studio asks you if you want to use the Gradle wrapper, select cancel and tell it where your local Gradle installation is. If you used SDKMAN to install Gradle, it will be located in $HOME/.sdkman/candidates/gradle/current.
5. From the 'Build' menu, select 'Make Project'.
6. Once the build completes, from the 'Run' menu select 'Run' App.

**See Also**

+ [Build High Fidelity](../)