# Host a Domain from a Local or Cloud Linux Server

The Vircadia packages can help you get your own domain up and running quickly.

## Installation

You can run these same commands on an existing Vircadia domain to upgrade it if the original domain was installed using the package. Packages are currently available for the following distributions:

### Ubuntu Server 18.04 LTS

```sh
wget https://cdn.vircadia.com/dist/domain-server/ubuntu/vircadia-server_2021.1.1-eos-20210405-1751a59-0ubuntu1-1_amd64.deb
sudo apt-get update && sudo apt-get install ./vircadia-server_2021.1.1-eos-20210405-1751a59-0ubuntu1-1_amd64.deb
```

### Amazon Linux 2

```sh
sudo yum install https://cdn.vircadia.com/dist/domain-server/amazon-linux/vircadia-server-2021.1.1_EOS_20210405_1751a59-1.amzn2.x86_64.rpm
```

### Unlisted Distribution

If you do not see your distribution listed here, you may compile your own server from source using the [Vircadia builder](https://github.com/vircadia/vircadia-builder).
    
## Configuration

The installation packages will create a domain at the default port location and configure a service to keep it running on that machine.

Connect a web browser to the server at port 40100. (If you are on the machine that the server is running on, this would be http://localhost:40100) Complete the initial setup wizard and you should have a functioning domain.

## Networking

A Vircadia domain reserves a range of four ports to operate on, usually starting at 40100. (Note that the encrypted ports may not be implemented yet.) These ports are:
 - 40100 (+0) : (tcp) administrative http connection
 - <del>40101 (+1): (tcp) administrative https (encrypted) connection</dev>
 - 40102 (+2): (udp) main connection from clients
 - <del>40103 (+3): (udp) main connection from clients (encrypted)</dev>

Generally speaking, only port 40102 must be publicly exposed to permit others to connect to a domain.

In addition there are six "assignment clients" that must run in order for the domain to be operational.  These clients run alongside the domain server and must be able to connect with any outside user.  These clients are:
- **asset-server**: stores object data to download to the user
- **audio-mixer**: controls what each user would hear
- **avatar-mixer**: allows users to see each other
- **entity-script-server**: runs actions inside the domain
- **entity-server**: describes the location of each object in the domain
- **messages-mixer**: passes messages between users in the domain

These assignment clients use UDP connections on a port number assigned by the operating system at launch (within [the ephemeral port range](https://en.wikipedia.org/wiki/Ephemeral_port)).

## Files

The program files are installed in /opt/vircadia:
 - **/opt/vircadia** contains the executables
 - **/opt/vircadia/lib** contains libraries required for operation
 - **/opt/vircadia/plugins** is currently used for audio codecs
 - **/opt/vircadia/resources** is required for the administrative website

The executables in this folder (with the exception of <code>new-server</code>) cannot be launched from the command prompt without first setting <code>LD_LIBRARY_PATH=/opt/vircadia/lib</code>.

The file <code>/etc/opt/vircadia/default.conf</code> contains any environment variables necessary to running the domain.

All content is stored under <code>/var/lib/vircadia/default</code>.  All files underneath <code>/var/lib/vircadia</code> are owned by the user <code>vircadia</code>, which is also the user that runs all domain-related processes.

## Services

The installation packages setup the following systemd services to manage the Vircadia domain:
- **vircadia-domain-server@default.service**: Manages the core domain server
- **vircadia-assignment-client@default.service**: Spawns and manages the assignment clients
- **vircadia-server@default.target**: Controls startup and shutdown of the above services

The <code>vircadia-server@default.target</code> service is the only one that is set to auto-start. Starting or stopping it will bring the other two services down.

The first two services log a large amount of data to their service journal. Checking their logs (via <code>systemctl status</code>) is a good way to ensure they are operating properly.

## Multiple domains

The installation package is configured to permit multiple domains to run on a single server at different port numbers. New servers can be created using the following command:

```sh
/opt/vircadia/new-server <name> <base-port>
```

where <code>name</code> is a word used to name and manage the domain and <code>base-port</code> must be the the first of a range of four contiguous port numbers not overlapping with any other use on the system.

Assuming you created a new server with the name **second-bite**, this would setup the following:
 - Environment variables in <code>/etc/opt/vircadia/**second-bite**.conf</code>
 - Content stored in <code>/var/lib/vircadia/**second-bite**</code>
 - Services launched as <code>vircadia-domain-server@**second-bite**.service</code>, <code>vircadia-assignment-client@**second-bite**.service</code>, and <code>vircadia-server@**second-bite**.target</code>
 
## Legacy Services

There are a number of tweaks that are made to the default configuration to simplify storage and the ability to run multiple domains on one server. In case you would like to remove this logic and run the servers closer to how the original *High Fidelity* domain servers were running, this is provided as an option.
 - Systemd services named <code>vircadia-domain-server.service</code>, <code>vircadia-assignment-client.service</code>, and <code>vircadia-server.target</code> *(without the @name)* have simplified configuration
 - No file is provided to specify environment variables for the server
 - Content would be stored in <code>/var/lib/vircadia/.local</code>
