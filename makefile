help:
	@echo 'Makefile for a pelican Web site                                              '
	@echo '                                                                             '
	@echo 'Usage:                                                                       '
	@echo '   make export                           (re)generate the web site             '
	@echo '   make publish                        generate using production settings    '
	@echo '   make amend                  publie sans modifier historique git   '
	@echo '                                                                             '

export:

	mkdir -p output;cp -r index.html img output/

publish:
	git push origin master
	ghp-import -m "`git log -1 --pretty=%B`" output
	git push origin gh-pages;

amend:
	git push -f origin master
	ghp-import -m "`git log -1 --pretty=%B`" output
	git push -f origin gh-pages;

