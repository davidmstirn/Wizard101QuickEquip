# Security
This document will track security requirements, the threat models, and the mitigations implemented and planned

## Requirements
User data is required to be safely stored on the server and transfered between client and server without any breach of privacy.

## Threat Models
### Assets
Usernames, passwords, and email addresses are all confidential and to be protected.
Wizards and gear sets are the primary service to the users, so their preservation is integral.

### Attack Surfaces
1. Password theft, stuffing, cracking, and guessing
2. Asset theft or destruction
3. Session hijacking / CSRF
4. Cookie guessing
5. Cross-site-scripting
6. Unauthorized admin access
7. HTML injection
8. Man-in-the-middle between client and server
9. Man-in-the-middle between client and wizard101central
10. Tampering of logs
11. Denial of service
12. Rogue admin

### Trust Boundaries
A client request leads to a server action, so clients must only be capable of making requests the user is permitted to perform.

## Mitigations
The following is an up-to-date list of all security mitigations planned and their current implementation status.

### Access Policy and Access Controls
* Session ids will be securely and randomly generated, and not reused [(4)](#attack-surfaces)
* Session cookie will not be visible to the JavaScript [(3,4,5)](#attack-surfaces)
* CSRF Tokens passed back and forth between the client and server to prevent CSRF attacks [(3,4)](#attack-surfaces)

### Interfaces
* Login communication goes from the UI component to the outbound connection component to the server, then server to the database, back to the server, then through the inbound component in the client, back to the requesting component [(1)](#attack-surfaces)
* Action Confirmation before sensitive actions are performed [(3)](#attack-surfaces)
* Input validation and sanitization [(5,7)](#attack-surfaces)

### Communication
* Network communication will occur over https using TLS 1.3 (parameters TBD) [(8,9)](#attack-surfaces)
* HTTP Strict Transport Security [(8,9)](#attack-surfaces)
* Preloading [(8,9)](#attack-surfaces)
* Consider investing in cloudflare or other anti-DOS provider [(11)](#attack-surfaces)

### Storage
* Passwords will be stored as hashes with salts in the database using argon2id hashing algorithm (parameters TBD) [(1)](#attack-surfaces)
* Password buffers will be reset as soon as possible after use [(1)](#attack-surfaces)
* Database actions will be auditted (TBD because database product is still TBD) [(1,2,6,12)](#attack-surfaces)
* Database backups will be created (without passwords/salts) and auditted for modifications (TBD see above) [(2,12)](#attack-surfaces)
* Document the entire process of log collection to prove that they are reliable [(10,12)](#attack-surfaces)
* Digitally sign log files, and store the signatures separate from the logs. Consider requiring two secrets kept by different persons in order to access the logs/signatures [(10,12)](#attack-surfaces)
