# WELCOME

Welcome to üme, a desentralized community app that runs in your browser.

To get started, you can create a new community or join a community by invitation.

[Create new community]
[Fill out invitation key]


## Create new community
1. Generate a community key, used to generate CommunityId (hash) and for encrypted communication.
2. Generate a set of private and public keys to identify the community owner.
3. Inserts an entry to the PublicKeyList, which is signed with the private key of the community ID.

The integrity of the PublicKeyList is ensured with the private community key. Since it is only the community owner
which can successfully accepted a community request, he will also sign that message before it is distributed to everyone.



# COMMUNITY INVITATION

1. Community owner creates an invitation key. Key is persisted only on community owner device. Invitation Key = (UniqueId + CommunityId (Community Key Hash)).
2. User generates a public/private key pair as identification of their community identity.
3. User sends an community request to community owner, the request contains the user's public key, encrypted with the invitation key.
4. The community owner distributes the user's public key to the community, allowing everyone to decrypt messages from the newly invited user.

```
// Encrypted with
{
    "type": "communityrequest",
    "body": {
        "cid": "CommunityIdentifier",
        "inviteId": "UniqueInviteIdentifier",
        "key": "MemberPublicKey"
    }
}
```

INVITATION KEY: 39b3af5709ed1bdfdb414eb2a603f8cf3acf766a179b3464f9bc04f5d78b7ea1:


Notes:
- The initial invitation key does not contain the community key, only the hash (identifier) of the community. This ensures that a lost / intercepted invitation key does not expose the community key.
- 

- By salting the community request with the invitation, no-one can intercept the public key even with a stolen community key.
- By salting we also ensure that nobody can simply publish a public key and be accepted as a member.


COMMUNITY KEY PAIR:

OWNER KEEPS PRIVATE KEY SECRET
PUBLIC KEY IS SHARED ONLY IF INVITATION IS ACCEPTED


