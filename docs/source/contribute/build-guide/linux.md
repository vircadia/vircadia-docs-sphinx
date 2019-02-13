# Linux Build Guide

This guide will help you build High Fidelity if you’re using a Linux system. Please read the [general build guide](../) for information on dependencies required for all platforms. We've listed only Linux specific instructions here. 

**On This Page:**

+ [Install Qt5 Dependencies](#install-qt5-dependencies)
+ [Ubuntu 18.04  Build Guide](#ubuntu-1804-build-guide)
  + [Prepare Environment](#prepare-environment)
  + [Get Code and Checkout the Tag You Need](#get-code-and-checkout-the-tag-you-need)
  + [Compile](#compile)
  + [Run the Software](#run-the-software)
+ [Ubuntu 16.04 Build Guide](#ubuntu-1604-build-guide)
  + [Install in Linux Server](#install-in-linux-server)


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
	sudo apt-get install libasound2 libxmu-dev libxi-dev freeglut3-dev
	libasound2-dev libjack0 libjack-dev libxrandr-dev libudev-dev
	libssl-dev
	```
3. To compile interface in a server you must install:
	```bash
	sudo apt -y install libpulse0 libnss3 libnspr4 libfontconfig1
	libxcursor1 libxcomposite1 libxtst6 libxslt1.1
	```
4. Install build tools:
	```bash
	sudo apt install cmake
	```
5. Install Python 3:
	```bash
	sudo apt-get install python3.6
	```
### Get Code and Checkout the Tag You Need

1. Clone this repository:
	```bash
	git clone https://github.com/highfidelity/hifi.git
	```
2. To compile a RELEASE version checkout the tag you need getting a list of all tags:
	```bash
	git fetch -a
	git tag
	```
3. Then checkout last tag with:
	```bash
	git checkout tags/v0.71.0
	```
### Compile

1. Create the build directory:
	```bash
	mkdir -p hifi/build
	cd hifi/build
	```
2. Prepare makefiles:
     ```bash
     cmake 		 
     -DQT_CMAKE_PREFIX_PATH=/usr/local/Qt5.10.1/5.10.1/gcc_64/lib/cmake..
     ```
  ```
3. Start compilation and get a cup of coffee:
	```bash
	make domain-server assignment-client interface
  ```
In a server, it does not make sense to compile Interface.

### Run the Software

1. Running the domain server:
	```bash
	./domain-server/domain-server
	```
2. Running assignment client:
	```bash
	./assignment-client/assignment-client -n 6
	```
3. Running Interface:
	```bash
	./interface/interface
	```
4. Go to localhost in the running Interface.

## Ubuntu 16.04 Build Guide
### Install in Linux Server
Install the deb packages of High Fidelity domain server and assignment client:
```
sudo su -
apt-get -y update
apt-get install -y software-properties-common
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 15FF1AAE
add-apt-repository "deb http://debian.highfidelity.com stable main"
apt-get -y update
apt-get install -y hifi-domain-server
apt-get install -y hifi-assignment-client
```

When installing master/dev builds, the packages are slightly different and you just need to change the last 2 steps to:
```
apt-get install -y hifi-dev-domain-server
apt-get install -y hifi-dev-assignment-client
```

Domain server and assignment clients should already be running. The processes are controlled via:
```
systemctl start hifi-domain-server
systemctl stop hifi-domain-server
```

Once the machine is setup and processes are running, you should ensure that your firewall exposes port 40100 on TCP and all UDP ports. This will get your domain up and running and you could connect to it (for now) by using High Fidelity Interface and typing in the IP for the place name. (Further customizations can be done via http://IPAddress:40100).

The server always depends on both hifi-domain-server and hifi-assignment-client running at the same time.
As an additional step, you should ensure that your packages are automatically updated when a new version goes out. You could, for example, set the automatic update checks to happen every hour (though this could potentially result in the domain being unreachable for a whole hour by new clients when they are released - adjust the update checks accordingly).
To do this you can modify /etc/crontab by adding the following lines
```
0 */1 * * * root apt-get update
1 */1 * * * root apt-get install --only-upgrade -y hifi-domain-server
2 */1 * * * root apt-get install --only-upgrade -y hifi-assignment-client
```

**See Also**

+ [Build High Fidelity](../)