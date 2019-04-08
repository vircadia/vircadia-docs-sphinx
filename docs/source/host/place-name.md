# Add a Place Name

All domains have a _place name_, which is an easy way for visitors to enter a domain. When you enter the place name into the [GoTo app](../explore/travel.html#goto-app), you will teleport to that domain. 

By default, every domain is assigned a random place name (such as "blue-bandwidth-86201"). While you are welcome to continue using this place name, purchasing a custom place name makes it easier for visitors to come to your virtual world. 

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>To enter a domain, you must have the proper permissions. Simply knowing the place name is not sufficient to visit domains.</p>
</div>

**On This Page:**
+ [Purchase a Place Name](#purchase-a-place-name)
+ [Add a Custom Place Name to Your Domain](#connect-a-place-name-to-your-domain)
+ [Connect New and Existing Place Names](#connect-new-and-existing-place-names)
+ [Add Your Place to the GoTo Directory](#add-your-place-to-the-goto-directory)

## Purchase a Place Name

You will need to have a High Fidelity account to purchase a Place Name. Place Names are US $20/year, and you need to renew the purchase every year to continue using it. 

1. Go to [https://highfidelity.com/user/places](https://highfidelity.com/user/places) to purchase a place name. If you're not logged in, you will be prompted to do so.
2. Click 'Create a Place Name'.
3. Type in your new Place Name. Place Names must be 4-64 characters in length. Letters, numbers and hyphens are allowed. You can use a Place Name that is currently not purchased. 
4. Click 'Checkout Now'.
5. Enter your credit card number, PayPal account information or a coupon code to complete the purchase.

## Add a Custom Place Name to Your Domain

After you purchase a Place Name, you need to connect it to your domain. If you do not already have a domain, make sure you [set one up](your-domain).

1. Go to your [domain settings](http://localhost:40100/settings/). 
2. In the 'Metaverse/Networking' section, click 'Advanced Settings'. 
3. Copy the Domain ID. 
3. Go to [https://highfidelity.com/user/places](https://highfidelity.com/user/places) and edit the Place Name you purchased. 
4. Paste the domain ID you copied in the 'Points To' field. 
5. Enter a ['Path'](your-domain/configure-settings.html#set-an-entry-path-for-users), 'Description', and 'Preview Image' (optional).
6. Click 'Update Place'.
7. Next, configure your domain server to use the domain of your choice (in case it already isn't configured). Right-click the High Fidelity icon on your system tray or top menu bar, and click 'Settings'.
8. In your domain server settings, under the 'Metaverse/Networking' section, click 'Advanced Settings'. 
9. Under 'Domain ID' click 'Choose from my domains' and select the domain of your choice. 
10. You and other users will now be able to access your domain using Interface by typing the Place Name into the *Address Bar*. You may also use the URL `hifi://MyPlaceName`.



## Connect New and Existing Place Names

When you purchase a new Place Name, if you connect it with your domain ID, users will not be able to access your domain with the old Place Name. You can avoid this by connecting the newly purchased Place Name to the existing one. 

1. Go to https://highfidelity.com/user/places. Edit the Place Name you purchased. 
2. Add the existing Place Name under the 'Points To' field. 
3. Enter a ['Path'](your-domain/configure-settings.html#set-an-entry-path-for-users), 'Description', and 'Preview Image' (optional).
4. Click 'Update Place'.
5. You and other users will now be able to access your domain using Interface by typing the Place Name into the *Address Bar*. You may also use the URL `hifi://MyPlaceName`.



## Add Your Place to the GoTo Directory

To see your Place listed in the GoTo directory in Interface, you will need to modify some settings and permissions. 

1. If you're hosting your domain on a cloud service, open the settings [here](https://highfidelity.com/user/cloud_domains). 
2. Go to **Settings > Security** and scroll down to the 'Domain-Wide User Permissions'. The 'Standard Permissions' table allows you to set the type of users and their permissions.
3. Under 'Connect', select the user type you want to allow to enter your domain: anonymous, friends, localhost, and logged in. Your Place will be visible in the GoTo directory to the user types selected. For example, if you checked 'logged-in' under 'Connect', all users logged in to High Fidelity can view your Place in the GoTo Directory. But a user who hasn't logged-in will not see your Place in the directory.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>You can only list a domain that has a place name in the GoTo directory.</p>
</div>

**See Also**

+ [Set an Entry Path for Users](your-domain/configure-settings.html#set-an-entry-path-for-users)
+ [Configure Basic Server Settings](your-domain/configure-settings.html#configure-basic-server-settings)