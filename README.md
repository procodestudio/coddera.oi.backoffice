# coddera.oi.backoffice
Oi S2S database management

## Requisites
- NodeJS (>= 6.x)
- OracleDB Instant Client (see bellow 'Possible issues when using oracleDB')
- Gulp (http://gulpjs.com/)

## How to install and run

Go to the project root folder and execute the following commands:

### Install
  ```npm install```
  
### Run
  ```npm start```
  
## URLs
- http://localhost:4500 (webinterface)
- http://localhost:4500/api (api)

## Possible issues when using OracleDB
- Certify if you have both **Oracle Instant Client 'Basic' and 'SDK' ZIPs** installed and configured accordly to this document: https://github.com/oracle/node-oracledb/blob/master/INSTALL.md.

- You need to have a /ect/hosts correctly configured on your machine. Your hostname needs to be associeated to your hostname. If you don't you can run this command:
  ```echo "127.0.0.1 $(hostname)" | sudo tee -a /etc/hosts```
