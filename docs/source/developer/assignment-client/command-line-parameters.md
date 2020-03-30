# Command Line Parameters

You can launch an assignment-client with these parameters.

Displays help information

    -h, --help

Displays version information

    -v, --version

Assignment client type

    -t <type>

* 0 = audio-mixer
* 1 = avatar-mixer
* 2 = agent
* 3 = asset-server
* 4 = message-mixer
* 5 = entity-script-server
* 6 = entity-server

Assignment pool

    --pool <pool>

Assignment client UDP port

    -p <port>

Wallet destination

    --wallet <wallet-uuid>

Assignment server hostname

    -a <hostname>

Assignment server port

    --server-port <port>

Number of children to fork

    -n <child-count>

Minimum number of children

    --min <child-count>

Maximum number of children

    --max <child-count>

Assignment client monitor port

    --monitor-port <port>

HTTP status server port

    --http-status-port <port>

Directory to store logs

    --log-directory <path>

PID of the parent process

    --parent-pid <pid>
