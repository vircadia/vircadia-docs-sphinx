# Host a Domain from a Local or Cloud Linux Server

The Vircadia packages can help you get your own domain up and running quickly.

## Installation

You can run these same commands on an existing Vircadia domain to upgrade it if the original domain was installed using the package. Packages are currently available for the following distributions:

### Ubuntu Server 18.04 LTS

```sh
wget https://cdn.vircadia.com/dist/domain-server/ubuntu/vircadia-server_2022.1.0-selene-20211126-aabcdea-0ubuntu1-1_amd64.deb
sudo apt-get update && sudo apt-get install ./vircadia-server_2022.1.0-selene-20211126-aabcdea-0ubuntu1-1_amd64.deb
```

### Unlisted Distribution

If you do not see your distribution listed here, you may compile your own server from source using the [Vircadia builder](https://github.com/vircadia/vircadia-builder).

## Configuration

The installation packages will create a domain at the default port location and configure a service to keep it running on that machine.

For the list of network ports that you will need to open and manage, see [here](../configure-settings/network-settings).

Connect a web browser to the server at port 40100. (If you are on the machine that the server is running on, this would be http://localhost:40100) Complete the initial setup wizard and you should have a functioning domain.

## Files and Server Configuration

The program files are installed in /opt/vircadia:
 - **/opt/vircadia** contains the executables
 - **/opt/vircadia/lib** contains libraries required for operation
 - **/opt/vircadia/plugins** is currently used for audio codecs
 - **/opt/vircadia/resources** is required for the administrative website

The executables in this folder (with the exception of <code>new-server</code>) cannot be launched from the command prompt without first setting <code>LD_LIBRARY_PATH=/opt/vircadia/lib</code>.

The file <code>/etc/opt/vircadia/default.conf</code> contains any environment variables necessary to running the domain.

All content is stored under <code>/var/lib/vircadia/default</code>. All files underneath <code>/var/lib/vircadia</code> are owned by the user <code>vircadia</code>, which is also the user that runs all domain-related processes.

## Services

The installation packages setup the following systemd services to manage the Vircadia domain:
- **vircadia-domain-server@default.service**: Manages the core domain server
- **vircadia-assignment-client@default.service**: Spawns and manages the assignment clients
- **vircadia-server@default.target**: Controls startup and shutdown of the above services

The <code>vircadia-server@default.target</code> service is the only one that is set to auto-start. Starting or stopping it will bring the other two services down.

The first two services log a large amount of data to their service journal. Checking their logs (via <code>systemctl status</code>) is a good way to ensure they are operating properly.

## Multiple Domains

The installation package is configured to permit multiple domains to run on a single server at different port numbers. New servers can be created using the following command:

```sh
/opt/vircadia/new-server <name> <base-port>
```

where <code>name</code> is a word used to name and manage the domain and <code>base-port</code> must be the the first of a range of four contiguous port numbers not overlapping with any other use on the system.

Assuming you created a new server with the name **my-server-two**, this would setup the following:
 - Environment variables in <code>/etc/opt/vircadia/**my-server-two**.conf</code>
 - Content stored in <code>/var/lib/vircadia/**my-server-two**</code>
 - Services launched as <code>vircadia-domain-server@**my-server-two**.service</code>, <code>vircadia-assignment-client@**my-server-two**.service</code>, and <code>vircadia-server@**my-server-two**.target</code>

## Deleting a Vircadia Server

Uninstall the package.

```sh
# Ubuntu
# Note: 'apt-get purge' will remove configuration files as well. Use 'apt-get remove' to keep them.
sudo apt-get purge vircadia-server
# Amazon Linux 2
sudo yum remove vircadia-server
```

### Deleting a Domain from a Multiple Domain Installation

Find the name of the domain that you want to remove.

```sh
sudo ls ~vircadia
```

Pick the name of the domain that you want to remove from the list and then stop it.

```sh
sudo systemctl stop vircadia-server@<INSERT NAME HERE>.target
```

Disable the service for the domain.

```sh
sudo systemctl disable vircadia-server@<INSERT NAME HERE>.target
```

Remove the associated environment variables.

```sh
sudo rm /etc/opt/vircadia/<INSERT NAME HERE>.conf
```

Remove all data and configurations.

```sh
sudo rm -rf ~vircadia/<INSERT NAME HERE>
sudo rm -rf /var/lib/vircadia/<INSERT NAME HERE>
```

## Legacy Services

There are a number of tweaks that are made to the default configuration to simplify storage and the ability to run multiple domains on one server. In case you would like to remove this logic and run the servers closer to how a Vircadia server compiled from source would run, this is provided as an option.
 - Systemd services named <code>vircadia-domain-server.service</code>, <code>vircadia-assignment-client.service</code>, and <code>vircadia-server.target</code> *(without the @name)* have simplified configuration
 - No file is provided to specify environment variables for the server
 - Content would be stored in <code>/var/lib/vircadia/.local</code>
