TIKZ := $(patsubst %.tex, %.svg, $(wildcard tikz/*.tex))

all: $(TIKZ)
	
%.svg: %.pdf
	pdf2svg $< $@

%.pdf: %.tex 
	tectonic $<