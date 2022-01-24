# SnowGate
![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)

SnowGate is a discord api proxy, made to allow you to centralise ratelimit handling and not having to worry about whether all your services are properly synchronizing their ratelimits.

It's built upon [SnowTransfer](https://github.com/DasWolke/SnowTransfer) which is a minimalistec rest client for the discord api.

To get started with SnowGate, you want to `git clone` this repository first

Now run `npm install` or `yarn` in the cloned directory to install the necessary dependencies


## Configuration
Create a file named `config.json`, you can use the `config.example.json` as an example of what the file should contain:

```json
{
  "token": "Discord Bot Token",
  "host": "127.0.0.1",
  "port": 4096,
  "options":{

  }
}
```
- Token refers to the token of the bot user of your application which you can get on [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me) by going to your application
- Host refers to the host the server will listen on, you should probably reverse proxy the server so you can use nginx or similar for handling ssl, gzip, etc.
- Port refers to the port the server will listen on, make sure that this port is not used by any other application
- Options is an object containing SnowTransfer options, possible values are defined [here](https://daswolke.github.io/SnowTransfer/?api=SnowTransfer)

## Run

To run the server, simple type `node index.js`, if there is no issue you should see `App started on HOST:PORT` appear inside the console
