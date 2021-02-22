@ECHO OFF

pushd %~dp0

REM Command file for Sphinx documentation

if "%SPHINXBUILD%" == "" (
	set SPHINXBUILD=sphinx-build
)
set SOURCEDIR=source
set BUILDDIR=build

set "BUILDGENERAL=%SOURCEDIR%/developer/build/BUILD.md"
set "BUILDANDROID=%SOURCEDIR%/developer/build/BUILD_ANDROID.md"
set "BUILDLINUX=%SOURCEDIR%/developer/build/BUILD_LINUX.md"
set "BUILDOSX=%SOURCEDIR%/developer/build/BUILD_OSX.md"
set "BUILDWIN=%SOURCEDIR%/developer/build/BUILD_WIN.md"
set "INSTALLER=%SOURCEDIR%/developer/installer/INSTALLER.md"
curl -o %BUILDGENERAL% https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD.md
curl -o %BUILDANDROID% https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_ANDROID.md
curl -o %BUILDLINUX% https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_LINUX.md
curl -o %BUILDOSX% https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_OSX.md
curl -o %BUILDWIN% https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_WIN.md
curl -o %INSTALLER% https://raw.githubusercontent.com/vircadia/vircadia/master/INSTALLER.md

if "%1" == "" goto help

%SPHINXBUILD% >NUL 2>NUL
if errorlevel 9009 (
	echo.
	echo.The 'sphinx-build' command was not found. Make sure you have Sphinx
	echo.installed, then set the SPHINXBUILD environment variable to point
	echo.to the full path of the 'sphinx-build' executable. Alternatively you
	echo.may add the Sphinx directory to PATH.
	echo.
	echo.If you don't have Sphinx installed, grab it from
	echo.http://sphinx-doc.org/
	exit /b 1
)

%SPHINXBUILD% -M %1 %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
goto end

:help
%SPHINXBUILD% -M help %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%

:end
popd
