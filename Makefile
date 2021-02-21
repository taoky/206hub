output = frontend/static/json/206hub.json
source = data
script = processor/main.py

$(output): $(source) $(script)
	python $(script)

clean:
	rm -f $(output)
