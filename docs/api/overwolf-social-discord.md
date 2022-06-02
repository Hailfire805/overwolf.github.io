---
id: overwolf-social-discord
title: overwolf.social.discord API
sidebar_label: overwolf.social.discord
---

Provides access to the Discord social provider.

:::tip
You can use [`overwolf.social.getDisabledServices()`](overwolf-social#getdisabledservicescallback) method to check if the service is available.
:::

## Methods Reference

* [overwolf.social.discord.performUserLogin()](#performuserlogin)
* [overwolf.social.discord.performLogout()](#performlogoutcallback)
* [overwolf.social.discord.getUserInfo()](#getuserinfocallback)
* [overwolf.social.discord.getGuilds()](#getguildscallback)
* [overwolf.social.discord.getChannels()](#getchannelsguildid-callback)
* [overwolf.social.discord.share()](#sharediscordshareparameters-callback)
* [overwolf.social.discord.shareEx()](#shareexdiscordshareparameters-callback-callback)
* [overwolf.social.discord.cancelShare()](#cancelsharestring-callback)

## Events Reference

* [overwolf.social.discord.onLoginStateChanged](#onloginstatechanged)

## Types Reference

* [overwolf.social.discord.DiscordShareParameters](#discordshareparameters-object) Object
* [overwolf.social.discord.SocialShareResult](#socialshareresult-object) Object
* [overwolf.social.discord.SocialShareProgress](#socialshareprogress-object) Object
* [overwolf.social.discord.GetGuildsResult](#getguildsresult-object) Object
* [overwolf.social.discord.Role](#role-object) Object
* [overwolf.social.discord.Guild](#guild-object) Object

## performUserLogin()
#### Version added: 0.115

> Opens the login dialog.

There is no callback for this method and the only way to know if the user signed in is via [onLoginStateChanged](#onloginstatechanged) event.

## performLogout(callback)
#### Version added: 0.115

> Performs a "strong" sign out of Discord, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | (Result) => void           | A callback function which will be called with the status of the request |

## getUserInfo(callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will return user information, Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | [(Result: GetUserInfoResult)](overwolf-social#getuserinforesult-object) => void   | A callback function which will be called with the status of the request |

## getGuilds(callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will return the guilds that the user is registered to. Otherwise, an error is returned

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
discordShareParams    | [DiscordShareParameters](#discordshareparameters-object) Object        | The share parameters       |
callback              | function                   | Will contain the status of the request                                |

## getChannels(guildId, callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will return the channels of the given guild Id, for which the user has privileges to share images/videos to.
Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | Returns the channels of the given guild                                 |

## share(DiscordShareParameters, callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will perform the video share.

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
discordShareParams    | [DiscordShareParameters](#discordshareparameters-object) Object        | The share parameters       |
callback  | (Result) => void   | A callback function which will be called with the status of the request |

Types of errors that can occur:

* Disconnected (user isn't signed in)
* MissingFile (trying to share a missing file)
* UnsupportedFile (trying to share an unsupported format)
* ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)

#### Code Example

Note: you should perform login to Discord before calling the share function: [`overwolf.social.discord.performUserLogin()`](#performuserlogin).

```js
let settingsLocalFile=
    {  
       "file":"C:\\Users\\astaroth\\Videos\\Overwolf\\test.mp4", //change the file name to an existing file
       "message":"Check out my video! #LeagueofLegends | Captured by #Overwolf",
       "events":[  
          "death"
       ],
       "gameClassId":5426,
       "gameTitle":"League of Legends",
       "channelId":"544173576018722867",  //change the "channelId" right click the discord channel you would like to share to and click "copy id"
       "metadata":{  
          "champion":"Urgot",
          "win":"Win"
       }
    }

overwolf.social.discord.share(settingsLocalFile, console.log)
```

## shareEx(DiscordShareParameters, callback, callback)
#### Version added: 0.198

> If the user is currently logged into Discord, this will perform the video share.

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
discordShareParams    | [DiscordShareParameters](#discordshareparameters-object) Object        | The share parameters       |
resultCallback    | ([SocialShareResult](#socialshareresult-object)) => void        | A callback function which will be called with the resulting status of the request         |
progressCallback  | ([socialShareProgress](#socialshareprogress-object)) => void   | A callback function which will be called whenever share progress is made |

Types of errors that can occur:

* Disconnected (user isn't signed in)
* MissingFile (trying to share a missing file)
* UnsupportedFile (trying to share an unsupported format)
* ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)

#### Code Example

Note: you should perform login to Discord before calling the share function: [`overwolf.social.discord.performUserLogin()`](#performuserlogin).

```js
let settingsLocalFile =
    {  
       "file":"C:\\Users\\astaroth\\Videos\\Overwolf\\test.mp4", //change the file name to an existing file
       "message":"Check out my video! #LeagueofLegends | Captured by #Overwolf",
       "id":"2",
       "useOverwolfNotifications":false,
       "events":[  
          "death"
       ],
       "gameClassId":5426,
       "gameTitle":"League of Legends",
       "channelId":"544173576018722867",  //change the "channelId" right click the discord channel you would like to share to and click "copy id"
       "metadata":{  
          "champion":"Urgot",
          "win":"Win"
       }
    }

overwolf.social.discord.share(settingsLocalFile, console.log, console.log)
```

## cancelShare(string, callback)
#### Version added: 0.198

> cancels an ongoing share request with the given id, if valid. Callback will be invoked with success if such a request was found and a cancellation order was executed (may take a while)

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
id    | string        | The request ID       |
callback    | (Result) => void        | Called with the result of the cancellation       |


```js
overwolf.social.discord.cancelShare("2", console.log)
```

## onLoginStateChanged
#### Version added: 0.115

> Fired when the user’s login state changes, with the following structure: [`LoginStateChangedEvent`](overwolf-social#loginstatechangedevent-object) Object.

## DiscordShareParameters Object
#### Version added: 0.115

> This object defines all parameters that can/should be passed to the Discord [`Share()`](#sharediscordshareparameters-callback) and [`shareEx()`](#shareexdiscordshareparameters-callback-callback) methods.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
file                   | string  | **Optional**. The file to share. See [note](#file-note)                                   |
channelId              | string  | The channel ID that the file will be shared to                              |
id (Optional)              | string  | The ID for the current share request. See [note](#id-note)                              |
useOverwolfNotifications              | boolean  | Whether or not overwolf notifications should be used. See [note](#useoverwolfnotifications-note)                              |
message                | string  | The message to include with the shared file. See [note](#file-note)                   |
trimming (Optional)    | [VideoCompositionSegment](overwolf-media-videos#videocompositionsegment-object)  | An object containing start time and end time for the desired VideoCompositionSegment                                        |
events (optional)      | string  | An array of chronological events that occurred during the capture           |
gameClassId (Optional) | int     | The associated game's class ID                                              |
gameTitle (Optional)   | string  | The associated game's title                                                 |
metadata (Optional)    | Object  | Extra information about the game session                                    |

#### file note

Since version 0.153, the "file" param is optional when calling [`overwolf.social.discord.share()`](#sharediscordshareparameters-callback). Instead, you can use the "message" param to include a URL of a file that you want to share.

#### id note

When calling [`overwolf.social.discord.shareEx()`](#shareexdiscordshareparameters-callback-callback), it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using [`overwolf.social.discord.cancelShare()`](#cancelsharestring-callback).

#### useOverwolfNotifications note

When calling [`overwolf.social.discord.share()`](#sharediscordshareparameters-callback), this will default to true.
When calling [`overwolf.social.discord.shareEx()`](#shareexdiscordshareparameters-callback-callback), this will default to false.


## SocialShareResult Object
#### Version added: 0.198

> Container for the url shared in a successful share.

Parameter         | Type          | Description             |
------------------| --------------| ----------------------- |
url              | string        | The url of the generated result                         | 


#### Example data

```json
{
  "url": "https://cdn.discordapp.com/media/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png"
}
```

## SocialShareProgress Object
#### Version added: 0.198

> Container for the url shared in a successful share.

Parameter         | Type          | Description             |
------------------| --------------| ----------------------- |
progress              | int        | The current precentage of upload progress                         | 
id              | string        | The id of the share request                         | 
state              | string        | The current state of the share request                         | 

* "Started" - The request has just started
* "Uploading" - The request is currently uploading
* "Finished" - The request has finished uploading

#### Example data

```json
{
  "progress": 56,
  "id": "1",
  "state": "Uploading"
}
```


## GetGuildsResult Object
#### Version added: 0.128

> Container for get Guilds result.

Parameter         | Type          | Description             |
------------------| --------------| ----------------------- |
guilds            | [Guild](#guild-object)[]  |                         | 

#### Example data: Success

A callback function which will be called with the status of the request and the guilds that the user is registered to.

```json
{
  "status": "success",
  "guilds": [
    {
      "id": "310742576380772355",
      "name": "Overwolf",
      "icon": "https://cdn.discordapp.com/icons/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png",
      "owner": false,
      "roles": null
    },
    {
      "id": "407312977017045002",
      "name": "PUBGG",
      "icon": "https://cdn.discordapp.com/icons/407312977017045002/032b6941ca08ffcd89bbcb7fb16b2217.png",
      "owner": false,
      "roles": null
    }
  ]
}
```

## Guild Object
#### Version added: 0.128

> Container for the Guild entity.

Parameter         | Type          | Description             |
------------------| --------------| ----------------------- |
icon              | string        |                         | 
id                | string        |                         | 
name              | string        |                         | 
owner_id          | string        |                         | 
roles             | [Role](#role-object)[]        |                         | 

#### Example data

```json
{
  "id": "310742576380772355",
  "name": "Overwolf",
  "icon": "https://cdn.discordapp.com/icons/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png",
  "owner": false,
  "roles": null
}
```

## Role Object
#### Version added: 0.128

> Container for the Role entity.

Parameter         | Type          | Description             |
------------------| --------------| ----------------------- |
id                | string        |                         | 
name              | string        |                         | 
permissions       | number        |                         | 
