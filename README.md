# Status

![Master CI Deploy](https://github.com/vircadia/vircadia-docs-sphinx/actions/workflows/master_build.yml/badge.svg) ![Master CI Warnings](https://github.com/vircadia/vircadia-docs-sphinx/actions/workflows/master_warnings.yml/badge.svg)

# Overview of Vircadia's Documentation Tools

For Vircadia's main documentation system, we use **Sphinx** to generate it, and a web server to publish/host it. GitHub is a helpful middleman and stores all of the docs.

**Sphinx** is an open-source, robust solution for software documentation that includes features that writers expect, like:

* Single Source Publishing (HTML, PDF, ePub, and more)
* Content reuse through includes
* Multiple mature HTML themes that provide great user experience on mobile and desktop
* Referencing across pages, documents, and projects
* Index and Glossary support
* Localization support

Our main documentation is hosted at https://docs.vircadia.com.

**Please take a moment to thank or donate to the [active maintainers](https://vircadia.com/contributors-redirector/?redirect=vircadia/vircadia-docs-sphinx) of this repository! ❤️**

## Translate

There are two ways to help with the translation of Vircadia's documentation:
* The recommended way is to use https://weblate.vircadia.dev.
* You can also submit updated `.po` files via a pull request.

Please contact Julian Groß or open an issue if you want to translate a language that is not in the system yet.

## Install Sphinx for Local Builds (Windows)

We encourage you to compile the documentation locally on your computer prior to submitting a PR. To install Sphinx:

**Note:** You will need git installed and available to your `cmd`.

1. Run `cmd` as an administrator.
2. Install Chocolatey via the `cmd` (on one line):

    ```
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```
    If you run into any problems with this command, please take a look at https://github.com/chocolatey/choco/wiki/Troubleshooting

3. Install Python 3 via Chocolatey via `cmd`:

    ```
    C:\> choco install python
    ```

4. Restart `cmd` as an admin or refresh with the command:

    ```
    C:\> refreshenv
    ```
5. Install Sphinx video addon:

    ```
    C:\> pip install git+https://github.com/vircadia/video.git
    ```

5. Install Sphinx version 3.x.x in a command line:

    ```
    C:\> pip install -U Sphinx==3.5.4
    ```

6. Install the Markdown parser MyST-Parser:

    ```
    C:\> pip install --upgrade myst-parser
    ```

7. Install our Sphinx theme:

    ```
    C:\> pip install sphinx_rtd_theme
    ```

## Compile Vircadia Documentation Locally

1. Fork and clone https://github.com/vircadia/vircadia-docs-sphinx.
2. Using a command line, cd to your local repository, then the docs folder.
3. Compile with the command `make html`.

The HTML output will be in build\html. Open home.html in a browser to view the docs.

To compile a different language you need an additional set of commands:
- `make gettext` creates gettext files.
- `sphinx-intl update -l xX` will create/update the `.po` translation files.
- `make SPHINXOPTS="-Dlanguage=xX" html` compiles the selected language.

Replace `xX` with your [language code](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-language)

## Using RST

Most of our docs use RST. reStructuredText (RST) is the default plaintext markup language used by Sphinx. It is an extensible markup language, that is fully customizable. To learn more, refer to Sphinx's [reStructuredText Primer](https://www.sphinx-doc.org/en/2.0/usage/restructuredtext/basics.html).
RST should be used for any real documentation, as Markdown only supports very basic directives.
The MyST parser expands Markdown significantly, but RST should still be preferred as writers and translators would need to learn two big markup languages instead of just one.
A valuable resource for RST is the [official documentation](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html).

## Using videos

When adding videos to the documentation, it is important to use h264 *and* vp9 to ensure that they can be played it all major web browsers.
To convert videos and animated images to vp9 you can use following command in ffmpeg:

    ```
    ffmpeg -i INPUTFILE -c:v libvpx-vp9 -b:v 0 -crf 5 -vf "scale=-2:'min(600,ih)'" -cpu-used 5 -row-mt 1 -c:a libopus -b:a 96K _static/videos/OUTPUTFILE.webm
    ```
Or to convert to h264:

    ```
    ffmpeg -i INPUTFILE -c:v libx264 -b:v 0 -crf 18 -vf "scale=-2:'min(600,ih)'" -c:a libfdk_aac -b:a 96K _static/videos/OUTPUTFILE.mp4
    ```
Keep in mind that the `:muted:` property is needed for autoplay in Chrome.
