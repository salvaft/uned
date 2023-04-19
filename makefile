
EJERCICIO := 04
ALUMNO := ferradas_troitino_salvador
SUBMITDIR := ./src/js/ejercicio-$(EJERCICIO)
ZIPCONTENT := $(SUBMITDIR)/*
ZIPNAME :=$(EJERCICIO)_$(ALUMNO)

submit:
	sed -i 's#img.src = `/img/\$${bldgs#img.src = `./img/\$${bldgs#' $(SUBMITDIR)/js/Ejercicio_4-6.js
	zip -r $(ZIPNAME).zip $(ZIPCONTENT)
	sed -i 's#img.src = `./img/\$${bldgs#img.src = `/img/\$${bldgs#' $(SUBMITDIR)/js/Ejercicio_4-6.js


