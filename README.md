# MobitAir backend

# Installation instructions

1) Clone the repository from github (https://github.com/Ierofantis/mobitair_backend.git) using your client or git command line (git clone https://github.com/Ierofantis/mobitair_backend.git)
2) Open your terminal and type `git clone https://github.com/Ierofantis/mobitair_backend.git` 

# Important things to check before you continue

  a) Open the project with your code/text editor and rename the .env.example file to .env
  b) Check config/config.json file if It contains the correct host. For example in the docker toolbox for windows the published ip host is the internal ip of your machine like: 
  `http://192.xxx.xx.xxx:5432/` but in linux/mac is like: `http://127.0.0.1:5432/`. So change it according to your machines exported docker host

1) When the clone process ends navigate to mobitar_backend `cd mobitair_backend`
2) Now type `docker-compose up` to start the containers

# Creating tables in the database

5) For creating the tables in the database open another terminal and navigate to mobitair_backend and type `npx sequelize-cli db:migrate`

# Creating airline records

6) To create airline records in the database they are two options :
   a) Open postman or insomnia and make a post request to ` my_host:5000/api/createAirlines`
   b) You can type this curl command in commandline(change the host name): 
    curl -X POST \
    http://my_host:5000/api/createAirlines \
    -H 'Content-Type: application/json' \
    -H 'Postman-Token: be0b957d-abe0-4342-b554-9ac0acd60964' \
    -H 'cache-control: no-cache'