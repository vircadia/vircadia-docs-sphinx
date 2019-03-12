#######################
Host Your Domain
#######################

Depending on your requirements, you can host your domain on your local machine or on cloud servers, such as Amazon EC2. We have a partnership with DigitalOcean so that we can provide you with hosting services if you want to open your domain to a lot of visitors. 

.. contents:: On This Page
    :depth: 2

----------------------------------------
Host Your Domain with DigitalOcean
----------------------------------------

1. Log in or sign up with your High Fidelity username and password on `https://highfidelity.com <https://highfidelity.com>`_.
2. Hover over your username to see the various menu options. Click **Cloud Domains**. You can also go to `https://highfidelity.com/user/cloud_domains <https://highfidelity.com/user/cloud_domains>`_. 

.. image:: _images/cloud-domains.png

3. You'll be redirected to the Cloud Domains. Click 'Create New' to create a new cloud domain.
4. Before you set up a cloud domain, you need to connect your DigitalOcean account. If you don't have one, you can sign up now.   
5. You will be redirected to the DigitalOcean authorization page. Once you've signed in, choose the virtual machine to host your domain. Select the configuration that best suits your needs, keeping in mind that our recommendations are based on the number of users that will be visiting your domain.
6. Next, select the geographical location where you would like to host your server. 
7. Click 'Launch your cloud domain', and then 'Confirm'.  

You will be redirected to your Cloud Domains page, where you will see the domain server you just created being configured. 

.. image:: _images/cloud-do-7.PNG
    
The table below outlines the recommended configuration based on numbers of users.  

+-------+---------------------------------------------------+-----------------+
| Users | DigitalOcean Droplet                              | Estimated Price |
+=======+===================================================+=================+
| 10-15 | 8 GB Memory, 4 vCPUs, 80 GB SSD, 5 TB Transfer    | $40/mo          |
+-------+---------------------------------------------------+-----------------+
| 25-30 | 16 GB Memory, 6 vCPUs, 320 GB SSD, 6 TB Transfer  | $80/mo          |
+-------+---------------------------------------------------+-----------------+
| 40-50 | 32 GB Memory, 8 vCPUs, 640 GB SSD, 7 TB Transfer  | $160/mo         |
+-------+---------------------------------------------------+-----------------+
| 160   | 64 GB Memory, 32 vCPUs, 400 GB SSD, 9 TB Transfer | $640/mo         |
+-------+---------------------------------------------------+-----------------+

--------------------------------------
Configure Your Domain Settings
--------------------------------------

You can configure your domain settings by clicking on the three dots on the right corner and selecting 'Domain Server settings' from the drop down. You will be prompted to `configure the basic server settings <your-domain/configure-settings.html#configure-basic-server-settings>`_. 

.. image:: _images/cloud-do-9.PNG


------------
FAQ
------------

+---------------------------------------+----------------------------------------------------------------------------------------------------------+
| Question                              | Solution                                                                                                 |
+=======================================+==========================================================================================================+
| Why isn’t my domain updating?         | Check if your DigitalOcean account contains the right payment information.                               |
| Why is it stuck on 'updating'?        | If the issue still persists, please contact High Fidelity support.                                       |
+---------------------------------------+----------------------------------------------------------------------------------------------------------+
| Is there a maximum file size for      | Yes. The maximum file size depends on the size of your Droplet. If your file is bigger than your         |
| content archives for my domain?       | Droplet, you can resize your Droplet. Go to your DigitalOcean account, find your Droplet, and            |
|                                       | select resize from the menu on the left.                                                                 |
+---------------------------------------+----------------------------------------------------------------------------------------------------------+
| How can I get into my domain settings | Go to `https://highfidelity.com/user/cloud_domains <https://highfidelity.com/user/cloud_domains>`_.      |
| if I forgot my username and password? | For your domain, click on the three dots on the right corner and select 'Reset Domain Server password'   |
|                                       | from the drop-down. Once your server restarts, click 'Domain Server settings' from the same drop-down.   |
|                                       | You will be prompted to set a new username and password.                                                 |
+---------------------------------------+----------------------------------------------------------------------------------------------------------+
| Can I host assets on my DigitalOcean  | Yes. You can use the Asset Browser to host your assets while hosting your domain on DigitalOcean.        |
| domain like I can host assets on my   |                                                                                                          |
| sandbox’s Asset Browser?              |                                                                                                          |
+---------------------------------------+----------------------------------------------------------------------------------------------------------+
| How do you power cycle your Droplet?  | You can do this through your DigitalOcean account. Log in and select your Droplet. Click 'Power'         |
|                                       | on the menu to the left and then select 'Power Cycle'.                                                   |
+---------------------------------------+----------------------------------------------------------------------------------------------------------+

**See Also**

+ :doc:`Configure Your Domain Settings <your-domain/configure-settings>`
