# Set Python image
FROM python:3.10.4-bullseye
# Prevents infinite buffering
ENV PYTHONUNBUFFERED 1
# create root directory for our project in the container
RUN mkdir /usr/src/django/
RUN mkdir /usr/src/django/musicStore
# Set the working directory to /musicStore
WORKDIR /usr/src/django/musicStore
# Copy the current directory contents into the container at /musicStore
ADD . /usr/src/django/musicStore
# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt