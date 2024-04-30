FROM mongo:4.4

WORKDIR /data

# copy initial data file to a directory in mongodb container
COPY *.json /data/

CMD bash -c 'for file in *.json; do collection="${file%.json}"; mongoimport --host mongohost --db CarRental --collection "$collection" --type json --file "$file" --jsonArray; done;'