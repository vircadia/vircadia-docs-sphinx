# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SOURCEDIR     = source
BUILDDIR      = build

BUILDGENERAL  = "$(SOURCEDIR)/developer/build/BUILD.md"
BUILDANDROID  = "$(SOURCEDIR)/developer/build/BUILD_ANDROID.md"
BUILDLINUX    = "$(SOURCEDIR)/developer/build/BUILD_LINUX.md"
BUILDOSX      = "$(SOURCEDIR)/developer/build/BUILD_OSX.md"
BUILDWIN      = "$(SOURCEDIR)/developer/build/BUILD_WIN.md"
INSTALLER     = "$(SOURCEDIR)/developer/installer/INSTALLER.md"

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@echo "Downloading build documentation from main repository..."
		@echo "\nDownloading BUILD.md..."
		@curl -# -o $(BUILDGENERAL) https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD.md
		@echo "Downloading BUILD_ANDROID.md..."
		@curl -# -o $(BUILDANDROID) https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_ANDROID.md
		@echo "Downloading BUILD_LINUX.md..."
		@curl -# -o $(BUILDLINUX) https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_LINUX.md
		@echo "Downloading BUILD_OSX.md..."
		@curl -# -o $(BUILDOSX) https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_OSX.md
		@echo "Downloading BUILD_WIN.md..."
		@curl -# -o $(BUILDWIN) https://raw.githubusercontent.com/vircadia/vircadia/master/BUILD_WIN.md
		@echo "Downloading INSTALLER.md..."
		@curl -# -o $(INSTALLER) https://raw.githubusercontent.com/vircadia/vircadia/master/INSTALLER.md
		@echo "\nFinished downloading build documentation from main repository."
	@echo -n "\nFixing paths... "
		@sed -i "s*(cmake/externals)*(https://github.com/vircadia/vircadia/tree/master/cmake/externals)*g" "$(BUILDGENERAL)"
		@sed -i "s*(cmake/modules/)*(https://github.com/vircadia/vircadia/tree/master/cmake/modules)*g" "$(BUILDGENERAL)"
		@sed -i "s*(interface/external)*(https://github.com/vircadia/vircadia/tree/master/interface/external)*g" "$(BUILDGENERAL)"
		@sed -i "s*(BUILD.md)*(../build/BUILD.md)*g" "$(INSTALLER)"
		@sed -i "s*(BUILD_OSX.md)*(../build/BUILD_OSX.md)*g" "$(INSTALLER)"
		@echo "done"
	@echo "\nHanding over to sphinx-build."
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
