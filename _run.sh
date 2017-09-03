# Run the site with config overrides.

# chmod u+x run.sh
#!/bin/bash
open http://localhost:5010
jekyll serve --baseurl '' -w --port 5010 --host 'localhost'