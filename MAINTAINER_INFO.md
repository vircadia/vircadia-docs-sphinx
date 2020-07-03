## Add new languages

Generate the new language strings:
- `make gettext`
- `sphinx-intl update -l xx` (xx being the sphinx language code)

New languages need to be added manually in a number of locations, so the users can select between them and they can be automatically deployed.
The locations include:
- .github/workflows/master_build.yml
- docs/source/home.rst
- docs/source/_templates/versions.html
- git hooks file on the weblate server `/var/lib/docker/volumes/weblate-docker_weblate-data/_data/vcs/vircadia-documentation/contribute/.git/hooks/post-rewrite`