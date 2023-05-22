.PHONY: submit-js-4 submit-html-6

# submit-js-4:
# EJERCICIO := 04
# EJERCICIO_DIR := ejercicio
# ALUMNO := ferradas_troitino_salvador
# SOURCEDIR := ./src/js/$(EJERCICIO_DIR)-$(EJERCICIO)
# TEMP := /tmp/uned
# ZIPCONTENT := $(EJERCICIO_DIR)-$(EJERCICIO)
# ZIPNAME :=$(EJERCICIO)_$(ALUMNO)
# 	rsync -avz $(SOURCEDIR) $(TEMP)
# 	sed -i 's#preloadedImg.src = `/img/$${foto}`#preloadedImg.src = `./img/$${foto}`#' $(TEMP)/$(EJERCICIO_DIR)-$(EJERCICIO)/js/Ejercicio_4-6.js
# 	tar -zcvf ./$(ZIPNAME).tar.gz --directory=$(TEMP) $(ZIPCONTENT)



submit-html-6: EJERCICIO := 6
submit-html-6: EJERCICIO_DIR := ejercicio
submit-html-6: ALUMNO := ferradas_troitino_salvador
submit-html-6: MODULE := html-css
submit-html-6: SOURCEDIR := ./src/$(MODULE)/$(EJERCICIO_DIR)-$(EJERCICIO)
submit-html-6: ZIPNAME :=$(MODULE)_$(EJERCICIO)_$(ALUMNO)
submit-html-6:
	tar  --exclude='*.PNG' --exclude='*.png' --exclude='*.fig' --exclude='*.jpg' -zcvf ./$(ZIPNAME).tar.gz $(SOURCEDIR)



	


