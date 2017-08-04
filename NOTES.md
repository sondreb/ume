# System Flows

## Invitation Flow

1. User generates new community invite key (open or private)
2. Invite key is distributed to user(s) through other means, such as email, sms, IM.
3. Receivers of community invites navigates to any hosted version of **ume** and fills out the invitation key.
4. User receives a new public and private key pair. Keys can be stored as files on local disk drive, and/or be persisted in the web browser.

## Message (Publish) Flow
1. User creates a new content to publish to a community.
2. The content is encrypted with the user's private key.
3. The content is added to a message, that contains the unique community ID.
4. Message is sent to gateway and forwarded to all users of the community which is currently using the app.

## Public Key Distribution Flow


## Questions:

How do we verify the invitation key?   
What meta-data should be contain within an invitation key?   
Should the community ID be derived from invitation key non-reversible hash?  



# Community Data

- Each community need a collection of public keys for all members of the community.
- Public keys should be synced across all valid members of a community.




# Alternative Services

darkwire.io is a web socket based chat with end-to-end encryption:   
https://darkwire.io/

Crypho is an end-to-end-encrypted messaging and file sharing.    
https://www.crypho.com/

Crypho relies on centralized server storage of public keys, and does not support anonymous usage. These are two primary factors for building **ume**, namely avoiding centeralized infrastructure and allowing users to decide how much details they want to share with others.