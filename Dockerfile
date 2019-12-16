FROM squidfunk/mkdocs-material:4.6.0

COPY ./requirements.txt requirements.txt

RUN python3 -m pip install --upgrade -r requirements.txt
