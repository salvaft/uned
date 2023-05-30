# .phony: submit-% submit-target


ALLOWED_MODULES := html js

ALUMNO := ferradas_troitino_salvador
EJERCICIO_DIR := ejercicio


submit-%:
	@$(eval PLACEHOLDER := $(subst -, ,$*))
	@$(eval MODULE := $(word 1,$(PLACEHOLDER)))
	@$(eval EJERCICIO := $(word 2,$(PLACEHOLDER)))
	@echo "PLACEHOLDER: $(PLACEHOLDER)"
	@echo "EJERCICIO: $(EJERCICIO)"
	@$(if $(findstring $(MODULE),$(ALLOWED_MODULES)), , $(error Variable $(MODULE) $(PLACEHOLDER) does not match any allowed value. Stopping execution.))
	@$(eval MODULE := $(if $(filter $(MODULE), "html"), "html-css", $(MODULE)))
	@echo "MODULE: $(MODULE)"
	@$(eval BASEDIR := ./src/$(MODULE))
	@$(eval FOLDER := $(EJERCICIO_DIR)-$(EJERCICIO))
	@$(eval ZIPNAME := $(MODULE)_$(EJERCICIO)_$(ALUMNO))
	@echo "File: $(ZIPNAME).tar.gz"
	@tar --exclude='*.ts' --exclude='*.PNG' --exclude='*.png' --exclude='*.fig' --exclude='*.jpg' -zcf ./$(ZIPNAME).tar.gz -C $(BASEDIR) $(FOLDER)
