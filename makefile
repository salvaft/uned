EJERCICIO := 04
EJERCICIO_DIR := ejercicio
ALUMNO := ferradas_troitino_salvador
SOURCEDIR := ./src/js/$(EJERCICIO_DIR)-$(EJERCICIO)
TEMP := /tmp/uned
ZIPCONTENT := $(EJERCICIO_DIR)-$(EJERCICIO)
ZIPNAME :=$(EJERCICIO)_$(ALUMNO)

submit:
	rsync -avz $(SOURCEDIR) $(TEMP)
	sed -i 's#preloadedImg.src = `/img/$${foto}`#preloadedImg.src = `./img/$${foto}`#' $(TEMP)/$(EJERCICIO_DIR)-$(EJERCICIO)/js/Ejercicio_4-6.js
	tar -zcvf ./$(ZIPNAME).tar.gz --directory=$(TEMP) $(ZIPCONTENT)


	


