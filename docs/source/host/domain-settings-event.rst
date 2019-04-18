#############################################
Best Practices For Hosting Events 
#############################################

If you want to host an event in High Fidelity, you will need to modify your domain settings to ensure you can host a large number of people and load all your domain content. You will also have to consider securing your domain so that your content is safe and other users have a pleasant and memorable experience. 

Depending on the type of event you're hosting, determine the following:

1. The number of users you are expecting in your domain. 
2. The content you will be adding to the domain. 

We've listed some guidelines you can follow when you set up your domain for an event. 

.. note:: Keep in mind that domain settings will vary depending on your requirements. We've listed the best practices, you can tailor these to suit your needs.


1. `Host your domain <host-your-domain.html>`_: If you're expecting a large number of users, we recommend hosting your domain on a virtual machine. You'll need to determine the size of the virtual machine you want to host your domain on. This varies depending on the number of users you're expecting and the content in your domain. 
2. `Set Up User Permissions <secure-domain.html#set-user-permissions>`_: It is good practice to set up user permissions and create entity filters so that users cannot create or edit entities in your domain. You can keep your domain clutter free and keep users from modifying the existing domain content. 
3. Lock down avatar size: Domains can have loading issues if avatars keep changing their sizes. When you lock down an avatar size, you are ensuring that users cannot affect your domain by changing their avatar size beyond a limit. 
4. Create audio attenuation zones: Depending on the type of event you're hosting, you will need to create audio attenuation zones. These zones control how users hear audio. For example, if you're having an event with two hosts on stage, the hosts and audience members should hear the hosts louder than everyone else. You can set up two attenuation zones, one for the stage and the other for the audience.
5. Whitelist scripts: This step ensures that only whitelisted scripts can run in the domain. You are avoiding risking running any unauthorized scripts that could affect your domain and any users present.
6. Use only `server scripts <../script/get-started-with-scripting.html#types-of-scripts>`_: Local scripts can slow down load times for a domain. Use server scripts instead.
7. `Bake your content <manage-assets.html#bake-an-asset>`_: Loading models in High Fidelity involves real-time rendering (drawcalls), which means images are produced and analyzed in real-time. Depending on the complexity of the models, the drawcalls can differ. You can reduce the drawcalls and optimize the rendering process using baking.


**See Also**


+ :doc:`Host Your Domain <host-your-domain>`
+ `Set Up User Permissions <secure-domain.html#set-user-permissions>`_
+ :doc:`Configure Your Domain Settings <your-domain/configure-settings>`
+ :doc:`Manage Your Assets <manage-assets>`
+ :doc:`Tutorial: Set Up A Theater Domain <theater-domain-tutorial>`