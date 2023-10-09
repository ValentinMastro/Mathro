TIKZ := $(shell find . -type f -regex '.*/ch[0-9][0-9]/[^/]*\.tex')
SVG := $(shell find . -type f -regex '.*/ch[0-9][0-9]/[^/]*\.svg')

all: $(TIKZ:.tex=.svg)
	
%.svg: %.pdf
	pdf2svg $< $(basename $@)_o.svg
	svgo -i $(basename $@)_o.svg -o $@
	rm -f $(basename $@)_o.svg

%.pdf: %.tex 
	tectonic $<

clean:
	@rm -f $(SVG)