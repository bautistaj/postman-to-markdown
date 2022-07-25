# Project: Twitter API v2
This is a Postman Collection for the Twitter API v2 endpoints. 

Refer to the main [Twitter API documentation](https://developer.twitter.com/en/docs) for more details.

If you have an API-related question, you can also discuss in the developer [community forum](https://twittercommunity.com).

## Installation

### Quick install

Go to the [Collection](https://t.co/twitter-api-postman) and click `Run in Postman`.

### Manual install

You can also download this Collection from a GitHub repo here: https://github.com/twitterdev/postman-twitter-api

## Environment

This Collection includes a pre-configured Environment. You will need to set up the following variables in order to run each request (depending on the authentication type used by the request you are sending):

|Name|Description|
|---|---|
|`consumer_key`|Your consumer key|
|`consumer_secret`|Your consumer secret|
|`access_token`|Your access token|
|`token_secret`|Your access token secret|
|`bearer_token`|Your bearer token|

# 📁 Collection: Tweet Lookup 

## End-point: Single Tweet
This endpoint returns details about the Tweet specified by the requested ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/:id
>```
### Query Params

|Param|value|
|---|---|
|tweet.fields||
|expansions||
|media.fields||
|place.fields||
|poll.fields||
|user.fields||


### Response: 200
```json
{
    "data": {
        "author_id": "2244994945",
        "created_at": "2020-06-24T16:28:14.000Z",
        "entities": {
            "urls": [
                {
                    "start": 140,
                    "end": 163,
                    "url": "https://t.co/IKM3zo6ngu",
                    "expanded_url": "https://blog.twitter.com/developer/en_us/topics/tips/2020/how-to-analyze-the-sentiment-of-your-own-tweets.html",
                    "display_url": "blog.twitter.com/developer/en_u…",
                    "images": [
                        {
                            "url": "https://pbs.twimg.com/news_img/1275828115110060033/WIbBrSld?format=jpg&name=orig",
                            "width": 1600,
                            "height": 600
                        },
                        {
                            "url": "https://pbs.twimg.com/news_img/1275828115110060033/WIbBrSld?format=jpg&name=150x150",
                            "width": 150,
                            "height": 150
                        }
                    ],
                    "status": 200,
                    "title": "How to analyze the sentiment of your own Tweets",
                    "description": "This post helps developers try out sentiment analysis by analyzing their own past Tweets.",
                    "unwound_url": "https://blog.twitter.com/developer/en_us/topics/tips/2020/how-to-analyze-the-sentiment-of-your-own-tweets.html"
                }
            ]
        },
        "id": "1275828087666679809",
        "lang": "en",
        "possibly_sensitive": false,
        "source": "Twitter Web App",
        "text": "Learn how to create a sentiment score for your Tweets with Microsoft Azure, Python, and Twitter Developer Labs recent search functionality.\nhttps://t.co/IKM3zo6ngu"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Single Tweet Usercontext
This endpoint returns details about the Tweet specified by the requested ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/:id
>```
### Query Params

|Param|value|
|---|---|
|tweet.fields||
|expansions||
|media.fields||
|place.fields||
|poll.fields||
|user.fields||


### Response: 200
```json
{
    "data": {
        "id": "20",
        "text": "just setting up my twttr"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Multiple Tweets
This endpoint returns details about up to 100 Tweets specified by the requested IDs.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets?ids=
>```
### Query Params

|Param|value|
|---|---|
|ids||
|tweet.fields||
|expansions||
|media.fields||
|place.fields||
|poll.fields||
|user.fields||


### Response: 200
```json
{
    "data": [
        {
            "author_id": "12",
            "conversation_id": "20",
            "created_at": "2006-03-21T20:50:14.000Z",
            "id": "20",
            "text": "just setting up my twttr"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1276500934466703361"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1276501058211262464",
            "created_at": "2020-06-26T13:02:23.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 143,
                        "end": 166,
                        "url": "https://t.co/BabQnqOX4r",
                        "expanded_url": "https://twitter.com/i/lists/suggested",
                        "display_url": "twitter.com/i/lists/sugges…"
                    },
                    {
                        "start": 167,
                        "end": 190,
                        "url": "https://t.co/ATG2vi3Dxf",
                        "expanded_url": "https://twitter.com/Twitter/status/1276501058211262464/photo/1",
                        "display_url": "pic.twitter.com/ATG2vi3Dxf"
                    }
                ]
            },
            "id": "1276501058211262464",
            "text": "Add new voices and conversations to your Timeline using Lists.\n\nYou can now:\n👉 make a List\n👉 discover new Lists\n👉 follow a List\n👉 Tweet a List\nhttps://t.co/BabQnqOX4r https://t.co/ATG2vi3Dxf"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1275244079673155585"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1275244210439028736",
            "created_at": "2020-06-23T01:48:07.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 112,
                        "end": 135,
                        "url": "https://t.co/dpI2lRmj9F",
                        "expanded_url": "https://twitter.com/Twitter/status/1275244210439028736/photo/1",
                        "display_url": "pic.twitter.com/dpI2lRmj9F"
                    }
                ]
            },
            "id": "1275244210439028736",
            "text": "Need to follow what’s happening in real time? Change your timeline to show latest Tweets instead of top Tweets. https://t.co/dpI2lRmj9F"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274087263073255425"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:32.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 13,
                        "end": 22,
                        "username": "YoliZama"
                    }
                ],
                "urls": [
                    {
                        "start": 23,
                        "end": 46,
                        "url": "https://t.co/lcGDLzAJIn",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087695145332736/photo/1",
                        "display_url": "pic.twitter.com/lcGDLzAJIn"
                    }
                ]
            },
            "id": "1274087695145332736",
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1274087694105075714"
                }
            ],
            "text": "📍 Oakland\n🗣️ @YoliZama https://t.co/lcGDLzAJIn"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274086977952833536"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:32.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 19,
                        "end": 31,
                        "username": "Afrikkana95"
                    }
                ],
                "urls": [
                    {
                        "start": 32,
                        "end": 55,
                        "url": "https://t.co/tEfs27p7xu",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087694105075714/photo/1",
                        "display_url": "pic.twitter.com/tEfs27p7xu"
                    }
                ]
            },
            "id": "1274087694105075714",
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1274087692003770368"
                }
            ],
            "text": "📍 New York City\n🗣️ @Afrikkana95 https://t.co/tEfs27p7xu"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274086862907305984"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:31.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 13,
                        "end": 25,
                        "username": "JoshuaKissi"
                    }
                ],
                "urls": [
                    {
                        "start": 26,
                        "end": 49,
                        "url": "https://t.co/ZeD3XvJUbX",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087692003770368/photo/1",
                        "display_url": "pic.twitter.com/ZeD3XvJUbX"
                    }
                ]
            },
            "id": "1274087692003770368",
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1274087690758090752"
                }
            ],
            "text": "📍 Chicago\n🗣️ @JoshuaKissi https://t.co/ZeD3XvJUbX"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274086703272038401"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:31.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 18,
                        "end": 33,
                        "username": "Imani_Barbarin"
                    }
                ],
                "urls": [
                    {
                        "start": 34,
                        "end": 57,
                        "url": "https://t.co/ZRDUipsu38",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087690758090752/photo/1",
                        "display_url": "pic.twitter.com/ZRDUipsu38"
                    }
                ]
            },
            "id": "1274087690758090752",
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1274087689487134720"
                }
            ],
            "text": "📍 Philadelphia\n🗣️ @Imani_Barbarin https://t.co/ZRDUipsu38"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274086530919718917"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:31.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 16,
                        "end": 29,
                        "username": "itsbarrrrett"
                    }
                ],
                "urls": [
                    {
                        "start": 30,
                        "end": 53,
                        "url": "https://t.co/Vk4vDeuAqb",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087689487134720/photo/1",
                        "display_url": "pic.twitter.com/Vk4vDeuAqb"
                    }
                ]
            },
            "id": "1274087689487134720",
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1274087688321200128"
                }
            ],
            "text": "📍 Louisville\n🗣️ @itsbarrrrett https://t.co/Vk4vDeuAqb"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274086294507778048"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:30.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 13,
                        "end": 25,
                        "username": "BerniceKing"
                    }
                ],
                "urls": [
                    {
                        "start": 26,
                        "end": 49,
                        "url": "https://t.co/83upyVnwIS",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087688321200128/photo/1",
                        "display_url": "pic.twitter.com/83upyVnwIS"
                    }
                ]
            },
            "id": "1274087688321200128",
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1274087687469715457"
                }
            ],
            "text": "📍 Atlanta\n🗣️ @BerniceKing https://t.co/83upyVnwIS"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1274086027544498176"
                ]
            },
            "author_id": "783214",
            "conversation_id": "1274087687469715457",
            "created_at": "2020-06-19T21:12:30.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 17,
                        "end": 29,
                        "username": "FredTJoseph"
                    }
                ],
                "urls": [
                    {
                        "start": 30,
                        "end": 53,
                        "url": "https://t.co/lNTOkyguG1",
                        "expanded_url": "https://twitter.com/Twitter/status/1274087687469715457/photo/1",
                        "display_url": "pic.twitter.com/lNTOkyguG1"
                    }
                ]
            },
            "id": "1274087687469715457",
            "text": "📍 Minneapolis\n🗣️ @FredTJoseph https://t.co/lNTOkyguG1"
        },
        {
            "author_id": "783214",
            "conversation_id": "1274034244700930049",
            "created_at": "2020-06-19T17:40:09.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 106,
                        "end": 115,
                        "tag": "BlackJoy"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 14,
                        "username": "Blackbirds"
                    }
                ]
            },
            "id": "1274034244700930049",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1274014870707437570"
                }
            ],
            "text": "RT @Blackbirds: Juneteenth is a celebration. It’s about our freedom. And within that freedom is our joy.\n\n#BlackJoy is a form of resistance…"
        },
        {
            "author_id": "783214",
            "conversation_id": "1274025734990897152",
            "created_at": "2020-06-19T17:06:20.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 96,
                        "end": 107,
                        "tag": "Juneteenth"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 19,
                        "username": "TwitterTogether"
                    }
                ]
            },
            "id": "1274025734990897152",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1273964707884433409"
                }
            ],
            "text": "RT @TwitterTogether: Juneteenth represents freedom, emancipation, and liberation.\n\nTo celebrate #Juneteenth is to know Black history. It's…"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276440670631124993",
            "created_at": "2020-06-26T09:02:25.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 33,
                        "end": 49,
                        "tag": "TwitterBlueroom"
                    },
                    {
                        "start": 96,
                        "end": 111,
                        "tag": "AskYubinHyelim"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 16,
                        "username": "TwitterKorea"
                    },
                    {
                        "start": 68,
                        "end": 82,
                        "username": "yubinofficial"
                    },
                    {
                        "start": 87,
                        "end": 94,
                        "username": "WG_Lim"
                    }
                ],
                "urls": [
                    {
                        "start": 114,
                        "end": 137,
                        "url": "https://t.co/GFh8TWNHK2",
                        "expanded_url": "https://www.pscp.tv/w/ccRfMzQ4ODU4MzN8MVJEeGxyanZ6dk5HTN69VjOiGYM4DmFWlDj4GHelqxqBK9J_FIbiGviVL0oL",
                        "display_url": "pscp.tv/w/ccRfMzQ4ODU4…"
                    }
                ]
            },
            "id": "1276440670631124993",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1276440465550610438"
                }
            ],
            "text": "RT @TwitterKorea: Come and enjoy #TwitterBlueroom LIVE Q&amp;A with @yubinofficial and @WG_Lim \n#AskYubinHyelim \n\nhttps://t.co/GFh8TWNHK2"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276426779796750338",
            "created_at": "2020-06-26T08:07:13.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 18,
                        "end": 27,
                        "tag": "StayHome"
                    },
                    {
                        "start": 38,
                        "end": 48,
                        "tag": "MusicBank"
                    },
                    {
                        "start": 79,
                        "end": 95,
                        "tag": "SafeWithTwitter"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 16,
                        "username": "TwitterKorea"
                    },
                    {
                        "start": 67,
                        "end": 78,
                        "username": "KBSWorldTV"
                    }
                ],
                "urls": [
                    {
                        "start": 96,
                        "end": 119,
                        "url": "https://t.co/GNqEFNhTaC",
                        "expanded_url": "https://twitter.com/i/broadcasts/1OwxWLBkoBmKQ",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276426779796750338",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1276426187607175169"
                }
            ],
            "text": "RT @TwitterKorea: #StayHome and Enjoy #MusicBank LIVE 6/26 5PM KST @KBSWorldTV #SafeWithTwitter\nhttps://t.co/GNqEFNhTaC"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276420300641406976",
            "created_at": "2020-06-26T07:41:29.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/vwWwOBgn3M",
                        "expanded_url": "https://twitter.com/i/broadcasts/1vAxRrPWLrPxl",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276420300641406976",
            "text": "https://t.co/vwWwOBgn3M"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276346768490328064",
            "created_at": "2020-06-26T02:49:17.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/dTn7FwgQFg",
                        "expanded_url": "https://twitter.com/i/broadcasts/1lPKqLQnZpAxb",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276346768490328064",
            "text": "https://t.co/dTn7FwgQFg"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276301871515222017",
            "created_at": "2020-06-25T23:50:53.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/FWAdDJaWFu",
                        "expanded_url": "https://twitter.com/i/broadcasts/1YpKkNrLpoMxj",
                        "display_url": "twitter.com/i/broadcasts/1…",
                        "images": [
                            {
                                "url": "https://pbs.twimg.com/news_img/1276301872756736000/6FQ7EJ4m?format=jpg&name=orig",
                                "width": 1280,
                                "height": 720
                            },
                            {
                                "url": "https://pbs.twimg.com/news_img/1276301872756736000/6FQ7EJ4m?format=jpg&name=150x150",
                                "width": 150,
                                "height": 150
                            }
                        ],
                        "status": 200,
                        "title": "IGN",
                        "description": "IGN Expo Day 6",
                        "unwound_url": "https://twitter.com/i/broadcasts/1YpKkNrLpoMxj"
                    }
                ]
            },
            "id": "1276301871515222017",
            "text": "https://t.co/FWAdDJaWFu"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276175944105865216",
            "created_at": "2020-06-25T15:30:29.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/TUvMWuMn9y",
                        "expanded_url": "https://twitter.com/i/broadcasts/1yoJMXdpmbDGQ",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276175944105865216",
            "text": "https://t.co/TUvMWuMn9y"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276172826764926976",
            "created_at": "2020-06-25T15:18:06.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/YCbDKj3Tej",
                        "expanded_url": "https://twitter.com/i/broadcasts/1OyKAgaaMNyJb",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276172826764926976",
            "text": "https://t.co/YCbDKj3Tej"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276172649299763200",
            "created_at": "2020-06-25T15:17:24.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/VsaGUixN0t",
                        "expanded_url": "https://twitter.com/i/broadcasts/1OyKAgamjgzJb",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276172649299763200",
            "text": "https://t.co/VsaGUixN0t"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276171938449121280",
            "created_at": "2020-06-25T15:14:34.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/rENggwsoIZ",
                        "expanded_url": "https://twitter.com/i/broadcasts/1ynKOprmYjkGR",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276171938449121280",
            "text": "https://t.co/rENggwsoIZ"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276171724111765504",
            "created_at": "2020-06-25T15:13:43.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/5nmkyBSWuL",
                        "expanded_url": "https://twitter.com/i/broadcasts/1yNGaBamWVNJj",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276171724111765504",
            "text": "https://t.co/5nmkyBSWuL"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276171627386957824",
            "created_at": "2020-06-25T15:13:20.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/CUJAivshzU",
                        "expanded_url": "https://twitter.com/i/broadcasts/1YqKDpPweZvKV",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276171627386957824",
            "text": "https://t.co/CUJAivshzU"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276170528387035136",
            "created_at": "2020-06-25T15:08:58.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 61,
                        "end": 67,
                        "tag": "Pride"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 15,
                        "username": "TwitterNews"
                    },
                    {
                        "start": 43,
                        "end": 55,
                        "username": "karaswisher"
                    }
                ]
            },
            "id": "1276170528387035136",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1276168522134102017"
                }
            ],
            "text": "RT @TwitterNews: Go behind the byline with @KaraSwisher this #Pride month to hear about her storied journalism career, tri-coastal lifestyl…"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276168667517071361",
            "created_at": "2020-06-25T15:01:35.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/ibZN9aauZT",
                        "expanded_url": "https://twitter.com/i/broadcasts/1DXxyABgmEnxM",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276168667517071361",
            "text": "https://t.co/ibZN9aauZT"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276048583557394432",
            "created_at": "2020-06-25T07:04:24.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/mCv7iZsUA8",
                        "expanded_url": "https://twitter.com/i/broadcasts/1PlJQNBEejWxE",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1276048583557394432",
            "text": "https://t.co/mCv7iZsUA8"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276035881992740864",
            "created_at": "2020-06-25T06:13:56.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/T9pwAL4ezo",
                        "expanded_url": "https://twitter.com/ONEEsports/status/1276027533973020673",
                        "display_url": "twitter.com/ONEEsports/sta…"
                    }
                ]
            },
            "id": "1276035881992740864",
            "referenced_tweets": [
                {
                    "type": "quoted",
                    "id": "1276027533973020673"
                }
            ],
            "text": "https://t.co/T9pwAL4ezo"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1276009123876749312",
            "created_at": "2020-06-25T04:27:36.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 46,
                        "end": 55,
                        "tag": "OnStream"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 15,
                        "username": "TwitterMENA"
                    }
                ],
                "urls": [
                    {
                        "start": 56,
                        "end": 79,
                        "url": "https://t.co/THBICnDwwY",
                        "expanded_url": "https://www.pscp.tv/w/ccImtTIzMDExMTJ8MWt2S3BlWWx2UG1HRVLvrUtuJOLEvnccK1AI61DAprfFexBE6TqWAMbyPd0j",
                        "display_url": "pscp.tv/w/ccImtTIzMDEx…"
                    }
                ]
            },
            "id": "1276009123876749312",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1276007683980693504"
                }
            ],
            "text": "RT @TwitterMENA: شاهدوا حلقة جديدة من برنامح  #OnStream https://t.co/THBICnDwwY"
        },
        {
            "attachments": {
                "media_keys": [
                    "7_1247845530035580928"
                ]
            },
            "author_id": "130649891",
            "conversation_id": "1276009123620851712",
            "created_at": "2020-06-25T04:27:36.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 15,
                        "username": "TwitterMENA"
                    }
                ],
                "urls": [
                    {
                        "start": 17,
                        "end": 40,
                        "url": "https://t.co/Z12uictjZD",
                        "expanded_url": "https://twitter.com/TwitterMENA/status/1247845683522154498/video/1",
                        "display_url": "pic.twitter.com/Z12uictjZD"
                    }
                ]
            },
            "id": "1276009123620851712",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1247845683522154498"
                }
            ],
            "text": "RT @TwitterMENA: https://t.co/Z12uictjZD"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275981562811527170",
            "created_at": "2020-06-25T02:38:05.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/hG0ovCwgMS",
                        "expanded_url": "https://twitter.com/i/broadcasts/1yoKMXdDvnYxQ",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275981562811527170",
            "text": "https://t.co/hG0ovCwgMS"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275930077927141376",
            "created_at": "2020-06-24T23:13:30.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/5ZxW1tDKVR",
                        "expanded_url": "https://twitter.com/i/broadcasts/1ypKdwzodVdxW",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275930077927141376",
            "text": "https://t.co/5ZxW1tDKVR"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275832645574733824",
            "created_at": "2020-06-24T16:46:21.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/Bx8oI3Vawr",
                        "expanded_url": "https://twitter.com/i/broadcasts/1mnxelBnBwLJX",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275832645574733824",
            "text": "https://t.co/Bx8oI3Vawr"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275817073755611136",
            "created_at": "2020-06-24T15:44:28.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/vTjlgN24JS",
                        "expanded_url": "https://twitter.com/i/broadcasts/1lDxLyYYveaKm",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275817073755611136",
            "text": "https://t.co/vTjlgN24JS"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275816972459012101",
            "created_at": "2020-06-24T15:44:04.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/ZwTlhydfWN",
                        "expanded_url": "https://twitter.com/i/broadcasts/1MnxndVqPLOGO",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275816972459012101",
            "text": "https://t.co/ZwTlhydfWN"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275806248525389824",
            "created_at": "2020-06-24T15:01:27.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/b6phJzClfR",
                        "expanded_url": "https://twitter.com/i/broadcasts/1dRKZQkDgqzxB",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275806248525389824",
            "text": "https://t.co/b6phJzClfR"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275806002307231744",
            "created_at": "2020-06-24T15:00:28.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/But99uyYHV",
                        "expanded_url": "https://twitter.com/i/broadcasts/1mrxmEomapnxy",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275806002307231744",
            "text": "https://t.co/But99uyYHV"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275805935659700225",
            "created_at": "2020-06-24T15:00:13.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/SV3IZDoipf",
                        "expanded_url": "https://twitter.com/i/broadcasts/1LyxBaMBdWoJN",
                        "display_url": "twitter.com/i/broadcasts/1…",
                        "status": 200,
                        "title": "People Magazine",
                        "description": "We're breaking down the biggest stories and what's trending today. Watch #PeopleNow with @JeremyParsonsTV and @andreaboehlke streaming now.",
                        "unwound_url": "https://twitter.com/i/broadcasts/1LyxBaMBdWoJN"
                    }
                ]
            },
            "id": "1275805935659700225",
            "text": "https://t.co/SV3IZDoipf"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275805533690138630",
            "created_at": "2020-06-24T14:58:37.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/3k0J6vJVyL",
                        "expanded_url": "https://twitter.com/i/broadcasts/1BRJjYzyBbvGw",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275805533690138630",
            "text": "https://t.co/3k0J6vJVyL"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275628222818877440",
            "created_at": "2020-06-24T03:14:03.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/P0Bg8JTcmZ",
                        "expanded_url": "https://twitter.com/i/broadcasts/1nAJEAXjqQkJL",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275628222818877440",
            "text": "https://t.co/P0Bg8JTcmZ"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275506262327918599",
            "created_at": "2020-06-23T19:09:25.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/eIUT3T5s2U",
                        "expanded_url": "https://twitter.com/i/broadcasts/1ZkKzmBBzbyxv",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275506262327918599",
            "text": "https://t.co/eIUT3T5s2U"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275490500108259329",
            "created_at": "2020-06-23T18:06:47.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/TCzAnu83Tt",
                        "expanded_url": "https://twitter.com/i/broadcasts/1djxXojjeQeJZ",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275490500108259329",
            "text": "https://t.co/TCzAnu83Tt"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275451488102256645",
            "created_at": "2020-06-23T15:31:46.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/wqPmepT4PU",
                        "expanded_url": "https://twitter.com/i/broadcasts/1dRKZQkDgDwxB",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275451488102256645",
            "text": "https://t.co/wqPmepT4PU"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275451397459243009",
            "created_at": "2020-06-23T15:31:24.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/VaWXJ1jJmd",
                        "expanded_url": "https://twitter.com/i/broadcasts/1YpKkNynZrExj",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275451397459243009",
            "text": "https://t.co/VaWXJ1jJmd"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275332886015520768",
            "created_at": "2020-06-23T07:40:29.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/0jcsarw5OI",
                        "expanded_url": "https://twitter.com/i/broadcasts/1OdJrWlOLoAxX",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275332886015520768",
            "text": "https://t.co/0jcsarw5OI"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275327412616617984",
            "created_at": "2020-06-23T07:18:44.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 38,
                        "end": 50,
                        "tag": "تأقلم_وتعلم"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 15,
                        "username": "TwitterMENA"
                    }
                ],
                "urls": [
                    {
                        "start": 51,
                        "end": 74,
                        "url": "https://t.co/0f4F0C9pAS",
                        "expanded_url": "https://www.pscp.tv/w/1ypKdwVkWgRxW",
                        "display_url": "pscp.tv/w/1ypKdwVkWgRxW"
                    }
                ]
            },
            "id": "1275327412616617984",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275327107716046848"
                }
            ],
            "text": "RT @TwitterMENA: اليكم حلقة جديدة من  #تأقلم_وتعلم https://t.co/0f4F0C9pAS"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275128589244157958",
            "created_at": "2020-06-22T18:08:41.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/NbAiUfUpic",
                        "expanded_url": "https://twitter.com/i/broadcasts/1vAGRrowLyrGl",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275128589244157958",
            "text": "https://t.co/NbAiUfUpic"
        },
        {
            "author_id": "130649891",
            "conversation_id": "1275089113742336000",
            "created_at": "2020-06-22T15:31:49.000Z",
            "entities": {
                "urls": [
                    {
                        "start": 0,
                        "end": 23,
                        "url": "https://t.co/oigT4Ux4GP",
                        "expanded_url": "https://twitter.com/i/broadcasts/1vOxwoBDVBPxB",
                        "display_url": "twitter.com/i/broadcasts/1…"
                    }
                ]
            },
            "id": "1275089113742336000",
            "text": "https://t.co/oigT4Ux4GP"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1276312144007450624"
                ]
            },
            "author_id": "1884191208",
            "conversation_id": "1276312753393680384",
            "created_at": "2020-06-26T00:34:07.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 256,
                        "end": 276,
                        "tag": "ScalingSocialImpact"
                    }
                ],
                "mentions": [
                    {
                        "start": 28,
                        "end": 40,
                        "username": "d_lux_brand"
                    },
                    {
                        "start": 45,
                        "end": 52,
                        "username": "sfciti"
                    }
                ],
                "urls": [
                    {
                        "start": 277,
                        "end": 300,
                        "url": "https://t.co/rFWhUIiryq",
                        "expanded_url": "https://twitter.com/TwitterForGood/status/1276312753393680384/photo/1",
                        "display_url": "pic.twitter.com/rFWhUIiryq"
                    }
                ]
            },
            "id": "1276312753393680384",
            "text": "Inspiring conversation with @d_lux_brand and @sfciti on combatting racial inequality.\n\n“In order for a company to be successful at inclusion and diversity, the work has to be embedded in all aspects. In pay equity, in procurement, in supplier diversity.”\n\n#ScalingSocialImpact https://t.co/rFWhUIiryq"
        },
        {
            "author_id": "1884191208",
            "conversation_id": "1275556031876087808",
            "created_at": "2020-06-23T22:27:11.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 23,
                        "end": 35,
                        "username": "d_lux_brand"
                    }
                ],
                "urls": [
                    {
                        "start": 88,
                        "end": 111,
                        "url": "https://t.co/OlqqqIZzVJ",
                        "expanded_url": "https://twitter.com/sfciti/status/1275541973705711621",
                        "display_url": "twitter.com/sfciti/status/…"
                    }
                ]
            },
            "id": "1275556031876087808",
            "referenced_tweets": [
                {
                    "type": "quoted",
                    "id": "1275541973705711621"
                }
            ],
            "text": "Hear from our very own @d_lux_brand on fighting racism and promoting equity. Register 👇 https://t.co/OlqqqIZzVJ"
        },
        {
            "author_id": "1884191208",
            "conversation_id": "1274094606498459651",
            "created_at": "2020-06-19T21:40:00.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 104,
                        "end": 113,
                        "tag": "BlackJoy"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 18,
                        "username": "codetenderloin"
                    }
                ]
            },
            "id": "1274094606498459651",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1274074179772354560"
                }
            ],
            "text": "RT @codetenderloin: Three graduates of our S.O.A.R.(SURMOUNT OBSTACLES, ACHIEVE RESULTS) Sales Program. #BlackJoy Giving opportunities to f…"
        },
        {
            "author_id": "1884191208",
            "conversation_id": "1274018381662793729",
            "created_at": "2020-06-19T16:37:06.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 106,
                        "end": 115,
                        "tag": "BlackJoy"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 14,
                        "username": "Blackbirds"
                    }
                ]
            },
            "id": "1274018381662793729",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1274014870707437570"
                }
            ],
            "text": "RT @Blackbirds: Juneteenth is a celebration. It’s about our freedom. And within that freedom is our joy.\n\n#BlackJoy is a form of resistance…"
        },
        {
            "author_id": "1884191208",
            "conversation_id": "1274013886178418688",
            "created_at": "2020-06-19T16:19:15.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 96,
                        "end": 107,
                        "tag": "Juneteenth"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 19,
                        "username": "TwitterTogether"
                    }
                ]
            },
            "id": "1274013886178418688",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1273964707884433409"
                }
            ],
            "text": "RT @TwitterTogether: Juneteenth represents freedom, emancipation, and liberation.\n\nTo celebrate #Juneteenth is to know Black history. It's…"
        },
        {
            "author_id": "773578328498372608",
            "conversation_id": "1276163304541618180",
            "created_at": "2020-06-25T14:40:16.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 13,
                        "end": 36,
                        "tag": "DeafblindAwarenessWeek"
                    }
                ],
                "urls": [
                    {
                        "start": 207,
                        "end": 230,
                        "url": "https://t.co/DPvOvpFKsh",
                        "expanded_url": "https://twitter.com/HabenGirma/status/1275898382758768645",
                        "display_url": "twitter.com/HabenGirma/sta…"
                    }
                ]
            },
            "id": "1276163304541618180",
            "referenced_tweets": [
                {
                    "type": "quoted",
                    "id": "1275898382758768645"
                }
            ],
            "text": "This week is #DeafblindAwarenessWeek.\n\nIt’s important to recognize the challenges this community faces, even more so during this time.\n\nConnect with, learn from, and be inspired by the deaf-blind community. https://t.co/DPvOvpFKsh"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1275873077109362688"
                ]
            },
            "author_id": "773578328498372608",
            "conversation_id": "1275875669600202753",
            "created_at": "2020-06-24T19:37:18.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 74,
                        "end": 86,
                        "tag": "AlwaysProud"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 15,
                        "username": "TwitterOpen"
                    }
                ],
                "urls": [
                    {
                        "start": 87,
                        "end": 110,
                        "url": "https://t.co/jmRg5fVgVf",
                        "expanded_url": "https://twitter.com/TwitterOpen/status/1275873415472320512/video/1",
                        "display_url": "pic.twitter.com/jmRg5fVgVf"
                    }
                ]
            },
            "id": "1275875669600202753",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275874506607919109"
                }
            ],
            "text": "RT @TwitterOpen: What's one thing you'd like to tell the queer community? #AlwaysProud https://t.co/jmRg5fVgVf"
        },
        {
            "author_id": "773578328498372608",
            "conversation_id": "1275856634837897223",
            "created_at": "2020-06-24T18:21:40.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 18,
                        "username": "TwitterSupport"
                    }
                ]
            },
            "id": "1275856634837897223",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275856180569612289"
                }
            ],
            "text": "RT @TwitterSupport: Video autoplay can be turned off in three steps:\n\n1️⃣ Select \"Settings and privacy\" from the main menu\n2️⃣ Tap \"Data us…"
        },
        {
            "author_id": "773578328498372608",
            "conversation_id": "1275561823471718401",
            "created_at": "2020-06-23T22:50:12.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 18,
                        "username": "TwitterForGood"
                    },
                    {
                        "start": 43,
                        "end": 55,
                        "username": "d_lux_brand"
                    }
                ],
                "urls": [
                    {
                        "start": 108,
                        "end": 131,
                        "url": "https://t.co/OlqqqIZzVJ",
                        "expanded_url": "https://twitter.com/sfciti/status/1275541973705711621",
                        "display_url": "twitter.com/sfciti/status/…"
                    }
                ]
            },
            "id": "1275561823471718401",
            "referenced_tweets": [
                {
                    "type": "quoted",
                    "id": "1275541973705711621"
                },
                {
                    "type": "retweeted",
                    "id": "1275556031876087808"
                }
            ],
            "text": "RT @TwitterForGood: Hear from our very own @d_lux_brand on fighting racism and promoting equity. Register 👇 https://t.co/OlqqqIZzVJ"
        },
        {
            "author_id": "773578328498372608",
            "conversation_id": "1275518378271141890",
            "created_at": "2020-06-23T19:57:34.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 19,
                        "end": 27,
                        "tag": "COVID19"
                    },
                    {
                        "start": 131,
                        "end": 143,
                        "tag": "ThereIsHelp"
                    }
                ],
                "mentions": [
                    {
                        "start": 3,
                        "end": 10,
                        "username": "Policy"
                    },
                    {
                        "start": 68,
                        "end": 80,
                        "username": "unwomenasia"
                    }
                ]
            },
            "id": "1275518378271141890",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1273667366497521666"
                }
            ],
            "text": "RT @Policy: During #COVID19, gender-based violence has risen.\n\nWith @unwomenasia &amp; other critical partners, we've expanded our #ThereIsHelp…"
        },
        {
            "author_id": "773578328498372608",
            "conversation_id": "1275473478779469825",
            "created_at": "2020-06-23T16:59:09.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 10,
                        "username": "Policy"
                    }
                ]
            },
            "id": "1275473478779469825",
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275192966953476100"
                }
            ],
            "text": "RT @Policy: Statement on US high-skilled immigration proclamation: \n\n\"This proclamation undermines America’s greatest economic asset: its d…"
        }
    ],
    "errors": [
        {
            "detail": "Could not find tweet with ids: [1276230436478386177].",
            "title": "Not Found Error",
            "resource_type": "tweet",
            "parameter": "ids",
            "value": "1276230436478386177",
            "type": "https://api.twitter.com/2/problems/resource-not-found"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: User Lookup 

## End-point: User by ID
This endpoint returns details about a user by ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||


### Response: 200
```json
{
    "errors": [
        {
            "detail": "Could not find user with id: [2244994946].",
            "title": "Not Found Error",
            "resource_type": "user",
            "parameter": "id",
            "value": "2244994946",
            "type": "https://api.twitter.com/2/problems/resource-not-found"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Users by ID
This endpoint returns details about up to 100 users by ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users?ids=
>```
### Query Params

|Param|value|
|---|---|
|ids||
|user.fields||
|expansions||
|tweet.fields||


### Response: 200
```json
{
    "data": [
        {
            "created_at": "2007-02-20T14:35:54.000Z",
            "description": "#BlackTransLivesMatter\n#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/TAXQpspyHn",
                            "expanded_url": "https://about.twitter.com/",
                            "display_url": "about.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 22,
                            "tag": "BlackTransLivesMatter"
                        },
                        {
                            "start": 23,
                            "end": 40,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "783214",
            "location": "Everywhere",
            "name": "Twitter",
            "pinned_tweet_id": "1274087687469715457",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270500941498912768/W-80pLvu_normal.jpg",
            "protected": false,
            "url": "https://t.co/TAXQpspyHn",
            "username": "Twitter",
            "verified": true
        },
        {
            "created_at": "2013-12-14T04:35:55.000Z",
            "description": "The voice of Twitter's #DevRel team, and your official source for updates, news, & events about Twitter's API. \n\n#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/3ZX3TNiZCY",
                            "expanded_url": "https://developer.twitter.com/en/community",
                            "display_url": "developer.twitter.com/en/community"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 23,
                            "end": 30,
                            "tag": "DevRel"
                        },
                        {
                            "start": 113,
                            "end": 130,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "2244994945",
            "location": "127.0.0.1",
            "name": "Twitter Dev",
            "pinned_tweet_id": "1255542774432063488",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1267175364003901441/tBZNFAgA_normal.jpg",
            "protected": false,
            "url": "https://t.co/3ZX3TNiZCY",
            "username": "TwitterDev",
            "verified": true
        },
        {
            "created_at": "2007-05-23T06:01:13.000Z",
            "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/8IkCzCDr19",
                            "expanded_url": "https://developer.twitter.com",
                            "display_url": "developer.twitter.com"
                        }
                    ]
                }
            },
            "id": "6253282",
            "location": "San Francisco, CA",
            "name": "Twitter API",
            "profile_image_url": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
            "protected": false,
            "url": "https://t.co/8IkCzCDr19",
            "username": "TwitterAPI",
            "verified": true
        },
        {
            "created_at": "2012-02-17T20:40:28.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/UFN8PpMrxw",
                            "expanded_url": "https://careers.twitter.com/content/careers-twitter/en/jobs.html#location=careers-twitter%3Alocation",
                            "display_url": "careers.twitter.com/content/career…"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "495309159",
            "location": "New York, NY",
            "name": "Twitter New York City",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1016781101011034115/p0Ie-_Dr_normal.jpg",
            "protected": false,
            "url": "https://t.co/UFN8PpMrxw",
            "username": "TwitterNYC",
            "verified": true
        },
        {
            "created_at": "2010-07-28T18:40:01.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/MQRffLoRTw",
                            "expanded_url": "https://careers.twitter.com/",
                            "display_url": "careers.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "172020392",
            "location": "San Francisco, CA",
            "name": "Twitter San Francisco",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875159529008226305/7jXeHhZC_normal.jpg",
            "protected": false,
            "url": "https://t.co/MQRffLoRTw",
            "username": "TwitterSF",
            "verified": true
        },
        {
            "created_at": "2009-12-09T21:00:57.000Z",
            "description": "Tweeting the latest safety tools, resources, and updates from @Twitter. For support, visit https://t.co/heEvRrCFXn",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/heEvRrCFXn",
                            "expanded_url": "https://help.twitter.com",
                            "display_url": "help.twitter.com"
                        }
                    ]
                },
                "description": {
                    "urls": [
                        {
                            "start": 91,
                            "end": 114,
                            "url": "https://t.co/heEvRrCFXn",
                            "expanded_url": "https://help.twitter.com",
                            "display_url": "help.twitter.com"
                        }
                    ],
                    "mentions": [
                        {
                            "start": 62,
                            "end": 70,
                            "username": "Twitter"
                        }
                    ]
                }
            },
            "id": "95731075",
            "location": "Twitter HQ",
            "name": "Twitter Safety",
            "pinned_tweet_id": "1271186240323432452",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875170358218735617/qYyASCpq_normal.jpg",
            "protected": false,
            "url": "https://t.co/heEvRrCFXn",
            "username": "TwitterSafety",
            "verified": true
        },
        {
            "created_at": "2014-06-06T01:19:20.000Z",
            "description": "#BlackLivesMatter   Header Art by @itsayybee",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/EoaAx7ae6x",
                            "expanded_url": "https://about.twitter.com/careers",
                            "display_url": "about.twitter.com/careers"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ],
                    "mentions": [
                        {
                            "start": 34,
                            "end": 44,
                            "username": "itsayybee"
                        }
                    ]
                }
            },
            "id": "2548985366",
            "location": "#JoinTheFlock",
            "name": "Twitter Blackbirds",
            "pinned_tweet_id": "1274014870707437570",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1013002743278170113/VWJApXAh_normal.jpg",
            "protected": false,
            "url": "https://t.co/EoaAx7ae6x",
            "username": "Blackbirds",
            "verified": true
        },
        {
            "created_at": "2011-04-06T00:11:41.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/990q7Opv1s",
                            "expanded_url": "https://www.twitter.com",
                            "display_url": "twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "277761722",
            "name": "Twitter UK",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270621519740313600/lZTxsbZt_normal.jpg",
            "protected": false,
            "url": "https://t.co/990q7Opv1s",
            "username": "TwitterUK",
            "verified": true
        },
        {
            "created_at": "2008-12-04T18:51:57.000Z",
            "description": "#BlackLivesMatter #AlwaysProud\nHere to help. 🖤",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/heEvRrl4yN",
                            "expanded_url": "https://help.twitter.com",
                            "display_url": "help.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        },
                        {
                            "start": 18,
                            "end": 30,
                            "tag": "AlwaysProud"
                        }
                    ]
                }
            },
            "id": "17874544",
            "location": "Twitter HQ",
            "name": "Twitter Support",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1266884366279471105/OTps6MBS_normal.jpg",
            "protected": false,
            "url": "https://t.co/heEvRrl4yN",
            "username": "TwitterSupport",
            "verified": true
        },
        {
            "created_at": "2011-05-17T17:54:29.000Z",
            "description": "We ride with Bubba.",
            "id": "300392950",
            "name": "Twitter Sports",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1275163449937387520/wEcMEvmG_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterSports",
            "verified": true
        },
        {
            "created_at": "2009-11-04T21:06:16.000Z",
            "description": "The voice of Twitter’s product design team.",
            "id": "87532773",
            "location": "SF, NYC, BDR, LON, SEA, JP, DC",
            "name": "Twitter Design",
            "pinned_tweet_id": "1277664599400042496",
            "profile_image_url": "https://pbs.twimg.com/profile_images/453289910363906048/mybOhh4Z_normal.jpeg",
            "protected": false,
            "url": "",
            "username": "TwitterDesign",
            "verified": true
        },
        {
            "created_at": "2011-09-13T01:06:02.000Z",
            "description": "Spotlighting best practices and innovative uses of Twitter by journalists and newsrooms.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/ZJ2tqfNy3t",
                            "expanded_url": "https://media.twitter.com/news",
                            "display_url": "media.twitter.com/news"
                        }
                    ]
                }
            },
            "id": "372575989",
            "location": "Newsrooms everywhere",
            "name": "Twitter News",
            "pinned_tweet_id": "1276168522134102017",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875126165597372416/NXVpRuG2_normal.jpg",
            "protected": false,
            "url": "https://t.co/ZJ2tqfNy3t",
            "username": "TwitterNews",
            "verified": true
        },
        {
            "created_at": "2015-06-30T01:06:59.000Z",
            "description": "The best of what’s happening on Twitter in an instant.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/nYOx6qThjk",
                            "expanded_url": "https://about.twitter.com/company/moments-guidelines",
                            "display_url": "about.twitter.com/company/moment…"
                        }
                    ]
                }
            },
            "id": "3260518932",
            "location": "New York, USA",
            "name": "Twitter Moments",
            "profile_image_url": "https://pbs.twimg.com/profile_images/651463624330907648/OzaAcuSR_normal.png",
            "protected": false,
            "url": "https://t.co/nYOx6qThjk",
            "username": "TwitterMoments",
            "verified": true
        },
        {
            "created_at": "2010-03-09T01:53:22.000Z",
            "description": "Get better at Twitter. We're your resource for how to find your corner of Twitter and grow your business.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/5kMjmqmojX",
                            "expanded_url": "https://business.twitter.com/",
                            "display_url": "business.twitter.com"
                        }
                    ]
                }
            },
            "id": "121291606",
            "location": "San Francisco, CA",
            "name": "Twitter Business",
            "pinned_tweet_id": "1245486325643403264",
            "profile_image_url": "https://pbs.twimg.com/profile_images/941415294794317824/gaj36XL5_normal.jpg",
            "protected": false,
            "url": "https://t.co/5kMjmqmojX",
            "username": "TwitterBusiness",
            "verified": true
        },
        {
            "created_at": "2010-06-21T18:34:36.000Z",
            "description": "Highlighting great uses of @Twitter in the foundation & non-profit communities. For press inquiries, please contact press@twitter.com.",
            "entities": {
                "description": {
                    "mentions": [
                        {
                            "start": 27,
                            "end": 35,
                            "username": "Twitter"
                        }
                    ]
                }
            },
            "id": "158079127",
            "location": "Twitter",
            "name": "Twitter Nonprofits",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875159126459924481/FpgRIUJr_normal.jpg",
            "protected": false,
            "url": "",
            "username": "Nonprofits",
            "verified": true
        },
        {
            "created_at": "2015-07-18T00:54:11.000Z",
            "description": "horizontal over vertical",
            "id": "3282859598",
            "name": "Twitter Video",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1104106979788763138/lFxnLjkv_normal.png",
            "protected": false,
            "url": "",
            "username": "TwitterVideo",
            "verified": true
        },
        {
            "created_at": "2010-01-11T05:44:35.000Z",
            "description": "ट्विटर - The official Twitter India account.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/7IDoW8iFLm",
                            "expanded_url": "https://twitter.com",
                            "display_url": "twitter.com"
                        }
                    ]
                }
            },
            "id": "103770785",
            "name": "Twitter India",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1012752671344771072/V7P59P0p_normal.jpg",
            "protected": false,
            "url": "https://t.co/7IDoW8iFLm",
            "username": "TwitterIndia",
            "verified": true
        },
        {
            "created_at": "2012-05-21T03:07:38.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "586198217",
            "name": "Twitter TV",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1273408970162462720/ZlrL3pgd_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterTV",
            "verified": true
        },
        {
            "created_at": "2010-11-16T23:59:11.000Z",
            "description": "트위터 코리아의 공식 계정입니다. 트위터 서비스 관련 문의는 https://t.co/jTMg7YsLw5 을, 광고 관련 문의는 @TwitterMktgKR 계정을 이용해 주세요",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/SvWUEpsmUj",
                            "expanded_url": "https://blog.twitter.com/korea",
                            "display_url": "blog.twitter.com/korea"
                        }
                    ]
                },
                "description": {
                    "urls": [
                        {
                            "start": 34,
                            "end": 57,
                            "url": "https://t.co/jTMg7YsLw5",
                            "expanded_url": "https://support.twitter.com",
                            "display_url": "support.twitter.com"
                        }
                    ],
                    "mentions": [
                        {
                            "start": 71,
                            "end": 85,
                            "username": "TwitterMktgKR"
                        }
                    ]
                }
            },
            "id": "216531294",
            "location": "대한민국",
            "name": "Twitter Korea",
            "pinned_tweet_id": "1277782541995401216",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1256433106891845632/OwLFJ_N4_normal.jpg",
            "protected": false,
            "url": "https://t.co/SvWUEpsmUj",
            "username": "TwitterKorea",
            "verified": true
        },
        {
            "created_at": "2013-06-17T23:57:45.000Z",
            "description": "Data-driven insights about notable moments and conversations from Twitter, Inc., plus tips and tricks to help you get the most out of Twitter data.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/Ca4ib1oKLW",
                            "expanded_url": "https://blog.twitter.com/data",
                            "display_url": "blog.twitter.com/data"
                        }
                    ]
                }
            },
            "id": "1526228120",
            "location": "San Francisco",
            "name": "Twitter Data",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875168307585794048/yuE68O2__normal.jpg",
            "protected": false,
            "url": "https://t.co/Ca4ib1oKLW",
            "username": "TwitterData",
            "verified": true
        },
        {
            "created_at": "2010-12-04T23:27:01.000Z",
            "description": "What’s happening in government & elections worldwide. Multilingual 🗣️ & well-traveled. 🛄",
            "id": "222953824",
            "name": "TwitterGov",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875135141135302656/eiM2Wz66_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterGov",
            "verified": true
        },
        {
            "created_at": "2013-07-18T16:41:59.000Z",
            "description": "Official Account of Twitter Investor Relations.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/0pgKNEmUjt",
                            "expanded_url": "https://investor.twitterinc.com/",
                            "display_url": "investor.twitterinc.com"
                        }
                    ]
                }
            },
            "id": "1603818258",
            "name": "Twitter Investor Relations",
            "pinned_tweet_id": "1255826376885596161",
            "profile_image_url": "https://pbs.twimg.com/profile_images/941403661216899072/n_fXrUW9_normal.jpg",
            "protected": false,
            "url": "https://t.co/0pgKNEmUjt",
            "username": "TwitterIR",
            "verified": true
        },
        {
            "created_at": "2014-06-06T01:23:52.000Z",
            "description": "#BlackLivesMatter\nProfile Art by @temi_coker",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/EoaAx7rOY5",
                            "expanded_url": "https://about.twitter.com/careers",
                            "display_url": "about.twitter.com/careers"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ],
                    "mentions": [
                        {
                            "start": 33,
                            "end": 44,
                            "username": "temi_coker"
                        }
                    ]
                }
            },
            "id": "2548979088",
            "location": "Global",
            "name": "Twitter Alas",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1013158245853085696/88c5YF8V_normal.jpg",
            "protected": false,
            "url": "https://t.co/EoaAx7rOY5",
            "username": "TwitterAlas",
            "verified": true
        },
        {
            "created_at": "2013-12-14T04:31:10.000Z",
            "description": "The official Twitter Singapore account. For anything needing immediate attention, please contact https://t.co/qq1HEzdMA2.",
            "entities": {
                "description": {
                    "urls": [
                        {
                            "start": 97,
                            "end": 120,
                            "url": "https://t.co/qq1HEzdMA2",
                            "expanded_url": "https://support.twitter.com",
                            "display_url": "support.twitter.com"
                        }
                    ]
                }
            },
            "id": "2244983430",
            "name": "Twitter Singapore",
            "pinned_tweet_id": "1276392707968004096",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875094332365090816/tcm6HqXp_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterSG",
            "verified": true
        },
        {
            "created_at": "2013-04-12T21:02:58.000Z",
            "description": "All things Canada on Twitter. #BlackLivesMatter",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 30,
                            "end": 47,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "1347713256",
            "name": "Twitter Canada",
            "pinned_tweet_id": "1273291819527352321",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270799737680207876/bfMP4_DT_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterCanada",
            "verified": true
        },
        {
            "created_at": "2011-09-20T15:18:34.000Z",
            "description": "Open Programs at Twitter.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 22,
                            "url": "http://t.co/Hc7Cv220E7",
                            "expanded_url": "https://opensource.twitter.com",
                            "display_url": "opensource.twitter.com"
                        }
                    ]
                }
            },
            "id": "376825877",
            "location": "Twitter HQ",
            "name": "Twitter Open Source",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875169334573678592/I7zte5WY_normal.jpg",
            "protected": false,
            "url": "http://t.co/Hc7Cv220E7",
            "username": "TwitterOSS",
            "verified": true
        },
        {
            "created_at": "2007-06-16T00:14:36.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "6844292",
            "name": "Twitter Engineering",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1267839380405665793/uunuoNK4_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterEng",
            "verified": true
        },
        {
            "created_at": "2016-06-01T21:20:47.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "738118115595165697",
            "name": "Twitter Stripes",
            "pinned_tweet_id": "1193902721755230209",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1012738853247959040/4-g31u_p_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterStripes",
            "verified": true
        },
        {
            "created_at": "2016-06-01T21:22:15.000Z",
            "description": "#BlackLivesMatter #AlwaysProud",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        },
                        {
                            "start": 18,
                            "end": 30,
                            "tag": "AlwaysProud"
                        }
                    ]
                }
            },
            "id": "738118487122419712",
            "name": "Twitter Asians",
            "pinned_tweet_id": "1265347362853191681",
            "profile_image_url": "https://pbs.twimg.com/profile_images/942832773999423488/984rqZa-_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterAsians",
            "verified": true
        },
        {
            "created_at": "2010-11-23T16:45:21.000Z",
            "description": "The voice of Twitter's Global Public Policy team",
            "id": "218984871",
            "name": "Twitter Public Policy",
            "pinned_tweet_id": "1235212091923013632",
            "profile_image_url": "https://pbs.twimg.com/profile_images/880132255011586048/rlZKfFFe_normal.jpg",
            "protected": false,
            "url": "",
            "username": "Policy",
            "verified": true
        },
        {
            "created_at": "2014-06-06T21:10:35.000Z",
            "description": "Selamat datang di akun resmi Twitter Indonesia. Untuk informasi lebih lanjut, kunjungi https://t.co/heEvRrl4yN. Blog: https://t.co/fst66a65my.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/7IDoW8iFLm",
                            "expanded_url": "https://twitter.com",
                            "display_url": "twitter.com"
                        }
                    ]
                },
                "description": {
                    "urls": [
                        {
                            "start": 87,
                            "end": 110,
                            "url": "https://t.co/heEvRrl4yN",
                            "expanded_url": "https://help.twitter.com",
                            "display_url": "help.twitter.com"
                        },
                        {
                            "start": 118,
                            "end": 141,
                            "url": "https://t.co/fst66a65my",
                            "expanded_url": "https://blog.twitter.com/indonesia",
                            "display_url": "blog.twitter.com/indonesia"
                        }
                    ]
                }
            },
            "id": "2550997820",
            "name": "Twitter Indonesia",
            "profile_image_url": "https://pbs.twimg.com/profile_images/941531180448415744/ghwtfXVM_normal.jpg",
            "protected": false,
            "url": "https://t.co/7IDoW8iFLm",
            "username": "TwitterID",
            "verified": true
        },
        {
            "created_at": "2013-02-08T07:33:47.000Z",
            "description": "政治、行政、自治体の話題をお届けするTwitter Japanによる公式アカウントです。",
            "id": "1159458169",
            "location": "Tokyo, JAPAN",
            "name": "Twitter 政治",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875135373034143744/rJ9cIT6v_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterGovJP",
            "verified": true
        },
        {
            "created_at": "2014-01-17T15:28:22.000Z",
            "description": "The best of what’s happening on Twitter in an instant.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/nYOx6qThjk",
                            "expanded_url": "https://about.twitter.com/company/moments-guidelines",
                            "display_url": "about.twitter.com/company/moment…"
                        }
                    ]
                }
            },
            "id": "2296297326",
            "location": "London, England",
            "name": "Twitter Moments UK & Ireland",
            "profile_image_url": "https://pbs.twimg.com/profile_images/826180910974377984/c5YMMdP5_normal.jpg",
            "protected": false,
            "url": "https://t.co/nYOx6qThjk",
            "username": "UKMoments",
            "verified": true
        },
        {
            "created_at": "2011-01-05T19:52:33.000Z",
            "description": "👋 Twitter Communications team here! Check out our Tweets to see what's happening at Twitter. For media Qs @ us. #BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/SPGIfM1UIR",
                            "expanded_url": "https://about.twitter.com",
                            "display_url": "about.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 112,
                            "end": 129,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "234489024",
            "name": "Twitter Comms",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270788093931446273/bkOFGWwe_normal.jpg",
            "protected": false,
            "url": "https://t.co/SPGIfM1UIR",
            "username": "TwitterComms",
            "verified": true
        },
        {
            "created_at": "2015-10-12T22:08:01.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "3873936134",
            "location": "Twitter Island",
            "name": "Twitter Gaming @ home",
            "pinned_tweet_id": "1250499154054270976",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270501407573995520/RvaQxXZ6_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterGaming",
            "verified": true
        },
        {
            "created_at": "2013-12-03T21:39:44.000Z",
            "description": "Welcome to the official @Twitter account for the #MiddleEast and #NorthAfrica كلّ ما يتعلّق بآخر أخبار ومستجدّات #تويتر في #الشرق_الأوسط و #شمال_أفريقيا",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/f6xSlVOvPK",
                            "expanded_url": "https://blog.twitter.com/official/ar.html",
                            "display_url": "blog.twitter.com/official/ar.ht…"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 49,
                            "end": 60,
                            "tag": "MiddleEast"
                        },
                        {
                            "start": 65,
                            "end": 77,
                            "tag": "NorthAfrica"
                        },
                        {
                            "start": 113,
                            "end": 119,
                            "tag": "تويتر"
                        },
                        {
                            "start": 123,
                            "end": 136,
                            "tag": "الشرق_الأوسط"
                        },
                        {
                            "start": 139,
                            "end": 152,
                            "tag": "شمال_أفريقيا"
                        }
                    ],
                    "mentions": [
                        {
                            "start": 24,
                            "end": 32,
                            "username": "Twitter"
                        }
                    ]
                }
            },
            "id": "2228891959",
            "location": "MENA",
            "name": "Twitter MENA",
            "profile_image_url": "https://pbs.twimg.com/profile_images/942432939748364290/z-jTRDuZ_normal.jpg",
            "protected": false,
            "url": "https://t.co/f6xSlVOvPK",
            "username": "TwitterMENA",
            "verified": true
        },
        {
            "created_at": "2012-08-30T16:54:44.000Z",
            "description": "News and updates about the Twitter Official Partner Program.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/fsX4hsZ5Tr",
                            "expanded_url": "https://partners.twitter.com/",
                            "display_url": "partners.twitter.com"
                        }
                    ]
                }
            },
            "id": "791978718",
            "name": "Twitter Official Partner",
            "pinned_tweet_id": "1229818273325371392",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270792615013711872/VR70tT9T_normal.jpg",
            "protected": false,
            "url": "https://t.co/fsX4hsZ5Tr",
            "username": "OfficialPartner",
            "verified": true
        },
        {
            "created_at": "2011-12-03T15:36:31.000Z",
            "description": "Reading: everything",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/SPGIfM1UIR",
                            "expanded_url": "https://about.twitter.com",
                            "display_url": "about.twitter.com"
                        }
                    ]
                }
            },
            "id": "427475002",
            "name": "Twitter Books",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270501673790775297/pxixrhAT_normal.jpg",
            "protected": false,
            "url": "https://t.co/SPGIfM1UIR",
            "username": "TwitterBooks",
            "verified": true
        },
        {
            "created_at": "2019-11-12T14:56:22.000Z",
            "description": "Your best Tweets. Retweeted.",
            "id": "1194267639100723200",
            "name": "Twitter Retweets",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1201611308950532096/rBjVNSsR_normal.png",
            "protected": false,
            "url": "",
            "username": "TwitterRetweets",
            "verified": true
        },
        {
            "created_at": "2019-09-03T19:59:02.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "1168976680867762177",
            "name": "Twitter Able",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1168989681444425733/XTZAcOSc_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterAble",
            "verified": true
        },
        {
            "created_at": "2012-10-26T06:22:03.000Z",
            "description": "The official account for Twitter SRE.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 22,
                            "url": "http://t.co/gJvsjUZJ3O",
                            "expanded_url": "https://engineering.twitter.com",
                            "display_url": "engineering.twitter.com"
                        }
                    ]
                }
            },
            "id": "905409822",
            "location": "San Francisco, CA",
            "name": "Twitter SRE",
            "profile_image_url": "https://pbs.twimg.com/profile_images/3755128758/8c6e4cd8246c24c432372385ee534b1c_normal.jpeg",
            "protected": false,
            "url": "http://t.co/gJvsjUZJ3O",
            "username": "TwitterSRE",
            "verified": true
        },
        {
            "created_at": "2016-06-01T21:09:54.000Z",
            "description": "The best of what’s happening on Twitter in an instant.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/JvK2Aw7iqc",
                            "expanded_url": "https://twitter.com/i/moments",
                            "display_url": "twitter.com/i/moments"
                        }
                    ]
                }
            },
            "id": "738115375477362688",
            "location": "India",
            "name": "Twitter Moments India",
            "profile_image_url": "https://pbs.twimg.com/profile_images/939174997540638721/pn1lxe4y_normal.jpg",
            "protected": false,
            "url": "https://t.co/JvK2Aw7iqc",
            "username": "MomentsIndia",
            "verified": true
        },
        {
            "created_at": "2009-11-09T18:18:15.000Z",
            "description": "Información y consejos de seguridad y actualizaciones de @Twitter.\n\nInformações e conselhos de segurança e atualizações do @Twitter.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/heEvRrCFXn",
                            "expanded_url": "https://help.twitter.com",
                            "display_url": "help.twitter.com"
                        }
                    ]
                },
                "description": {
                    "mentions": [
                        {
                            "start": 57,
                            "end": 65,
                            "username": "Twitter"
                        },
                        {
                            "start": 123,
                            "end": 131,
                            "username": "Twitter"
                        }
                    ]
                }
            },
            "id": "88723966",
            "name": "Twitter Seguro",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875437956118360064/ZOwIAvAb_normal.jpg",
            "protected": false,
            "url": "https://t.co/heEvRrCFXn",
            "username": "TwitterSeguro",
            "verified": true
        },
        {
            "created_at": "2018-10-08T19:45:09.000Z",
            "description": "Que pasa ahora in the most vibrant multicultural city in the world. #SoMiami",
            "entities": {
                "description": {
                    "hashtags": [
                        {
                            "start": 68,
                            "end": 76,
                            "tag": "SoMiami"
                        }
                    ]
                }
            },
            "id": "1049385226424786944",
            "location": "Miami, FL",
            "name": "Twitter Miami",
            "pinned_tweet_id": "1275168469542146049",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1275178822107791361/4egjzUcS_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterMiami",
            "verified": true
        },
        {
            "created_at": "2011-04-18T20:48:55.000Z",
            "description": "The trials and tribulations of Twitter's past & present interns, also known as the 'Terns'. Find out what they're working on and why you should join the flock.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/Zn0hsX64IK",
                            "expanded_url": "https://careers.twitter.com/en/university.html",
                            "display_url": "careers.twitter.com/en/university.…"
                        }
                    ]
                }
            },
            "id": "284201599",
            "location": "San Francisco",
            "name": "Twitter Terns",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875164144483180544/vaHSsa6n_normal.jpg",
            "protected": false,
            "url": "https://t.co/Zn0hsX64IK",
            "username": "terns",
            "verified": true
        },
        {
            "created_at": "2013-08-27T22:03:14.000Z",
            "description": "Twitter Recruiting in Japan | Twitter Japanでの採用、キャリア、イベントなどについてツイートしています。\n#LoveWhereYouWork",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/UFN8Pq42p4",
                            "expanded_url": "https://careers.twitter.com/content/careers-twitter/en/jobs.html#location=careers-twitter%3Alocation",
                            "display_url": "careers.twitter.com/content/career…"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 74,
                            "end": 91,
                            "tag": "LoveWhereYouWork"
                        }
                    ]
                }
            },
            "id": "1705676064",
            "location": "Tokyo, Japan",
            "name": "Twitter公式採用アカウント",
            "pinned_tweet_id": "1139089650008510464",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875166441439232000/uiHVcOJs_normal.jpg",
            "protected": false,
            "url": "https://t.co/UFN8Pq42p4",
            "username": "JoinTheFlockJP",
            "verified": true
        },
        {
            "created_at": "2014-10-17T22:38:01.000Z",
            "description": "Twitter Fashion Japan 公式アカウントです",
            "id": "2861317614",
            "name": "Twitter ファッション",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875118807391420419/ZsSkVDBs_normal.jpg",
            "protected": false,
            "url": "",
            "username": "TwitterFashnJP",
            "verified": true
        },
        {
            "created_at": "2015-10-12T22:05:00.000Z",
            "description": "Lo mejor que está sucediendo en Twitter en español, en un instante.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/ttGn9BmUWD",
                            "expanded_url": "https://blog.twitter.com/es/2016/tweets-que-cuentan-historias-moments-m-xico-ya-est-disponible",
                            "display_url": "blog.twitter.com/es/2016/tweets…"
                        }
                    ]
                }
            },
            "id": "3873965293",
            "location": "Worldwide",
            "name": "Twitter Moments en Español",
            "pinned_tweet_id": "1254702677424058369",
            "profile_image_url": "https://pbs.twimg.com/profile_images/752568687761186816/AEtUZtm1_normal.jpg",
            "protected": false,
            "url": "https://t.co/ttGn9BmUWD",
            "username": "MomentsES",
            "verified": true
        },
        {
            "created_at": "2020-03-30T21:02:29.000Z",
            "description": "ยินดีต้อนรับสู่แอคเคาท์ทวิตเตอร์อย่างเป็นทางการประจำประเทศไทย! ต้องการข้อมูลเกี่ยวกับการใช้งานทวิตเตอร์​เพิ่มเติม โปรดคลิก https://t.co/heEvRrl4yN.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/f9RtbmyN3p",
                            "expanded_url": "https://twitter.com/home",
                            "display_url": "twitter.com/home"
                        }
                    ]
                },
                "description": {
                    "urls": [
                        {
                            "start": 123,
                            "end": 146,
                            "url": "https://t.co/heEvRrl4yN",
                            "expanded_url": "https://help.twitter.com",
                            "display_url": "help.twitter.com"
                        }
                    ]
                }
            },
            "id": "1244731491088809984",
            "name": "Twitter Thailand",
            "pinned_tweet_id": "1262948030271062016",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1248629937025753089/yt0lggXd_normal.png",
            "protected": false,
            "url": "https://t.co/f9RtbmyN3p",
            "username": "TwitterThailand",
            "verified": true
        },
        {
            "created_at": "2015-11-12T16:46:02.000Z",
            "description": "O melhor do que está acontecendo no Twitter em um instante.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/XPT5uPLlUa",
                            "expanded_url": "https://help.twitter.com/pt/rules-and-policies/twitter-moments-guidelines-and-principles",
                            "display_url": "help.twitter.com/pt/rules-and-p…"
                        }
                    ]
                }
            },
            "id": "4172587277",
            "location": "Sao Paulo, Brazil",
            "name": "Twitter Moments Brasil",
            "pinned_tweet_id": "1258114553470160896",
            "profile_image_url": "https://pbs.twimg.com/profile_images/666324297489739776/nyQKZybh_normal.png",
            "protected": false,
            "url": "https://t.co/XPT5uPLlUa",
            "username": "MomentsBrasil",
            "verified": true
        },
        {
            "created_at": "2016-04-05T21:35:30.000Z",
            "description": "The best videos on @TwitterIndia every day. Featuring product updates, videos, and tips!",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/tlbGqc89EN",
                            "expanded_url": "https://www.blog.twitter.com/india",
                            "display_url": "blog.twitter.com/india"
                        }
                    ]
                },
                "description": {
                    "mentions": [
                        {
                            "start": 19,
                            "end": 32,
                            "username": "TwitterIndia"
                        }
                    ]
                }
            },
            "id": "717465714357972992",
            "location": "India",
            "name": "Twitter Video India",
            "pinned_tweet_id": "895195543802060801",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875794713214726144/_eT7MWCI_normal.jpg",
            "protected": false,
            "url": "https://t.co/tlbGqc89EN",
            "username": "TwitterVideoIN",
            "verified": true
        },
        {
            "created_at": "2012-10-05T01:15:47.000Z",
            "description": "Music on Twitter | 日本公式アカウント",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/QjOgMnzmxL",
                            "expanded_url": "https://blog.twitter.com/ja/media",
                            "display_url": "blog.twitter.com/ja/media"
                        }
                    ]
                }
            },
            "id": "862314223",
            "location": "Tokyo, Japan",
            "name": "Twitter ミュージック",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875133214624436224/wPJZeP0H_normal.jpg",
            "protected": false,
            "url": "https://t.co/QjOgMnzmxL",
            "username": "TwitterMusicJP",
            "verified": true
        },
        {
            "created_at": "2014-06-06T21:13:39.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/6Xy5Trzaep",
                            "expanded_url": "https://marketing.twitter.com",
                            "display_url": "marketing.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "2551000568",
            "location": "Mexico",
            "name": "Twitter Mktg Latam",
            "pinned_tweet_id": "1242161083646869509",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1275443824593039361/eGA-rVKf_normal.jpg",
            "protected": false,
            "url": "https://t.co/6Xy5Trzaep",
            "username": "TwitterMktLatam",
            "verified": true
        },
        {
            "created_at": "2014-06-06T01:22:29.000Z",
            "description": "Já pensou em trabalhar no Twitter Brasil? Acompanhe por aqui as nossas novidades e oportunidades de carreira. Bem-vindo (a) ao nosso ninho!",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/2Ien1T4L94",
                            "expanded_url": "https://careers.twitter.com",
                            "display_url": "careers.twitter.com"
                        }
                    ]
                }
            },
            "id": "2548977510",
            "location": "São Paulo",
            "name": "Twitter Careers Brasil",
            "pinned_tweet_id": "1159857897012105219",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875166905111166976/7kYhxexq_normal.jpg",
            "protected": false,
            "url": "https://t.co/2Ien1T4L94",
            "username": "JoinTheFlockBR",
            "verified": true
        },
        {
            "created_at": "2013-02-08T05:54:29.000Z",
            "description": "Twitter Sports Japan 公式アカウントです。",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/QjOgMnzmxL",
                            "expanded_url": "https://blog.twitter.com/ja/media",
                            "display_url": "blog.twitter.com/ja/media"
                        }
                    ]
                }
            },
            "id": "1159274324",
            "location": "Tokyo, JAPAN",
            "name": "Twitter スポーツ",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875125949771128832/dCo30emX_normal.jpg",
            "protected": false,
            "url": "https://t.co/QjOgMnzmxL",
            "username": "TwitterSportsJP",
            "verified": true
        }
    ],
    "errors": [
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274087687469715457",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1274087687469715457].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255542774432063488",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1255542774432063488].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1271186240323432452",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1271186240323432452].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1274014870707437570",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1274014870707437570].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277664599400042496",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1277664599400042496].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276168522134102017",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1276168522134102017].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1245486325643403264",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1245486325643403264].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1277782541995401216",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1277782541995401216].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1255826376885596161",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1255826376885596161].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1276392707968004096",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1276392707968004096].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1273291819527352321",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1273291819527352321].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1193902721755230209",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1193902721755230209].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1265347362853191681",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1265347362853191681].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1235212091923013632",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1235212091923013632].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1250499154054270976",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1250499154054270976].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1229818273325371392",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1229818273325371392].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1275168469542146049",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1275168469542146049].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1139089650008510464",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1139089650008510464].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1254702677424058369",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1254702677424058369].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1262948030271062016",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1262948030271062016].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1258114553470160896",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1258114553470160896].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "895195543802060801",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [895195543802060801].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1242161083646869509",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1242161083646869509].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "non_public_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "organic_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.impression_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.like_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.reply_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.retweet_count",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.url_link_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        },
        {
            "resource_type": "tweet",
            "field": "promoted_metrics.user_profile_clicks",
            "parameter": "pinned_tweet_id",
            "value": "1159857897012105219",
            "section": "includes",
            "title": "Authorization Error",
            "detail": "Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with pinned_tweet_id : [1159857897012105219].",
            "type": "https://api.twitter.com/2/problems/not-authorized-for-resource"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User by Username
This endpoint returns details about a user by username.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/by/username/:username
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||


### Response: 200
```json
{
    "errors": [
        {
            "detail": "Could not find user with username: [TwitterDec].",
            "title": "Not Found Error",
            "resource_type": "user",
            "parameter": "username",
            "value": "TwitterDec",
            "type": "https://api.twitter.com/2/problems/resource-not-found"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Users by Username
This endpoint returns details about up to 100 users specified by username.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/by?usernames=
>```
### Query Params

|Param|value|
|---|---|
|usernames||
|user.fields||
|expansions||
|tweet.fields||


### Response: 200
```json
{
    "data": [
        {
            "created_at": "2007-02-20T14:35:54.000Z",
            "description": "Black queer lives matter.\nBlack trans lives matter.\n#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/TAXQpspyHn",
                            "expanded_url": "https://about.twitter.com/",
                            "display_url": "about.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 52,
                            "end": 69,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "783214",
            "location": "Everywhere",
            "name": "Twitter",
            "pinned_tweet_id": "1274087687469715457",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1270500941498912768/W-80pLvu_normal.jpg",
            "protected": false,
            "url": "https://t.co/TAXQpspyHn",
            "username": "Twitter",
            "verified": true
        },
        {
            "created_at": "2013-12-14T04:35:55.000Z",
            "description": "The voice of Twitter's #DevRel team, and your official source for updates, news, & events about Twitter's API. \n\n#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/3ZX3TNiZCY",
                            "expanded_url": "https://developer.twitter.com/en/community",
                            "display_url": "developer.twitter.com/en/community"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 23,
                            "end": 30,
                            "tag": "DevRel"
                        },
                        {
                            "start": 113,
                            "end": 130,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "2244994945",
            "location": "127.0.0.1",
            "name": "Twitter Dev",
            "pinned_tweet_id": "1255542774432063488",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1267175364003901441/tBZNFAgA_normal.jpg",
            "protected": false,
            "url": "https://t.co/3ZX3TNiZCY",
            "username": "TwitterDev",
            "verified": true
        },
        {
            "created_at": "2007-05-23T06:01:13.000Z",
            "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/8IkCzCDr19",
                            "expanded_url": "https://developer.twitter.com",
                            "display_url": "developer.twitter.com"
                        }
                    ]
                }
            },
            "id": "6253282",
            "location": "San Francisco, CA",
            "name": "Twitter API",
            "profile_image_url": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
            "protected": false,
            "url": "https://t.co/8IkCzCDr19",
            "username": "TwitterAPI",
            "verified": true
        },
        {
            "created_at": "2012-02-17T20:40:28.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/UFN8PpMrxw",
                            "expanded_url": "https://careers.twitter.com/content/careers-twitter/en/jobs.html#location=careers-twitter%3Alocation",
                            "display_url": "careers.twitter.com/content/career…"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "495309159",
            "location": "New York, NY",
            "name": "Twitter New York City",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1016781101011034115/p0Ie-_Dr_normal.jpg",
            "protected": false,
            "url": "https://t.co/UFN8PpMrxw",
            "username": "TwitterNYC",
            "verified": true
        },
        {
            "created_at": "2010-07-28T18:40:01.000Z",
            "description": "#BlackLivesMatter",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "start": 0,
                            "end": 23,
                            "url": "https://t.co/MQRffLoRTw",
                            "expanded_url": "https://careers.twitter.com/",
                            "display_url": "careers.twitter.com"
                        }
                    ]
                },
                "description": {
                    "hashtags": [
                        {
                            "start": 0,
                            "end": 17,
                            "tag": "BlackLivesMatter"
                        }
                    ]
                }
            },
            "id": "172020392",
            "location": "San Francisco, CA",
            "name": "Twitter San Francisco",
            "profile_image_url": "https://pbs.twimg.com/profile_images/875159529008226305/7jXeHhZC_normal.jpg",
            "protected": false,
            "url": "https://t.co/MQRffLoRTw",
            "username": "TwitterSF",
            "verified": true
        }
    ],
    "includes": {
        "tweets": [
            {
                "attachments": {
                    "media_keys": [
                        "3_1274086027544498176"
                    ]
                },
                "author_id": "783214",
                "conversation_id": "1274087687469715457",
                "created_at": "2020-06-19T21:12:30.000Z",
                "entities": {
                    "mentions": [
                        {
                            "start": 17,
                            "end": 29,
                            "username": "FredTJoseph"
                        }
                    ],
                    "urls": [
                        {
                            "start": 30,
                            "end": 53,
                            "url": "https://t.co/lNTOkyguG1",
                            "expanded_url": "https://twitter.com/Twitter/status/1274087687469715457/photo/1",
                            "display_url": "pic.twitter.com/lNTOkyguG1"
                        }
                    ]
                },
                "id": "1274087687469715457",
                "lang": "et",
                "possibly_sensitive": false,
                "source": "Twitter Web App",
                "text": "📍 Minneapolis\n🗣️ @FredTJoseph https://t.co/lNTOkyguG1"
            },
            {
                "author_id": "2244994945",
                "conversation_id": "1255542774432063488",
                "created_at": "2020-04-29T17:01:38.000Z",
                "entities": {
                    "urls": [
                        {
                            "start": 264,
                            "end": 287,
                            "url": "https://t.co/BPqMcQzhId",
                            "expanded_url": "https://blog.twitter.com/developer/en_us/topics/tools/2020/covid19_public_conversation_data.html",
                            "display_url": "blog.twitter.com/developer/en_u…",
                            "images": [
                                {
                                    "url": "https://pbs.twimg.com/news_img/1274730688919613440/SEsqlE16?format=jpg&name=orig",
                                    "width": 1600,
                                    "height": 600
                                },
                                {
                                    "url": "https://pbs.twimg.com/news_img/1274730688919613440/SEsqlE16?format=jpg&name=150x150",
                                    "width": 150,
                                    "height": 150
                                }
                            ],
                            "status": 200,
                            "title": "Enabling study of the public conversation in a time of crisis",
                            "description": "To further support our company’s ongoing efforts, we want to enable developers and researchers to study the public conversation on COVID-19 in real-time.",
                            "unwound_url": "https://blog.twitter.com/developer/en_us/topics/tools/2020/covid19_public_conversation_data.html"
                        }
                    ]
                },
                "id": "1255542774432063488",
                "lang": "en",
                "possibly_sensitive": false,
                "source": "Twitter Web App",
                "text": "During these unprecedented times, what’s happening on Twitter can help the world better understand &amp; respond to the pandemic. \n\nWe're launching a free COVID-19 stream endpoint so qualified devs &amp; researchers can study the public conversation in real-time. https://t.co/BPqMcQzhId"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Authenticated User Lookup
This endpoint returns the information about an authorized user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/me
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||


### Response: 429
```json
Rate limit exceeded

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Follows 

## End-point: Followers of user ID
Returns a list of users who are followers of the specified user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/followers
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||
|max_results||
|pagination_token||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Users a user ID is following
Returns a list of users the specified user ID is following.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/following
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||
|max_results||
|pagination_token||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Follow a user ID
Allows a user ID to follow another user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/following
>```
### Body (**raw**)

```json
{
    "target_user_id": "2244994945"
}
```

### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unfollow a user ID
Allows a user ID to unfollow another user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_user_id-following) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:source_user_id/following/:target_user_id
>```
### Body (**raw**)

```json

```

### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Blocks 

## End-point: Block a user ID
Allows a user ID to block another user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/blocking
>```
### Body (**raw**)

```json
// Replace id-you-want-to-block with the ID you wish to block
{
    "target_user_id": "id-you-want-to-block"
}
```

### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Blocks lookup
Returns a list of users who are blocked by the specified user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/blocking
>```
### Query Params

|Param|value|
|---|---|
|user.fields|null|
|expansions|null|
|tweet.fields|null|
|max_results|null|
|pagination_token|null|


### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unblock a user ID
Allows a user ID to unblock another user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:source_user_id/blocking/:target_user_id
>```
### Body (**raw**)

```json

```

### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: List 
## 📁 Collection: List lookup 

## End-point: List by ID
This endpoint returns details about the List specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/lists/:id
>```
### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|list.fields||
|expansions||
|user.fields||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User owned Lists
This endpoint returns details on user owned Lists specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/owned_lists
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|list.fields||
|expansions||
|user.fields||
|max_results||
|pagination_token|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: Manage Lists 

## End-point: Create a list
Allows the authenticated user to create a new List.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/lists
>```
### Body (**raw**)

```json
{
    "name": "name-for-new-list",
    "description": "description-of-list",
    "private": false
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete a list
Allows the authenticated user to delete a list they own.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/lists/:id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update a list
Allows the authenticated user to update a List they own.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: PUT
>```
>https://api.twitter.com/2/lists/:id
>```
### Body (**raw**)

```json
{
    "name": "update-name",
    "description": "update-description",
    "private": false
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: List Tweets 

## End-point: List Tweets lookup
This endpoint returns all Tweets from a List specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/lists/:id/tweets
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|tweet.fields||
|expansions||
|user.fields||
|max_results||
|pagination_token|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: List members 

## End-point: Add a member
Allows the authenticated user to add a member to a List they own.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists-id-members) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/lists/:id/members
>```
### Body (**raw**)

```json
{
    "user_id": "user-id-to-add"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove a member
Allows the authenticated user to remove a member from a List they own.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id-members-user_id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/lists/:id/members/:user_id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Members lookup
This endpoint returns member details from the List specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-lists-id-members) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/lists/:id/members
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|user.fields||
|tweet.fields||
|expansions||
|max_results|null|
|pagination_token|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User memberships
This endpoint returns details on Lists a user is a member of specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/list_memberships
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|list.fields||
|user.fields||
|expansions||
|max_results|null|
|pagination_token|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: List follows 

## End-point: Follow a list
Allows the authenticated user to follow a specified List.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-users-id-followed-lists) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/followed_lists
>```
### Body (**raw**)

```json
{
    "list_id": "list-id-to-follow"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unfollow a list
Allows the authenticated user to unfollow a specified List.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-users-id-followed-lists-list_id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:id/followed_lists/:list_id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Follower lookup
This endpoint returns follower details from the List specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-lists-id-followers) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/lists/:id/followers
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|user.fields||
|tweet.fields||
|expansions||
|max_results|null|
|pagination_token|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User's followed Lists
This endpoint returns details on Lists a user follows specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/followed_lists
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|list.fields||
|user.fields||
|expansions||
|max_results|null|
|pagination_token|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: Pinned Lists 

## End-point: Pin a list
Allows the authenticated user to pin a specified List.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-users-id-pinned-lists) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/pinned_lists
>```
### Body (**raw**)

```json
{
    "list_id": "list-id-to-pin"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unpin a list
Allows the authenticated user to unpin a specified List.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-users-id-pinned-lists-list_id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/lists/:id/pinned_lists/:list_id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User's pinned Lists
This endpoint returns details on a user's pinned Lists specified by the requested ID

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/pinned_lists
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|list.fields||
|expansions||
|user.fields||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Manage Tweets 

## End-point: Create a Tweet
Allows an authenticated user to create a Tweet.

You can add parameters to post polls, quote Tweets, Tweet with reply settings, and Tweet to Super Followers in addition to other features.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweet) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/tweets
>```
### Body (**raw**)

```json
{
    "text": "Hello World!"
}
```

### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete a Tweet
Allows an authenticated user to delete a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweet) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/tweets/:id
>```
### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Mutes 

## End-point: Mute a user ID
Allows a user ID to mute another user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/muting
>```
### Body (**raw**)

```json
// Replace id-you-want-to-mute with the ID you wish to mute
{
    "target_user_id": "id-you-want-to-mute"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unmute a user ID
Allows a user ID to unmute another user.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:source_user_id/muting/:target_user_id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Mutes lookup
Returns a list of users who are muted by the specified user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/muting
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|user.fields|null|
|expansions|null|
|tweet.fields|null|
|max_results|null|
|pagination_token|null|


### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Quote Tweets 

## End-point: Quote Tweets by Tweet ID
Returns the most recent Tweets mentioning a single user specified by the requested user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/:id/quote_tweets
>```
### Query Params

|Param|value|
|---|---|
|max_results|null|
|start_time|null|
|end_time|null|
|since_id|null|
|until_id|null|
|pagination_token|null|
|expansions||
|tweet.fields||
|user.fields||
|media.fields|null|
|place.fields|null|
|poll.fields|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Hide Replies 

## End-point: Hide a reply
Provides the ability to hide a reply to a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: PUT
>```
>https://api.twitter.com/2/tweets/:id/hidden
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "hidden": true
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unhide a reply
Provides the ability to unhide a reply to a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: PUT
>```
>https://api.twitter.com/2/tweets/:id/hidden
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "hidden": false
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Search Tweets 

## End-point: Recent search
Search for public Tweets created in the last 7 days.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/search/recent?query=
>```
### Query Params

|Param|value|
|---|---|
|query||
|start_time||
|end_time||
|since_id||
|until_id||
|max_results||
|next_token||
|tweet.fields||
|expansions||
|media.fields||
|place.fields||
|poll.fields||
|user.fields||


### Response: 200
```json
{
    "data": [
        {
            "author_id": "1176828691365736451",
            "created_at": "2020-06-24T17:19:07.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 14,
                        "username": "skipbolden"
                    }
                ]
            },
            "id": "1275840892285399041",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275809336988557314"
                }
            ],
            "source": "Twitter Web App",
            "text": "RT @skipbolden: It's 1963 in The Bronx, NYC. The magic, the music, the mystery of growing up.\nKen Wahl, Karen Allen and John Friedrich in,…"
        },
        {
            "author_id": "13524182",
            "created_at": "2020-06-24T17:19:07.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 25,
                        "end": 30,
                        "tag": "NY12"
                    }
                ]
            },
            "id": "1275840892281249793",
            "in_reply_to_user_id": "13524182",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "replied_to",
                    "id": "1275781448855891968"
                }
            ],
            "source": "Twitter Web App",
            "text": "If Suraj Patel wins when #NY12 absentees get counted, Jerry Nadler and Max Rose will be the only white guys representing any part of NYC in Congress."
        },
        {
            "author_id": "15004848",
            "created_at": "2020-06-24T17:19:07.000Z",
            "id": "1275840891014561796",
            "lang": "en",
            "possibly_sensitive": false,
            "source": "Twitter for iPhone",
            "text": "Started offering online camps this week and initially devastated by the swap. Now find out we have kids with allergies (not a worry in this setting) &amp; kids from MD, NYC, and Zambia! Very cool to see the positives &amp; the kids cooking their hearts out!"
        },
        {
            "author_id": "956719622232924160",
            "created_at": "2020-06-24T17:19:06.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 18,
                        "username": "SoniaChanel617"
                    },
                    {
                        "start": 20,
                        "end": 28,
                        "username": "cvpayne"
                    }
                ]
            },
            "id": "1275840886774075396",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275840174296125440"
                }
            ],
            "source": "Twitter Web App",
            "text": "RT @SoniaChanel617: @cvpayne So many people are moving out of NYC. It’s crazy."
        },
        {
            "author_id": "1235426387957370880",
            "created_at": "2020-06-24T17:19:05.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 18,
                        "username": "DavidYankovich"
                    }
                ]
            },
            "id": "1275840884769259523",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275834637437276165"
                }
            ],
            "source": "Twitter for iPhone",
            "text": "RT @DavidYankovich: A man who admitted his own guilt twice is getting freed from prison while black folks who jump a turnstile in NYC subwa…"
        },
        {
            "author_id": "3031898016",
            "created_at": "2020-06-24T17:19:04.000Z",
            "entities": {
                "hashtags": [
                    {
                        "start": 0,
                        "end": 4,
                        "tag": "NYC"
                    },
                    {
                        "start": 20,
                        "end": 35,
                        "tag": "OccupyCityHall"
                    },
                    {
                        "start": 209,
                        "end": 217,
                        "tag": "protest"
                    },
                    {
                        "start": 218,
                        "end": 229,
                        "tag": "NycProtest"
                    },
                    {
                        "start": 230,
                        "end": 247,
                        "tag": "NoJusticeNoPeace"
                    },
                    {
                        "start": 248,
                        "end": 259,
                        "tag": "BLMprotest"
                    },
                    {
                        "start": 260,
                        "end": 277,
                        "tag": "blacklivesmatter"
                    }
                ]
            },
            "id": "1275840878238552064",
            "lang": "de",
            "possibly_sensitive": false,
            "source": "Twitter Web App",
            "text": "#NYC protests 6/24\n\n#OccupyCityHall \n(City Hall)\nWash Sq (kids) 1\nCarl Schurz (vigil) 7\nJackie Robinson Pk (vigil) 730\n\nMcCarren vigil &amp; march 7\nGAP 730\nNicholas Hayward Jr Park vigil 8\n\n277 W 231st St 1\n\n#protest #NycProtest #NoJusticeNoPeace #BLMprotest #blacklivesmatter"
        },
        {
            "author_id": "939165988435607552",
            "created_at": "2020-06-24T17:19:03.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 16,
                        "username": "jonrappoport"
                    }
                ]
            },
            "id": "1275840877651546113",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275794225309921285"
                }
            ],
            "source": "Twitter for Android",
            "text": "RT @jonrappoport: Forget about coffee and doughnuts, Welcome back to the office! \n\nThat 'socially distant' elevator ride. Gives new meaning…"
        },
        {
            "author_id": "110578919",
            "created_at": "2020-06-24T17:19:03.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 13,
                        "username": "zerohedge"
                    }
                ],
                "urls": [
                    {
                        "start": 68,
                        "end": 91,
                        "url": "https://t.co/wqV97PbtF9",
                        "expanded_url": "https://www.zerohedge.com/political/de-blasio-considers-laying-22000-nyc-employees",
                        "display_url": "zerohedge.com/political/de-b…",
                        "images": [
                            {
                                "url": "https://pbs.twimg.com/news_img/1275839982771539968/xZNipbjm?format=jpg&name=orig",
                                "width": 650,
                                "height": 447
                            },
                            {
                                "url": "https://pbs.twimg.com/news_img/1275839982771539968/xZNipbjm?format=jpg&name=150x150",
                                "width": 150,
                                "height": 150
                            }
                        ],
                        "status": 200,
                        "title": "De Blasio Considers Laying Off 22,000 NYC Employees ",
                        "description": "\"The city may have to lay off workers...\"",
                        "unwound_url": "https://www.zerohedge.com/political/de-blasio-considers-laying-22000-nyc-employees"
                    }
                ]
            },
            "id": "1275840876997050369",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275839979772665861"
                }
            ],
            "source": "Twitter for iPhone",
            "text": "RT @zerohedge: De Blasio Considers Laying Off 22,000 NYC Employees  https://t.co/wqV97PbtF9"
        },
        {
            "author_id": "186075913",
            "created_at": "2020-06-24T17:19:03.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 15,
                        "username": "AmyJacobson"
                    },
                    {
                        "start": 67,
                        "end": 81,
                        "username": "LoriLightfoot"
                    }
                ]
            },
            "id": "1275840876074369025",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "retweeted",
                    "id": "1275760016402849792"
                }
            ],
            "source": "Twitter for Android",
            "text": "RT @AmyJacobson: I called it! NYC reopens beaches BEFORE Chicago. \u2066@LoriLightfoot\u2069 sunbathing allowed since Memorial Day and now they can S…"
        },
        {
            "author_id": "4421576056",
            "created_at": "2020-06-24T17:19:03.000Z",
            "entities": {
                "mentions": [
                    {
                        "start": 3,
                        "end": 19,
                        "username": "hirosemaryhello"
                    }
                ]
            },
            "id": "1275840875466305542",
            "lang": "en",
            "possibly_sensitive": false,
            "referenced_tweets": [
                {
                    "type": "quoted",
                    "id": "1275622383555133440"
                },
                {
                    "type": "retweeted",
                    "id": "1275837188715020290"
                }
            ],
            "source": "Twitter for Android",
            "text": "RT @hirosemaryhello: NYC! can you help the protestors currently occupying City Hall to demand the defunding of the NYPD? they need supplies…"
        }
    ],
    "meta": {
        "newest_id": "1275840892285399041",
        "oldest_id": "1275840875466305542",
        "result_count": 10,
        "next_token": "b26v89c19zqg8o3fo7gesq314zlbjb2xlwutmy72r47lp"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Full-archive search
Search across the complete history of public Tweets matching a search query; since the first Tweet was created in March 2006.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all) for this endpoint.

**NOTE** this endpoint requires access via the Academic Research product track

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/search/all?query=
>```
### Query Params

|Param|value|
|---|---|
|query||
|start_time||
|end_time||
|since_id||
|until_id||
|max_results||
|next_token||
|tweet.fields||
|expansions||
|media.fields||
|place.fields||
|poll.fields||
|user.fields||


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Tweet Counts 

## End-point: Recent Tweet counts
Search for public Tweets created in the last 7 days.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/counts/recent?query=
>```
### Query Params

|Param|value|
|---|---|
|query||
|start_time||
|end_time||
|since_id||
|until_id||
|granularity|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Full-archive Tweet counts
Search across the complete history of public Tweets matching a search query; since the first Tweet was created in March 2006.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all) for this endpoint.

**NOTE** this endpoint requires access via the Academic Research product track

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/counts/all?query=
>```
### Query Params

|Param|value|
|---|---|
|query||
|start_time||
|end_time||
|since_id||
|until_id||
|next_token||
|granularity|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Filtered Stream 

## End-point: Add Rules
Create filter rules. To create one or more rules, submit an add payload as an array of rules and operators.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/tweets/search/stream/rules
>```
### Body (**raw**)

```json
{
    "add": [
        {
            "value": "bio_location:nyc",
            "tag": "testtopic"
        }
    ]
}
```

### Response: 400
```json
{
    "errors": [
        {
            "parameters": {
                "delete": []
            },
            "message": "JSON doesn't match expected schema"
        }
    ],
    "title": "Invalid Request",
    "detail": "One or more parameters to your request was invalid.",
    "type": "https://api.twitter.com/2/problems/invalid-request"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Retrieve Rules
Returns a list of filter rules currently active on the streaming endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/search/stream/rules
>```
### Response: 200
```json
{
    "data": [
        {
            "id": "1273636687768285186",
            "value": "meme has:images"
        },
        {
            "id": "1273636687768285187",
            "value": "puppy has:media",
            "tag": "puppies with media"
        }
    ],
    "meta": {
        "sent": "2020-06-18T15:21:58.638Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Rules (by rule ID)
Delete filter rules. To delete one or more rules, submit a delete object payload with an array of rule IDs to delete.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/tweets/search/stream/rules
>```
### Body (**raw**)

```json
{
    "delete": {
        "ids": [
            ""
        ]
    }
}
```

### Response: 400
```json
{
    "errors": [
        {
            "parameters": {
                "add.value": []
            },
            "message": "field is required"
        }
    ],
    "title": "Invalid Request",
    "detail": "One or more parameters to your request was invalid.",
    "type": "https://api.twitter.com/2/problems/invalid-request"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Rules (by rule value)
Delete filter rules. To delete one or more rules, submit a delete object payload with an array of rule values to delete.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/tweets/search/stream/rules
>```
### Body (**raw**)

```json
{
	"delete": {
		"values": [
			""
		]
	}
}
```

### Response: 201
```json
{
    "data": [
        {
            "value": "tostones recipe",
            "id": "1273646795642421249"
        }
    ],
    "meta": {
        "sent": "2020-06-18T16:00:33.972Z",
        "summary": {
            "created": 1,
            "not_created": 0,
            "valid": 1,
            "invalid": 0
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Stream (see description)
Streams Tweets in real-time based on a specific set of filter rules.

Please note streaming responses are currently [not supported](https://github.com/postmanlabs/postman-app-support/issues/5040) in Postman. Use this to help form your request, then click on Code > cURL. Copy the cURL command and paste in terminal to view the response.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/search/stream
>```
### Query Params

|Param|value|
|---|---|
|tweet.fields||
|expansions||
|media.fields||
|poll.fields||
|place.fields||
|user.fields||
|backfill_minutes|null|


### Response: 429
```json
{
    "title": "ConnectionException",
    "detail": "This stream is currently at the maximum allowed connection limit.",
    "connection_issue": "TooManyConnections",
    "type": "https://api.twitter.com/2/problems/streaming-connection"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Sampled Stream 

## End-point: Stream (see description)
Stream, in real-time, roughly a 1% sample of all public Tweets.

Please note streaming responses are currently [not supported](https://github.com/postmanlabs/postman-app-support/issues/5040) in Postman. Use this to help form your request, then click on Code > cURL. Copy the cURL command and paste in terminal to view the response.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/sample/stream
>```
### Query Params

|Param|value|
|---|---|
|tweet.fields||
|expansions||
|media.fields||
|poll.fields||
|place.fields||
|user.fields||
|backfill_minutes|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Spaces 
## 📁 Collection: Spaces lookup 

## End-point: Spaces lookup by single ID
This endpoint returns information about a single Space with the specified ID.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/spaces/:id?space.fields=&expansions=&user.fields=&topic.fields
>```
### Query Params

|Param|value|
|---|---|
|space.fields||
|expansions||
|user.fields||
|topic.fields|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Spaces lookup by list of IDs
This endpoint returns information about one or more Spaces with the specified comma-separated list of IDs. You can request up to 100 Spaces in a single request

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/spaces?ids=&space.fields=&expansions=&user.fields=&topic.fields
>```
### Query Params

|Param|value|
|---|---|
|ids||
|space.fields||
|expansions||
|user.fields||
|topic.fields|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Lookup Spaces created by one or more users
This endpoint returns information about a user. Specify user by username.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/spaces/by/creator_id?user_ids=&space.fields=&expansions=&user.fields=&topic.fields
>```
### Query Params

|Param|value|
|---|---|
|user_ids||
|space.fields||
|expansions||
|user.fields||
|topic.fields|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Users who bought a ticket to a Space
Returns a list of users who are blocked by the specified user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/spaces/:id/buyers
>```
### Headers

|Content-Type|Value|
|---|---|
|user.fields||


### Headers

|Content-Type|Value|
|---|---|
|expansions||


### Headers

|Content-Type|Value|
|---|---|
|tweet.fields||


### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||
|pagination_token||


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: Search Spaces 

## End-point: Search Spaces by title
This endpoint returns Spaces matching the specified keyword query.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/spaces/search?query=&state=&space.fields=&expansions=&user.fields&topic.fields
>```
### Query Params

|Param|value|
|---|---|
|query||
|state||
|space.fields||
|expansions||
|user.fields|null|
|topic.fields|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Batch Compliance 

## End-point: Create a batch compliance job
Creates a new compliance job for Tweet IDs or user IDs.  
  
A compliance job will contain an ID and a destination URL. The destination URL represents the location that contains the list of IDs consumed by your App

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/post-compliance-jobs) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/compliance/jobs
>```
### Body (**raw**)

```json
{
    "type": "tweets"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all batch compliance jobs
Returns a list of recent compliance jobs.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/compliance/jobs?type=tweets
>```
### Query Params

|Param|value|
|---|---|
|type|tweets|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a compliance job by ID
Get a single compliance job with the specified ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs-id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/compliance/jobs/:id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Likes 

## End-point: Like a Tweet
Allows an authenticated user to like a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-user_id-likes) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/likes
>```
### Body (**raw**)

```json
// Replace tweet-id-you-want-to-like with the ID you wish to like
{
    "tweet_id": "tweet-id-you-want-to-like"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Liked Tweets
Returns a list of Tweets that have been liked by a specified user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/liked_tweets
>```
### Query Params

|Param|value|
|---|---|
|user.fields|null|
|expansions|null|
|tweet.fields|null|
|max_results|null|
|pagination_token|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Liking users
Returns a list of users who have liked a specified Tweet ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/:id/liking_users
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||
|max_results|null|
|pagination_token|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unlike a Tweet
Allows an authenticated user to unlike a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-user_id-likes) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:id/likes/:tweet_id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Retweets 

## End-point: Retweet a Tweet
Allows an authenticated user to Retweet a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/post-users-id-retweets) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/retweets
>```
### Body (**raw**)

```json
{
    "tweet_id": "1415348607813832708"
}
```

### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Retweeted by
Returns a list of users who have liked a specified Tweet ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/reweets/api-reference/get-tweets-id-retweeted_by) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/tweets/:id/retweeted_by
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||
|max_results|null|
|pagination_token|null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Undo a Retweet
Allows an authenticated user to unlike a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/reweets/api-reference/delete-users-id-retweets-tweet_id) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:id/retweets/:source_tweet_id
>```
### 🔑 Authentication oauth1

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Bookmarks 

## End-point: Bookmark a Tweet
Allows an authenticated user to like a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-user_id-bookmarks) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: POST
>```
>https://api.twitter.com/2/users/:id/bookmarks
>```
### Body (**raw**)

```json
{
    "tweet_id": "1503863301276827651"
}
```

### 🔑 Authentication oauth2

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove a Bookmark
Allows an authenticated user to unlike a Tweet.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-user_id-likes) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: DELETE
>```
>https://api.twitter.com/2/users/:id/bookmarks/:tweet_id
>```
### 🔑 Authentication oauth2

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Bookmarked Tweets
Returns a list of Tweets that have been bookmarked by a specified user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/bookmarks
>```
### Query Params

|Param|value|
|---|---|
|user.fields||
|expansions||
|tweet.fields||
|max_results||
|pagination_token||


### 🔑 Authentication oauth2

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Timelines 

## End-point: Reverse chronological home timeline by ID
Allows you to retrieve a collection of the most recent Tweets and Retweets posted by you or a user you follow. This endpoint returns up to the last 3200 Tweets.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/timelines/reverse_chronological
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Headers

|Content-Type|Value|
|---|---|
|||


### Query Params

|Param|value|
|---|---|
|max_results|null|
|start_time|null|
|end_time|null|
|since_id|null|
|until_id|null|
|pagination_token|null|
|expansions||
|tweet.fields||
|user.fields||
|media.fields|null|
|place.fields|null|
|poll.fields|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User Tweet timeline by ID
Returns the most recent Tweets composed by a single user specified by the requested user ID.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/tweets
>```
### Query Params

|Param|value|
|---|---|
|max_results|null|
|start_time|null|
|end_time|null|
|since_id|null|
|until_id|null|
|pagination_token|null|
|expansions||
|tweet.fields||
|user.fields||
|media.fields|null|
|place.fields|null|
|poll.fields|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User mention timeline by ID
Allows you to retrieve a collection of the most recent Tweets and Retweets posted by you or a user you follow. This endpoint returns up to the last 3200 Tweets.

For full details, see the [API reference](https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions) for this endpoint.

[Sign up](https://t.co/signup) for the Twitter API
### Method: GET
>```
>https://api.twitter.com/2/users/:id/mentions
>```
### Query Params

|Param|value|
|---|---|
|max_results|null|
|start_time|null|
|end_time|null|
|since_id|null|
|until_id|null|
|pagination_token|null|
|expansions||
|tweet.fields||
|user.fields||
|media.fields|null|
|place.fields|null|
|poll.fields|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
