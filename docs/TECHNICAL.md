# Technical Specifications
Here are the more techy and detailed specifications for the project.
Ideally, this doc will be updated as the app progresses and design changes are made.

## Background
See the [design documentation](DESIGN.md) for the background of the project.

## Functional Desciptions
See the [design documentation](DESIGN.md#requirements) for the functional descriptions.

## Scope
An individual will create one or more wizards and customize their equipment to allow them to see their final statistics as they would be in-game.
This scope does not include spell decks, reagents, spellements, quests, monsters, or any other resource.

## Data Flow
### Authentication
The user will create their account and login from the client, making a POST request over https to the server.
The server will handle account creation and authentication and then return either a session or an error message to the client.
Upon successful login, the user will be redirected to the wizard page and their username stored in the app state.
After logging out, the app state will be cleared and the session ended.

### Authorization
Only an authenticated user can perform actions, and only on their own wizards.
Users assigned the admin role can view server statistics from a web console, but will not have access to any user's information.
Sensitive requests (deleting a wizard, changing a password, and deleting an account) will require immediate reauthentication.

### Auditing
Sensitive actions (deleting a wizard, changing a password, and deleting an account) will be recorded and monitored for suspicious activity.

### Creating
When creating a wizard, a request will be made from the client to the server with the basic info (name, school, level) and a wizard with a default backpack will be returned if successful, or an error on failure.

### Reading
When retrieving a wizard, all of the wizard's data will be sent from the server to the client (with the session cookie) and saved to the state.
The client will visually update immediately with the retrieved data.

### Updating
When saving a wizard, all of the wizard's data will be sent from the client to the server (with the session cookie) and persisted to the database.
The client will be notified when the wizard is successfully saved.

### Deleting
When deleting a wizard, reauthentication will be prompted.
A request will be made from the client to the server upon successful authentication to delete the wizard.
Upon success, the wizard will no longer appear on the selection page.
When deleting an account, reauthentication will be prompted.
A request will be made from the client to the server upon successful authentication to delete the account.
Upon success, the user will be logged out.

### Searching
When searching for items, a request will be made from the client to the database (possibly wizard101central.com, possibly a database hosted on the server).
The client will parse the results and store them into the state.
This is probably the most vulnerable part of the application; untrusted data is read and parsed from the internet and displayed in the app.
Special care must be taken to prevent scripts from outside running, injection attacks, and malformed data causing any other bugs or crashes.

### Intra-App
Any data relating to the state of the app will live in the App class.
The App class will pass down state data to its children on a need-to-know basis.

