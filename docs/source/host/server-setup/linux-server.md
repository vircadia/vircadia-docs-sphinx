# Host a Domain from a Local or Cloud Linux Server

The Vircadia packages can help you get up and running your own domain quickly.

## Installation

Packages are currently available for the following distributions:

### Ubuntu Server 18.04 LTS

```sh
wget https://cdn.vircadia.com/dist/domain-server/ubuntu/vircadia-server_2020.2.0-asteria-20200606-db9139f-0ubuntu1-1_amd64.deb
sudo apt-get update && sudo apt-get install ./vircadia-server_2020.2.0-asteria-20200606-db9139f-0ubuntu1-1_amd64.deb
```

### Amazon Linux 2

```sh
sudo yum install https://cdn.vircadia.com/dist/domain-server/amazon-linux/athena-server-0.86.0_K2_20200402_76aff7a-1.amzn2.x86_64.rpm
```
    
## Configuration

The installation packages will create a domain at the default port location and configure a service to keep it running on that machine.

Connect a web browser to the server at port 40100. (If you are on the machine that the server is running on, this would be http://localhost:40100.) Complete the initial setup wizard and you should have a functioning domain.

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

The program files are installed in /opt/athena:
 - **/opt/athena** contains the executables
 - **/opt/athena/lib** contains libraries required for operation
 - **/opt/athena/plugins** is currently used for audio codecs
 - **/opt/athena/resources** is required for the administrative website

The executables in this folder (with the exception of <code>new-server</code>) cannot be launched from the command prompt without first setting <code>LD_LIBRARY_PATH=/opt/athena/lib</code>.

The file <code>/etc/opt/athena/default.conf</code> contains any environment variables necessary to running the domain.

All content is stored under <code>/var/lib/athena/default</code>.  All files underneath <code>/var/lib/athena</code> are owned by the user <code>athena</code>, which is also the user that runs all domain-related processes.

## Services

The installation packages setup the following systemd services to manage the Athena domain:
- **athena-domain-server@default.service**: Manages the core domain server
- **athena-assignment-client@default.service**: Spawns and manages the assignment clients
- **athena-server@default.target**: Controls startup and shutdown of the above services

The <code>athena-server@default.target</code> service is the only one that is set to auto-start. Starting or stopping it will bring the other two services down.

The first two services log a large amount of data to their service journal. Checking their logs (via <code>systemctl status</code>) is a good way to ensure they are operating properly.

## Multiple domains

The installation package is configured to permit multiple domains to run on a single server at different port numbers.  New servers can be created using the following command:

    /opt/athena/new-server <name> <base-port>

where <code>name</code> is a word used to name and manage the domain and <code>base-port</code> must be the the first of a range of four contiguous port numbers not overlapping with any other use on the system.

Assuming you created a new server with the name **second-bite**, this would setup the following:
 - Environment variables in <code>/etc/opt/athena/**second-bite**.conf</code>
 - Content stored in <code>/var/lib/athena/**second-bite**</code>
 - Services launched as <code>athena-domain-server@**second-bite**.service</code>, <code>athena-assignment-client@**second-bite**.service</code>, and <code>athena-server@**second-bite**.target</code>
 
## Legacy Services

There are a number of tweaks that are made to the default configuration to simplify storage and the ability to run multiple domains on one server.  In case you would like to remove this logic and run the servers closer to how the original *High Fidelity* domain servers were running, this is provided as an option.
 - Systemd services named <code>athena-domain-server.service</code>, <code>athena-assignment-client.service</code>, and <code>athena-server.target</code> *(without the @name)* have simplified configuration
 - No file is provided to specify environment variables for the server
 - Content would be stored in <code>/var/lib/athena/.local</code>
