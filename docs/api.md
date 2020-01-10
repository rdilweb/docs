# API

The RDIL API is able to perform different tasks that help out in different ways.

## Base Endpoint

The production version is hosted at `https://backend.rdil.rocks/`.

## HyperiumJailbreak Specifics

| **HTTP Method** | **Endpoint**                    | **Description**                   |
|-----------------|---------------------------------|-----------------------------------|
| `GET`           | `/checkUpdate`                  | Get the latest version of HJB.    |
| `GET`           | `/getOnline`                    | Get the number of online players. |
| `GET`           | `/words.txt`                    | Get the NickHider word list.      |
| `GET`           | `/levelhead_config_mirror.json` | Get the Levelhead config file.    |

## Hypixel Timers

| **HTTP Method** | **Endpoint**           | **Description**                           |
|-----------------|------------------------|-------------------------------------------|
| `GET`           | `/timers/dark-auction` | Get the time until the next dark auction. |

## Source

To prevent abuse, the server's source is no longer public.
