# Variables
DESTDIR ?=

WWWROOT ?= /var/www/html
WWWPREFIX ?= /cljs-kitchen-sink

OUTPUT_DIR ?= out

# Private variables
obj = cljs-kitchen-sink
all: $(addprefix build/,$(obj))

# Build
build: $(addprefix build/,$(obj))

$(addprefix build/,$(obj)):
	mkdir -p $(OUTPUT_DIR)
	npx shadow-cljs release app
	tar czvf $(OUTPUT_DIR)/$(subst build/,,$@).tar.gz -C public .

# Install
install: $(addprefix install/,$(obj))

$(addprefix install/,$(obj)):
	mkdir -p $(DESTDIR)$(WWWROOT)$(WWWPREFIX)
	cp -rf public/* $(DESTDIR)$(WWWROOT)$(WWWPREFIX)

# Uninstall
uninstall: $(addprefix uninstall/,$(obj))

$(addprefix uninstall/,$(obj)):
	rm -rf $(DESTDIR)$(WWWROOT)$(WWWPREFIX)

# Run
run:
	npx serve public/

# Develop
dev:
	npx shadow-cljs watch app

# Clean
clean:
	rm -rf public/dist

# Dependencies
depend:
	npm i
	curl -Lo public/vendor.css 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css'
