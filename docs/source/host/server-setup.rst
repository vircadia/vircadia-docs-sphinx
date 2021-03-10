.. warning::
    This document is outdated.
    FIXME: we do not have a partnership with DigitalOcean

######################
Set up a Domain Server
######################

Depending on your requirements, you can host your domain on a physical computer (by turning it into a local server) or on cloud servers. In general, we recommend using local servers for private events and gatherings, and cloud services for larger public venues. To help with hosting your domains, we have a partnership with DigitalOcean to provide affordable, integrated cloud domain services for your use.

.. rst-class:: list-table

+----------------------+-------------------------------------------+---------------------------------------------------+
|                      | Pros                                      | Cons                                              |
+======================+===========================================+===================================================+
| Local Server         | * No hosting or maintenance fees          | * Hardware and network must be able to            |
|                      | * Control over the hosted environment     |   handle visitor load and content set.            |
|                      | * Ideal for private domains               |   Depending on the complexity of your             |
|                      |                                           |   domain set and the number of visitors           |
|                      |                                           |   you plan to have, you may need more than        |
|                      |                                           |   the minimum requirements                        |
|                      |                                           | * Responsible for security and maintenance        |
|                      |                                           |   of your server                                  |
|                      |                                           | * Requires manual installation and configuration  |
|                      |                                           |   of Vircadia's Sandbox and domain                |
+----------------------+-------------------------------------------+---------------------------------------------------+
| DigitalOcean Droplet | * No need to have expensive hardware      | * Monthly subscription cost                       |
|                      |   on hand to host a domain                | * Service outages may occur with the cloud        |
|                      | * Ability to easily re-scale servers,     |   provider                                        |
|                      |   adjusting memory or transfer to         |                                                   |
|                      |   support more or less visitors           |                                                   |
|                      | * A secure environment separate from      |                                                   |
|                      |   your personal computer, protecting      |                                                   |
|                      |   yourself from hacking attempts or       |                                                   |
|                      |   griefers                                |                                                   |
|                      | * Ideal for large, public domains for     |                                                   |
|                      |   hosting events or open gathering areas  |                                                   |
+----------------------+-------------------------------------------+---------------------------------------------------+

Once you've decided what hosting platform to use, you're ready to set it up:

.. toctree::
    :maxdepth: 2
    :titlesonly:

    Host a Domain from a Local Windows Server <server-setup/windows-server>
    Host a Domain from a Local, Remote, *or* Cloud Linux Server <server-setup/linux-server>

