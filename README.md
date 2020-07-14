# Overview of Vircadia's Documentation Tools

For Vircadia's main documentation system, we use **Sphinx** to generate it, and a web server to publish/host it. GitHub is a helpful middleman and stores all of the docs.

**Sphinx** is an open-source, robust solution for software documentation that includes features that writers expect, like:

* Single Source Publishing (HTML, PDF, ePub, and more)
* Content reuse through includes
* Multiple mature HTML themes that provide great user experience on mobile and desktop
* Referencing across pages, documents, and projects
* Index and Glossary support
* Localization support

Our main documentation is hosted at https://docs.vircadia.dev.

## Translate

There are two ways to help with the translation of Vircadia's documentation:
* The recommended way is to use https://weblate.vircadia.dev.
* You can also submit updated `.po` files via a pull request.

Please contact Julian Groß or open an issue if you want to translate a language that is not in the system yet.

## Install Sphinx for Local Builds

We encourage you to compile the documentation locally on your computer prior to submitting a PR. To install Sphinx:

1. Run cmd as administrator.
2. Install Chocolatey via the cmd (on one line):

    ```
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```
    If you run into any problems with this command, please take a look at https://github.com/chocolatey/choco/wiki/Troubleshooting

3. Install Python 3 via Chocolatey via the cmd:

    ```
    C:\> choco install python
    ```

4. Restart cmd or refresh with the command:

    ```
    C:\> refreshenv
    ```

5. Install Sphinx version 2.4.4 (3.0.0 > is unsupported currently) in a command line:

    ```
    C:\> pip install -U Sphinx==2.4.4
    ```

6. Install the Markdown parser recommonmark:

    ```
    C:\> pip install --upgrade recommonmark
    ```

7. Install our Sphinx theme:

    ```
    C:\> pip install sphinx_rtd_theme
    ```

## Compile Vircadia Documentation Locally

1. Fork and clone https://github.com/kasenvr/vircadia-docs-sphinx.
2. Using a command line, cd to your local repository, then the docs folder.
3. Compile with the command `make html`.

The HTML output will be in build\html. Open home.html in a browser to view the docs.

To compile a different language you need an additional set of commands:
- `make gettext` creates gettext files.
- `sphinx-intl update -l xX` will create/update the `.po` translation files.
- `make SPHINXOPTS="-Dlanguage=xX" html` compiles the selected language.

Replace `xX` with your [language code](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-language)

## Using RST

Most of our docs use RST. reStructuredText (RST) is the default plaintext markup language used by Sphinx. It is an extensible markup language, that is fully customizable. However, we don't (yet) have need of this, and will stick with the default set of directives for Vircadia's documentation. To learn more, refer to Sphinx's [reStructuredText Primer](https://www.sphinx-doc.org/en/2.0/usage/restructuredtext/basics.html).
