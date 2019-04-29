#############################
Run Your Domain Using Docker
#############################

You can run your High Fidelity domain using Docker containers. Containers are more flexible and lightweight than a virtual machine. When you launch a container, you're running an image of the file system at a particular instance. So you will have to update the image with every latest version of High Fidelity. 

.. contents:: On This Page
    :depth: 2


-------------------------------
Requirements
-------------------------------

Before you create a container for your domain, you will need to:

+ `Install and configure Docker <https://docs.docker.com/install/>`_. 
+ `Install docker compose <https://docs.docker.com/compose/install/#install-compose>`_. 


--------------------------------
Run Your Domain in a Container
--------------------------------

A Docker container is isolated from the rest of your system. This means that you will have to copy and communicate specific data to the container. 

1. Create an empty folder with two files: '.env' and 'hifi.yml'.
2. The .env file contains the version of the image you want to use. To it, add the following line:

   ``HIFI_VERSION=0.82.0``

   This is the tag and needs to be updated with the release of the latest version of High Fidelity. 
3. Next, you'll need to add information about your domain in the 'hifi.yml'.::

    version: "3.6"
    services:
      domaina:
        hostname: hifi-domain-a
        image: highfidelity/hifi:${HIFI_VERSION}
        ports:
          - "40100:40100"
          - "40102:40102/udp"
          - "48000-48006:48000-48006/udp"
        volumes:
          - "hifiVol1:/root/.local/share/High Fidelity"
    volumes:
      hifiVol1: {}



Here, you're passing High Fidelity's version number. You are also exposing the required ports for your domain to communicate with the network and let other users visit. 

.. Commenting adding running multiple domains in containers until we can confirm it works.

  
  4. If you want to run more than one domain on a single machine, you can use multiple docker containers. Add the following to the 'hifi.yml' file.

  ::

  version: "3.6"
  services:
    domaina:
      hostname: hifi-domain-a
      image: highfidelity/hifi:${HIFI_VERSION}
      ports: 
    	- "40100:40100"
    	- "40102:40102/udp"
    	- "48000-48006:48000-48006/udp"
      volumes:
      - "hifiVol1:/root/.local/share/High Fidelity"
    domainb:
      hostname: hifi-domain-b
      image: highfidelity/hifi:${HIFI_VERSION}
      ports:
      	- "40101:40101"
      	- "40102:40102/udp"
      	- "48000-48006:48000-48006/udp"
       volumes:
        - "hifiVol2:/root/.local/share/High Fidelity"
    myotherdomain:
     hostname: hifi-domain-c
      image: highfidelity/hifi:${HIFI_VERSION}
      ports:
       	- "40103:40103"
      	- "40102:40102/udp"
      	- "48000-48006:48000-48006/udp"
      volumes:
        - "hifiVol3:/root/.local/share/High Fidelity"
  volumes:
    hifiVol1: {}
    hifiVol2: {}
    hifiVol3: {}


5. Go to the directory in the command line tool and run the image::

    docker-compose pull # Pulls changes to files, creates volumes if they dont exist, and automatically 
    docker-compose up -d # Runs all compose files at the same time, if some changes, then turns them off and replaces them with the containers created during pull.



6. To stop running your container, run the following in the command line tool::

    docker-compose stop

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Update Your Container to the Latest Version
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can update your container when a new version is released by changing the version number in the .env file.



**See Also**

+ :doc:`Host Your Domain<host-your-domain>`
+ :doc:`Set Up Your Domain<your-domain>`
