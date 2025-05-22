# Web fun running things

## Install

Make sure you have apache. If not, you can load the folder into vscode
and let it run locally rather than do fancy stuff.

If going with apache http server (httpd) running locally, there are two methods
of accomplishing this:

1. ``apachectl``, which is an indirect controller and requires the modification of the root ``httpd.conf`` file
2. ``httpd``, which is a direct execution of the server and can use a specified ``httpd.conf`` with ``-f``

Within the ``httpd.conf`` file being modified, specify
* DocumentRoot "/path/to/web/root"
    * Along with this, first exclude access to all other directories with 
    ```
    <Directory />
        AllowOverride none
        Require all denied
    </Directory>
    ```
    Followed by allowing and granting access to desired directories. eg.)
    ```
    <Directory "/path/to/web/root">
        Options Indexes FollowSymLinks
        AllowOverride none
        Require all granted
    </Directory>
    ```

## Running
### Apache server
To execute the apache http server, you need to have privileges to run the executables and
open network ports on the given device. This can be either with a web user:group
combo or as root, which should pass the ownership to a web user:group with a proper config.

With the apachectl route,
```
apachectl -k start/stop/restart
```

With the httpd route,
```
httpd [-f confFile] -k start/stop/restart
```

^the above apachectl and http executables assume that you have those in path 
to execute

### VSCode

Just open the folder LUL

VSCode has internal tools to host a web server and link together the project
heirarchy so you don't have to do it explicitly.
