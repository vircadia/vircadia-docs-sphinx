## Add new languages

Generate the new language strings:
- `make gettext`
- `sphinx-intl update -l xx` (xx being the sphinx language code)

New languages need to be added manually in a number of locations, so the users can select between them and they can be automatically deployed.
The locations include:
- .github/workflows/master_build.yml
- .github/workflows/master_warnings.yml
- docs/source/home.rst
- docs/source/_templates/versions.html
- git hooks file on the Weblate server `/var/lib/docker/volumes/weblate-docker_weblate-data/_data/vcs/vircadia-documentation/contribute/.git/hooks/post-checkout`

## Weblate info

Weblate is maintained by Julian Groß and set up on its own server inside a Docker container.
The setup does not deviate much from the one outlined in the docs https://docs.weblate.org/en/weblate-4.1.1/admin/install/docker.html
Currently Julian Groß and Dale Glass have full access to the server.
Settings for the container are at `/var/lib/docker/volumes/weblate-docker_weblate-data/_data/settings-override.py`,
`~/weblate-docker/docker-compose-https.override.yml` and `~/weblate-docker/docker-compose.override.yml`

The files currently look as follows:
`/var/lib/docker/volumes/weblate-docker_weblate-data/_data/settings-override.py`:
```
SECURE_HSTS_INCLUDE_SUBDOMAINS=True

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 6,
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

SENTRY_DSN = "https://REDACTED@sentry.vircadia.dev/4"
```

`~/weblate-docker/docker-compose-https.override.yml`:
```
version: '3'
services:
  weblate:
    environment:
      WEBLATE_EMAIL_HOST: mail.verumdesign.com
      WEBLATE_EMAIL_HOST_USER: weblate@vircadia.dev
      WEBLATE_EMAIL_HOST_PASSWORD: REDACTED
      WEBLATE_SERVER_EMAIL: weblate@vircadia.dev
      WEBLATE_DEFAULT_FROM_EMAIL: weblate@vircadia.dev
      WEBLATE_ALLOWED_HOSTS: weblate.vircadia.dev,94.130.76.142,localhost
      WEBLATE_ADMIN_PASSWORD: REDACTED
      WEBLATE_ADMIN_EMAIL: REDACTED
      WEBLATE_DEBUG: 0
      WEBLATE_ENABLE_HTTPS: 1
  https-portal:
    environment:
      DOMINS: 'weblate.vircadia.dev -> https://weblate.vircadia.dev'
```

`~/weblate-docker/docker-compose.override.yml`:
```
version: '3'
services:
  weblate:
    ports:
      - 80:8080
      - 443:4443
    environment:
      WEBLATE_EMAIL_HOST: mail.verumdesign.com
      WEBLATE_EMAIL_HOST_USER: weblate@vircadia.dev
      WEBLATE_EMAIL_HOST_PASSWORD: REDACTED
      WEBLATE_SERVER_EMAIL: weblate@vircadia.dev
      WEBLATE_DEFAULT_FROM_EMAIL: weblate@vircadia.dev
      WEBLATE_ALLOWED_HOSTS: weblate.vircadia.dev,94.130.76.142,localhost
      WEBLATE_ADMIN_PASSWORD: REDACTED
      WEBLATE_ADMIN_EMAIL: REDACTED
      WEBLATE_DEBUG: 0
      WEBLATE_ENABLE_HTTPS: 1
```

The Weblate container runs as a service via `/etc/systemd/system/docker.weblate.service`
```
[Unit]
Description=Weblate Service
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
Restart=always
WorkingDirectory=/root/weblate-docker/
#ExecStartPre=-/usr/bin/docker exec %n stop
ExecStart=/usr/local/bin/docker-compose up

[Install]
WantedBy=default.target
```

Currently an SMTP server maintained by Kalila gets used for sending emails to registered users.
Weblate reads the gettext PO files from `docs/source/locales/*/LC_MESSAGES/*.po`
It is set up to automatically push daily commits via `https://JulianGro:REDACTED@github.com/vircadia/vircadia-docs-sphinx.git`

Git hooks takes care of updating the language files on checkout.

The file `/var/lib/docker/volumes/weblate-docker_weblate-data/_data/vcs/vircadia-documentation/contribute/.git/hooks/post-checkout` looks as follows:
```
#!/bin/bash
(
date
cd docs
make gettext
sphinx-intl update -l de
sphinx-intl update -l es
sphinx-intl update -l fr
sphinx-intl update -l jp
git commit -a -m "Update translation files"
) |& tee .git/git_hook_output.log
```
For it to function make sure that all dependencies are installed in the Weblate container.
```
docker-compose exec --user root weblate bash
apt install make gettext
python3 -m pip install --upgrade pip
python3 -m pip install git+https://github.com/vircadia/video.git
python3 -m pip install -U Sphinx==3.5.4
python3 -m pip install --upgrade myst-parser
python3 -m pip install sphinx_rtd_theme
python3 -m pip install sphinx-intl
```
Git hooks log file is located at `/var/lib/docker/volumes/weblate-docker_weblate-data/_data/vcs/vircadia-documentation/contribute/.git/git_hook_output.log`

As there is partially private data (like email addresses and passwords) on the server, there is no public backups or similar.
