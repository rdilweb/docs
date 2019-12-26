FROM squidfunk/mkdocs-material:4.6.0

COPY ./drec.txt requirements.txt

RUN python3 -m pip install --upgrade -r requirements.txt \
    && python3 -m mkdocs build
