# coddera.oi.backoffice
Oi S2S database management

## Possible issues when using OracleDB
- Certify if you have both **Oracle Instant Client 'Basic' and 'SDK' ZIPs** installed and configured accordly to this document: https://github.com/oracle/node-oracledb/blob/master/INSTALL.md.

- You need to have a /ect/hosts correctly configured on your machine. Your hostname needs to be associeated to your hostname. If you don't you can run this command:
  ```echo "127.0.0.1 $(hostname)" | sudo tee -a /etc/hosts```
