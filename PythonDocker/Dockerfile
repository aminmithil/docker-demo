FROM python:3
ADD demo.py /
RUN apt-get update
RUN apt-get install -y python
RUN apt-get install -y python-pip
RUN pip install requests
CMD [ "python", "./demo.py"]

