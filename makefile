EJERCICIO := 04
ALUMNO := ferradas_troitino_salvador
SUBMITDIR := ./src/js/ejercicio-$(EJERCICIO)
ZIPCONTENT := $(SUBMITDIR)/*
ZIPNAME :=$(EJERCICIO)_$(ALUMNO)

submit:
	sed -i 's#preloadedImg.src = `/img/$${foto}`#preloadedImg.src = `./img/$${foto}`#' $(SUBMITDIR)/js/Ejercicio_4-6.js
	zip -r $(ZIPNAME).zip $(ZIPCONTENT)
	sed -i 's#preloadedImg.src = `./img/$${foto}`#preloadedImg.src = `/img/$${foto}`#' $(SUBMITDIR)/js/Ejercicio_4-6.js


