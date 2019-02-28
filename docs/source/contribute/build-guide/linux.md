# Linux Build Guide

This guide will help you build High Fidelity if you’re using a Linux system. Please read the [general build guide](../) for information on dependencies required for all platforms. We've listed only Linux specific instructions here.

**On This Page:**

+ [Install Qt5 Dependencies](#install-qt5-dependencies)
+ [Ubuntu 18.04  Build Guide](#ubuntu-1804-build-guide)
	+ [Prepare Environment](#prepare-environment)
	+ [Get Code and Checkout the Tag You Need](#get-code-and-checkout-the-tag-you-need)
	+ [Compile](#compile)
	+ [Run the Software](#run-the-software)
	+ [Troubleshoot Issues with Nvidia Driver Library Version](#troubleshoot-issues-with-nvidia-driver-library-version)


## Install Qt5 Dependencies

If you choose not to install Qt5 via a package manager that handles dependencies for you, you may be missing some Qt5 dependencies. On Ubuntu, the following additional packages are required:

```bash
libasound2 libxmu-dev libxi-dev freeglut3-dev libasound2-dev libjack0 libjack-dev libxrandr-dev libudev-dev libssl-dev
```

## Ubuntu 18.04 Build Guide

Add the universe repository. *This is not enabled by default on the server edition*
```bash
sudo add-apt-repository universe
sudo apt-get update
```

### Prepare Environment
1. Install Qt 5.10.1:
	```bash
	wget http://debian.highfidelity.com/pool/h/hi/hifiqt5.10.1_5.10.1_amd64.deb
	sudo dpkg -i hifiqt5.10.1_5.10.1_amd64.deb
	```
2. Install build dependencies:
	```bash
	sudo apt-get install libasound2 libxmu-dev libxi-dev freeglut3-dev libasound2-dev libjack0 libjack-dev libxrandr-dev libudev-dev libssl-dev zlib1g-dev
	```
3. To compile Interface on a server (for the domain server and assignment clients) you must install:
	```bash
	sudo apt -y install libpulse0 libnss3 libnspr4 libfontconfig1 libxcursor1 libxcomposite1 libxtst6 libxslt1.1
	```
4. Install build tools:
	```bash
	sudo apt install cmake
	```
5. Install Python 3:
	```bash
	sudo apt install python3.6
	```
    
### Get Code and Checkout the Tag You Need

1. Clone this repository:
	```bash
	git clone https://github.com/highfidelity/hifi.git
	```
2. You need to compile the latest release version of High Fidelity. If you just clone the repo, you might have an unstable build. To compile a release version, checkout the tag you need getting a list of all tags:
	```bash
	git fetch -a
	git tag | sort -V
	```
3. Then checkout last tag with:
	```bash
	git checkout tags/v0.71.0
	```
    
### Compile

1. Create the build directory (the following commands assume you're in the parent directory):
	```bash
	mkdir -p hifi/build
	cd hifi/build
	```
2. Prepare makefiles:
	```bash
	cmake -DQT_CMAKE_PREFIX_PATH=/usr/local/Qt5.10.1/5.10.1/gcc_64/lib/cmake..
	```

3. Start compilation of the entire platform, which includes the Sandbox and Interface::
	```bash
	make domain-server assignment-client interface
	```
4. To compile only Interface (without the Sandbox):
	```
	make interface
	```
In a server, it does not make sense to compile Interface.

### Run the Software

Run the following commands in a distinct terminal window.
1. Run the domain server:
	```bash
	./domain-server/domain-server
	```
2. Run the assignment client:
	```bash
	./assignment-client/assignment-client -n 6
	```
3. Run Interface:
	```bash
	./interface/interface
	```
4. Go to localhost in Interface.

### Troubleshoot Issues with Nvidia Driver Library Version

Ubuntu 18.04 is facing issues with the NVidia driver library version. You can workaround this issue:

1. Uninstall incompatible nvtt libraries.
	```
    sudo apt-get remove libnvtt2 libnvtt-dev
    ```
2. Install `libssl1.0-dev`.
	```
    sudo apt-get -y install libssl1.0-dev
    ```
3. Clone castano nvidia-texture-tools.
	```
	git clone https://github.com/castano/nvidia-texture-tools
	cd nvidia-texture-tools/
	```
4. In your github repository:
   1. In file **VERSION** set `2.2.1`
   2. In file **configure**:
   		1. set `build="release"`
   		2. set `-DNVTT_SHARED=1`

   3. Configure, build and install:

	  ```
	  ./configure
	  make
	  sudo make install
	  ```
5. Link compiled files.
	```bash
	sudo ln -s /usr/local/lib/libnvcore.so /usr/lib/libnvcore.so
	sudo ln -s /usr/local/lib/libnvimage.so /usr/lib/libnvimage.so
	sudo ln -s /usr/local/lib/libnvmath.so /usr/lib/libnvmath.so
	sudo ln -s /usr/local/lib/libnvtt.so /usr/lib/libnvtt.so
	```

6. Run Interface

   ```
   interface/interface
   ```

**See Also**

+ [Build High Fidelity](../)
