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

Make sure that all dependencies are installed in the weblate container.
```
docker-compose exec --user root weblate bash
apt install make gettext
python3 -m pip install --upgrade pip
python3 -m pip install -U Sphinx==2.4.4
python3 -m pip install --upgrade recommonmark
python3 -m pip install sphinx_rtd_theme
python3 -m pip install sphinx-intl
```
Git hooks log file is located at `/var/lib/docker/volumes/weblate-docker_weblate-data/_data/vcs/vircadia-documentation/contribute/.git/git_hook_output.log`