#######################
View Domain Server Logs
#######################

Your domain server logs list the different events relevant to your Vircadia domain. These can help you troubleshoot any issues with your domain and understand how the different parts of your domain communicate with each other.

Server logs are stored directly on the server and can be accessed as follows:

* **Windows**: Logs can be found in the directory ``%AppData%\Local\Vircadia\Server Console\logs``
* **Linux**: Logs can be accessed by running the command ``journalctl -u vircadia-domain-server@default.service`` for the domain server, or ``journalctl -u vircadia-assignment-client@default.service`` for the assignment client.
