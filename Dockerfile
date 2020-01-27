FROM python:latest

COPY ./requirements.txt requirements.txt

RUN python3 -m pip install --upgrade pip -r requirements.txt
