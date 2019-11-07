# Overview of HiFi's Documentation Tools

For High Fidelity's main documentation system, we use **Sphinx** to generate it, and **Read the Docs** to publish/host it. GitHub is a helpful middleman and stores all of the docs.

**Sphinx** is an open-source, robust solution for software documentation that includes features that writers expect, like:

* Single Source Publishing (HTML, PDF, ePub, and more)
* Content reuse through includes
* Multiple mature HTML themes that provide great user experience on mobile and desktop
* Referencing across pages, documents, and projects
* Index and Glossary support
* Localization support

**Read the Docs** is a hosting platform for Sphinx-generated documentation. It takes the power of Sphinx and adds version control, full-text search, and other useful features. It pulls down code and doc files from Git then builds and hosts the documentation. 

Our main documentation is hosted at https://docs.highfidelity.com.

## Install Sphinx for Local Builds

We encourage you to compile the documentation locally on your computer prior to submitting a PR. To install Sphinx: 

1. Run cmd as administrator.
2. Install Chocolatey via the cmd (on one line):

    ```
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```

3. Install Python 3 via Chocolatey via the cmd:

    ```
    C:\> choco install python
    ```

4. Restart cmd or refresh with the command:

    ```
    C:\> refreshenv
    ```

5. Install Sphinx in a command line:

    ```
    C:\> pip install -U sphinx
    ```

6. Install the Markdown parser recommonmark:

    ```
    C:\> pip install --upgrade recommonmark
    ```

7. Install our Sphinx theme:

    ```
    C:\> pip install sphinx_rtd_theme
    ```
               
## Compile HiFi Documentation Locally

1. Fork and clone https://github.com/highfidelity/hifi-docs-sphinx.
2. Using a command line, cd to your local repository, then the docs folder.
3. Compile with the command `make html`.

The HTML output will be in build\html. Open index.html in a browser to view docs.


## Using RST 

Most of our docs use RST. reStructuredText (RST) is the default plaintext markup language used by Sphinx. It is an extensible markup language, that is fully customizable. However, we don't (yet) have need of this, and will stick with the default set of directives for High Fidelity's documentation. To learn more, refer to Sphinx's [reStructuredText Primer](https://www.sphinx-doc.org/en/2.0/usage/restructuredtext/basics.html).
